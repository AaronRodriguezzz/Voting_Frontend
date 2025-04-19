"use client";

import Image from "next/image";
import Link from "next/link";
import Background from "../components/Background";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [credentials, setCredentials] = useState({
    studentId: "",
    password: "",
  });

  return (
    <main className="min-h-screen bg-white relative">
      <Background>

        <div className="z-10 flex flex-col min-h-screen">
          {/* Main Content */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8 max-w-md mx-auto w-full">
              <Image
                src="/initial/voting.png"
                alt="Voting"
                width={280}
                height={220}
                className="mx-auto mt-7 my-2"
              />

            <form className="w-full space-y-6 z-10">
              <div className="space-y-2">
                <label
                  htmlFor="student-id"
                  className="block text-sm text-start text-black font-bold"
                >
                  STUDENT ID
                </label>
                <input
                  type="text"
                  id="student-id"
                  value={credentials.studentId}
                  onChange={(e) =>
                    setCredentials({ ...credentials, studentId: e.target.value })
                  }
                  className="text-black w-full h-10 px-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                  placeholder="Student ID"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm text-start text-black font-bold"
                > 
                  PASSWORD
                </label>
                <input
                  type="password"
                  id="password"
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                  className="text-black w-full h-10 px-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                  placeholder="Password"
                  required
                />
              </div>

              <button
                type="button"
                className="w-full text-gray-500 text-sm underline"
              >
                Forget Password?
              </button>

              <button
                type="submit"
                className="w-full bg-gray-900 py-3 px-12 text-xl font-bold text-white rounded-lg hover:bg-red-500 transition-colors "
              >
                LOG IN
              </button> 
            </form>

            <p className="text-sm text-gray-500 mt-6 z-10">
              Don't have an account yet?{" "}
              <Link
                href="/register"
                className="underline text-blue-500 hover:text-blue-600"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </Background>
    </main>
  );
}
