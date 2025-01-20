import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/functions/patient.functions";
import Image from "next/image";

const NewAppointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.png"
            alt="Logo"
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
          />
          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
          />

          <p className="copyright py-12">
            © 2025 Patiens. Developed by&nbsp;
            <a
              href="https://harrisonthecybermaniac.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-200"
            >
              Harrsion | The Cybermaniac
            </a>
          </p>
        </div>
      </section>
      <Image
        src="/assets/images/appointment-img.png"
        alt="appointment"
        height={1000}
        width={1000}
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default NewAppointment;
