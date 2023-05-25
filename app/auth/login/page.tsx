"use client";

import Image from "next/image";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import Card from "../../../components/Card";
import Button from "../../../components/Button";
import logo from "@/assets/images/logo.png";
import { useState } from "react";

const initial = { email: "", password: "", firstName: "", lastName: "" };

const content = {
  link1Url: "/auth/recover",
  link1Text: "Forgot password?",
  link2Url: "/auth/signup",
  link2Text: "Sign up now",
  header: "Sign in to your account",
  buttonText: "Sign in",
};

export default function Login() {
  const [formState, setFormState] = useState(initial);

  return (
    <Card className="pt-14">
      <FormHeader />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <Label>Email address</Label>
            <Input
              required
              className="mt-2"
              value={formState.email}
              onChange={(e: any) =>
                setFormState((s) => ({ ...s, email: e.target.value }))
              }
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <Label>Password</Label>
              <div className="text-sm">
                <a
                  href={content.link1Url}
                  className="font-semibold text-greeny hover:text-green-600"
                >
                  {content.link1Text}
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
            <Button type="submit">{content.buttonText}</Button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          {"Not a member? "}
          <a
            href={content.link2Url}
            className="font-semibold leading-6 text-greeny hover:text-green-600"
          >
            {content.link2Text}
          </a>
        </p>
      </div>
    </Card>
  );
}

function FormHeader() {
  return (
    <div className="text-center">
      <Image
        className="mx-auto w-auto"
        src={logo}
        alt="Wolf"
        width={50}
        height={50}
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300">
        {content.header}
      </h2>
    </div>
  );
}
