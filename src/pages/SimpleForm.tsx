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
              className="z-[99] my-5 text-xl font-bold bg-yellow-400 text-black hover:bg-black hover:text-white p-5"
            >
              <Link href="http://13.235.73.131/ask">
              
              Explore More
              </Link>
            </Button> : <Button 
              className="z-[99] my-5 text-xl font-bold bg-yellow-400 text-black hover:bg-black hover:text-white p-5"
            >
              
              
              <LoginLink>Login To Explore</LoginLink>
            </Button>
            }

            <div className="absolute inset-0 bottom-0 h-full w-full bg-gradient-to-t from-white to-transparent blur-lg pointer-events-none"></div>
          </div>
        </div>
      </div>

      <SmallInfo />
      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">LegalX</h2>
            <p className="text-gray-400">Simplifying Law for All</p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.675 0h-21.35C.601 0 0 .6 0 1.337v21.326C0 23.4.6 24 1.325 24h11.495v-9.294H9.982V11.09h2.838V8.579c0-2.818 1.669-4.363 4.244-4.363 1.228 0 2.524.211 2.524.211v2.8h-1.42c-1.396 0-1.831.865-1.831 1.75v2.113h3.125l-.499 3.615h-2.626V24h5.149c.725 0 1.325-.6 1.325-1.337V1.336C24 .6 23.4 0 22.675 0z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.608 1.794-1.569 2.163-2.724-.949.555-2.002.959-3.127 1.184-.896-.957-2.173-1.555-3.591-1.555-2.715 0-4.917 2.203-4.917 4.917 0 .39.045.765.127 1.124C7.69 8.094 4.064 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.215 2.188 4.099-.807-.026-1.566-.247-2.229-.616v.061c0 2.385 1.698 4.374 3.946 4.825-.414.113-.85.171-1.296.171-.314 0-.615-.03-.912-.085.617 1.926 2.407 3.324 4.526 3.363-1.66 1.3-3.751 2.078-6.026 2.078-.391 0-.779-.023-1.17-.068 2.148 1.376 4.706 2.176 7.454 2.176 8.946 0 13.838-7.405 13.838-13.838 0-.21-.005-.422-.015-.63.95-.687 1.774-1.543 2.428-2.521z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.23 0H1.77C.791 0 0 .792 0 1.77v20.46C0 23.208.792 24 1.77 24h20.46c.979 0 1.77-.792 1.77-1.77V1.77C24 .791 23.208 0 22.23 0zM7.08 20.452H3.69V9.059h3.39v11.393zm-1.695-13.2c-1.088 0-1.97-.882-1.97-1.97 0-1.088.882-1.97 1.97-1.97 1.089 0 1.97.882 1.97 1.97 0 1.089-.881 1.97-1.97 1.97zM20.45 20.452h-3.39v-5.569c0-1.329-.025-3.041-1.854-3.041-1.854 0-2.14 1.448-2.14 2.945v5.665h-3.39V9.059h3.256v1.549h.046c.453-.86 1.562-1.764 3.213-1.764 3.433 0 4.068 2.257 4.068 5.191v6.417z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 text-center text-gray-400">
          © {new Date().getFullYear()} LegalX. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default SimpleForm;
