import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import SmallInfo from "@/components/SmallInfo";
import Dialog from "@/components/Dialog";
import Link from "next/link";

const SimpleForm = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="relative font-title">
      {user ? (
        <div className="relative  text-white font-bold text-lg">
          <span className="absolute z-[999] left-1/2 top-2 -translate-x-20 text-3xl">
            Hey {user.given_name} !
          </span>
          <Button className="absolute z-[999] top-2 right-4 hover:text-white bg-white text-black font-bold text-lg">
            <LogoutLink>Log out</LogoutLink>
          </Button>
        </div>
      ) : (
        <div>
          <Button className="absolute z-[999] right-5 top-2 hover:text-white bg-white text-black font-bold text-lg">
            <LoginLink>Sign In</LoginLink>
          </Button>
          <Button className="absolute z-[999] right-32 top-2 hover:text-white bg-white text-black font-bold text-lg">
            <RegisterLink>Sign Up</RegisterLink>
          </Button>
        </div>
      )}

      <div className="relative bg-black">
        <div className="absolute w-full h-screen bg-black opacity-[0.3]"></div>
        <Image
          className="h-screen w-screen"
          src="/landing.jpg"
          alt="Background"
          objectFit="cover"
          width={1920}
          height={1080}
          sizes="100vw 100vh"
          quality={100}
        />
        <div className="absolute bottom-0 text-center font-title  h-[48%] w-full">
          <div className="inset-0 flex flex-col items-center justify-center z-10 p-8 text-white ">
            <h1 className="text-7xl  z-[9] font-bold mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-tl from-sky-300 via-cyan-400 to-teal-700">
                LegalX
              </span>{" "}
              <span className="">Simplifying Law for All</span>{" "}
            </h1>
            <p className="text-4xl text-black font-semibold  z-[9] ">
              Demystifying Legal Jargon for All
            </p>
            {
              user ?
            <Button
              className="z-[99] my-5 text-xl font-bold hover:bg-yellow-400 hover:text-black p-5"
            >
              <Link href="https://www.youtube.com/" target="_blank">
              
              Explore More
              </Link>
            </Button> : <Button 
              className="z-[99] my-5 text-xl font-bold hover:bg-yellow-400 hover:text-black p-5"
            >
              
              
              <LoginLink>Login To Explore</LoginLink>
            </Button>
            }

            <div className="absolute inset-0 bottom-0 h-full w-full bg-gradient-to-t from-white to-transparent blur-lg pointer-events-none"></div>
          </div>
        </div>
      </div>

      <SmallInfo />
    </div>
  );
};

export default SimpleForm;
