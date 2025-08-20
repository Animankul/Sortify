'use client'

export default function LoginPopup({
  switchToSignup,
  onSuccess
}: {
  switchToSignup: () => void
  onSuccess: () => void
}) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSuccess()
  }

  return (
    <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg text-black">
      <h2 className="text-2xl font-bold text-center text-purple-700">Login</h2>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          required
          className="border rounded-md px-3 py-2 w-full focus:outline-purple-500"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="border rounded-md px-3 py-2 w-full focus:outline-purple-500"
        />
        <button
          type="submit"
          className="mt-2 bg-purple-700 text-white py-2 rounded-md font-bold hover:bg-purple-800"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-center text-gray-600">
        Don&apos;t have an account?{' '}
        <button
          onClick={switchToSignup}
          className="text-purple-700 font-semibold hover:underline"
        >
          Sign up
        </button>
      </p>
    </div>
  )
}
