import RegisterForm from "@/components/forms/RegisterForm";
import { getCurrentUser } from "@/lib/functions/patient.functions";
import Image from "next/image";
import React from "react";

const Register = async ({ params }: SearchParamProps) => {
  const { userId } = params;
  const user = await getCurrentUser(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.png"
            alt="Logo"
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
          />
          <RegisterForm user={user} />

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
        src="/assets/images/register-img.png"
        alt="onboarding"
        height={1000}
        width={1000}
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
