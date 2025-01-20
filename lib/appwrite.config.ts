import * as sdk from "node-appwrite";

export const appwriteConfig = {
  endpointUrl: process.env.NEXT_PUBLIC_ENDPOINT!,
  projectId: process.env.NEXT_PROJECT_ID!,
  databaseId: process.env.NEXT_PUBLIC_DATABASE_ID!,
  patientCollectionId: process.env.NEXT_PUBLIC_PATIENT_COLLECTION_ID!,
  doctorCollectionId: process.env.NEXT_PUBLIC_DOCTOR_COLLECTION_ID!,
  appointmentCollectionId: process.env.NEXT_PUBLIC_APPOINTMENT_COLLECTION_ID!,
  bucketId: process.env.NEXT_PUBLIC_BUCKET_ID!,
  secretKey: process.env.NEXT_APPWRITE_KEY!,
};


const client = new sdk.Client();

client
  .setEndpoint(appwriteConfig.endpointUrl)
  .setProject(appwriteConfig.projectId)
  .setKey(appwriteConfig.secretKey);

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
