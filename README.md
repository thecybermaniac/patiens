## Patiens

This is a Next.js healthcare management application, that allows patiens to easily register, and book appointments with doctors, featuring an administrative dashboard for scheduling and cancelling appointments, along with SMS notifications. Live preview [here](https://patiens.vercel.app)

![Patiens](/public/assets/thumbnail.png)

## Features

-   [x] Easy registration for patients
-   [x] Easy appointment booking for patients
-   [x] Administrative dashboard
-   [x] Confirm/schedule appointment from admin dashboard
-   [x] Cancel appointment with a reason, from the admin dashboard
-   [x] Patients recieve SMS notifications with appointment details on confirmation by admin
-   [x] File uploads with Appwrite storage
-   [x] Complete responsiveness
-   [x] Manage and track application performances using Sentry

## Getting Started

Follow these steps to set up the project locally on your machine.

Prerequisites

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/thecybermaniac/patiens.git
cd patiens
```

**Installation**

```bash
npm install
```

**Setup Environment Variables**

This application was built with [Appwrite](https://appwrite.io) and to make sure it works properly, you need to register and create a project on Appwrite to get the necessary keys. Then, create a new file named `.env.local` in the root of your project and add the following content:

```ini
#APPWRITE
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PROJECT_ID=
NEXT_APPWRITE_KEY=
NEXT_PUBLIC_DATABASE_ID=
NEXT_PUBLIC_PATIENT_COLLECTION_ID=
NEXT_PUBLIC_DOCTOR_COLLECTION_ID=
NEXT_PUBLIC_APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=
NEXT_PUBLIC_ADMIN_PASSKEY=
```

Replace the placeholder values with your actual Appwrite credentials.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.