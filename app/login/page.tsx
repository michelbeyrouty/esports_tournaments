"use client";

import Image from "next/image";
import Input from "../../components/Input";
import Label from "../../components/Label";
import logo from "@/assets/images/logo.png";
import { useState } from "react";

const initial = { email: "", password: "", firstName: "", lastName: "" };

export default function Login() {
  const [formState, setFormState] = useState(initial);

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div>
        <Image
          className="mx-auto w-auto"
          src={logo}
          alt="Wolf"
          width={50}
          height={50}
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <Label>Email address</Label>
            <Input
              required
              className="mt-2"
              value={formState.firstName}
              onChange={(e: any) =>
                setFormState((s) => ({ ...s, firstName: e.target.value }))
              }
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <Label>Password</Label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-greeny hover:text-green-600"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <Input
              required
              className="mt-2"
              value={formState.password}
              onChange={(e: any) =>
                setFormState((s) => ({ ...s, password: e.target.value }))
              }
            />
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-greeny px-3 py-1.5 text-sm font-semibold leading-6 text-gray-300 shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          {"Not a member? "}
          <a
            href="/signup"
            className="font-semibold leading-6 text-greeny hover:text-green-600"
          >
            Sign up now
          </a>
        </p>
      </div>
    </div>
  );
}
