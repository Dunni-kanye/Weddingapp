import { useState } from "react"
import { CalendarIcon, HeartIcon } from "lucide-react"

export default function SignUp() {
  const [weddingDate, setWeddingDate] = useState("")

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white-50 to-white p-4">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-md">
        <div className="text-center space-y-2">
          <HeartIcon className="mx-auto h-12 w-12 text-red-700" />
          <h1 className="text-3xl font-bold text-gray-900">Create your account</h1>
          <p className="text-sm text-gray-500">Start planning your perfect wedding day</p>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First name</label>
              <input type="text" className="w-full border rounded-md px-3 py-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last name</label>
              <input type="text" className="w-full border rounded-md px-3 py-2" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" autoComplete="off" className="w-full border rounded-md px-3 py-2" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" autoComplete="off" className="w-full border rounded-md px-3 py-2" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Wedding date (optional)</label>
            <div className="flex items-center">
              <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
              <input
                type="date"
                value={weddingDate}
                onChange={(e) => setWeddingDate(e.target.value)}
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-500 text-white font-medium py-2 px-4 rounded-md"
          >
            Create Account
          </button>
        </form>

        <div className="text-center text-sm pt-4">
          <p className="text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="text-rose-500 hover:text-red-600 font-medium">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
