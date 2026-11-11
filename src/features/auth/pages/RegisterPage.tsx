import { Eye } from "lucide-react";


function Register() {


  return (
    <>

    <section className="grid min-h-[calc(100vh-5rem)] md:grid-cols-2">
      {/* Left Side */}
      <div className="hidden flex-col justify-center bg-teal-700 px-12 text-white md:flex lg:px-20">
        <span className="mb-6 w-fit rounded-full bg-white/10 px-4 py-2 text-sm">
          Welcome to SurveyLand
        </span>

        <h1 className="max-w-lg text-4xl font-bold leading-tight lg:text-5xl">
          Your voice matters. Make it count.
        </h1>

        <p className="mt-6 max-w-md text-base leading-7 text-teal-50">
          Share your opinions, participate in surveys, and help shape better
          decisions through your feedback.
        </p>

        <div className="mt-10 flex items-center gap-3">
          <div className="h-2 w-10 rounded-full bg-white" />
          <div className="h-2 w-2 rounded-full bg-white/40" />
          <div className="h-2 w-2 rounded-full bg-white/40" />
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex items-center justify-center px-6 py-12 sm:px-10 lg:px-16">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-700">
              Welcome back
            </p>

            <h2 className="text-3xl font-bold text-gray-900">
           Creat Account
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Enter your details below to access your account.
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
              Name
              </label>

              <input
                id="name"
                name="firstName"
                type="text"
                placeholder="Name"
                autoComplete="email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              />
            </div>
             <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              />
            </div>
              <div >
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>


 <div className="relative">

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              />
                         <button
      type="button"
       className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-teal-600"

    >
     <Eye/>
    </button>
    </div>

            </div>
             <div >
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                 confirm  Password
                </label>
 <div className="relative">

              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Enter your confirm password"
                autoComplete="current-password"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              />
                 <button
      type="button"
       className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-teal-600"

    >
     <Eye/>
    </button>
    </div>
            </div>

            <button
              type="submit"

              className="w-full rounded-lg bg-teal-700 px-4 py-3 font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Sign up
            </button>
          </form>


        </div>
      </div>
    </section>
    </>
  )
}

export default Register;
