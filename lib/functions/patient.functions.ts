"use server";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { ID, Query } from "node-appwrite";
import { appwriteConfig, databases, storage, users } from "../appwrite.config";
import { parseStringify } from "../utils";
import { InputFile } from "node-appwrite/file";

export const createUser = async (user: CreateUserParams) => {
  try {
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );

    console.log(newUser);

    return parseStringify(newUser);
  } catch (error: any) {
    if (error && error?.code === 409) {
      const existingUser = await users.list([
        Query.equal("email", [user.email]),
      ]);

      return existingUser.users[0];
    }
  }
};

export const getCurrentUser = async (userId: string) => {
  try {
    const user = await users.get(userId);

    if (!user) {
      console.log("User not found for userId:", userId);
      return null; // Or handle appropriately
    }

    return parseStringify(user);
  } catch (error) {
    console.log(error);
  }
};

export const registerPatient = async ({
  identificationDocument,
  ...patient
}: RegisterUserParams) => {
  try {
    let file;

    if (identificationDocument) {
      const inputFile = InputFile.fromBuffer(
        identificationDocument?.get("blobFile") as Blob,
        identificationDocument?.get("fileName") as string
      );

      file = await storage.createFile(
        appwriteConfig.bucketId,
        ID.unique(),
        inputFile
      );
    }

    console.log("user id is", patient.userId);

    const newPatient = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.patientCollectionId,
      ID.unique(),
      {
        identificationDocumentId: file?.$id || null,
        identificationDocumentUrl: `${appwriteConfig.endpointUrl}/storage/buckets/${appwriteConfig.bucketId}/files/${file?.$id}/view?project=${appwriteConfig.projectId}`,
        ...patient,
      }
    );

    return parseStringify(newPatient);
  } catch (error) {
    console.log(error);
  }
};

export const getPatient = async (userId: string) => {
  try {
    const patient = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.patientCollectionId,
      [Query.equal("userId", userId)]
    );

    return parseStringify(patient.documents[0]);
  } catch (error) {
    console.log(error);
  }
};
