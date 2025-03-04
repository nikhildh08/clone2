

// import { useRouter } from "next/navigation"; // Import useRouter
import Head from "next/head";
import Image from "next/image";

export default function LoginPage() {
//   const router = useRouter(); // Initialize Next.js router

  return (
    <>
      <Head>
        <title>Login Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="flex h-screen items-center justify-center bg-gray-100">
    

        <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-8">
          <div className="text-center mb-6">
            <Image src="/logo.png" alt="Logo" width={120} height={50} className="mx-auto" />
            <h2 className="text-2xl font-semibold mt-3">Login</h2>
            <span className="text-gray-500">Login to your account</span>
          </div>

          <form action="/dashboard/firstpage" className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Email or Phone number.."
                required
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
