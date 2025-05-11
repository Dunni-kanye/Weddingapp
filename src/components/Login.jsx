"use client"

import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { HeartIcon } from "lucide-react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email === "test@example.com" && password === "password123") {
      navigate("/Homepage")
    } else {
      alert("Invalid email or password")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white p-4">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-md">
        <div className="text-center space-y-2">
          <HeartIcon className="mx-auto h-12 w-12 text-slate-400" />
          <h1 className="text-3xl font-serif italic tracking-tight text-gray-900">WedLove</h1>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-slate-200 w-16" />
            <p className="text-sm text-gray-500 font-serif italic">Wedding Budget App</p>
            <div className="h-px bg-slate-200 w-16" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Id
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-slate-500 focus:border-slate-500"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <a href="/forgot-password" className="text-xs text-slate-500 hover:text-slate-800">
                  Forgotten Password
                </a>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-slate-500 focus:border-slate-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded-md"
          >
            Sign In
          </button>

          {/* Social buttons and sign-up link remain unchanged */}
        </form>

        <div className="text-center text-sm">
          <p className="text-gray-500">
            Don&apos;t have an account?{" "}
            <a href="/Signup" className="font-medium text-slate-700 hover:text-slate-900">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
