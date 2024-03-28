import { LockKeyhole, Mail } from "lucide-react"
import { AuthInput } from "../../components/partials/AuthInput"
import { Stack } from "@chakra-ui/react"
import { AuthButton } from "../../components/partials/Buttons"


const Login = () => {
  return (
    <div className="flex justify-center items-center bg-cover bg-center w-[100vw] h-[100vh] bg-[url('/src/assets/images/hero.png')] font-mono">
      <div className="flex gap-12 bg-gradient-to-r from-gray-700 to-black p-20 rounded-2xl">
        <div className="flex flex-col gap-6">
          <div className="">
            <h1 className="text-4xl text-white font-bold">Create Your Account! </h1>
            <p className="text-white"> Welcome to geeks world</p>
          </div>
          <form className="">
            <Stack spacing={6}>
              <AuthInput options={{
                label: "Email",
                icon: <Mail color="white" />,
                type: "email",
                placeholder: "Enter your email"
              }} />
              <AuthInput options={{
                label: "Password",
                icon: <LockKeyhole color="white" />,
                type: "password",
                placeholder: "Enter a secure password"
              }} />
              <AuthButton>Sign up</AuthButton>
            </Stack>
          </form>
          <div className="flex justify-center gap-4 py-4">
            <button className="flex items-center justify-between gap-2 bg-white py-1 px-3 rounded-xl transition duration-300 ease-in-out transform hover:scale-105">
              <img className="w-7 h-7" src="/src/assets/images/githubgicon.png" alt="" />
              <span className="hidden sm:inline">Sign in with</span> GitHub
            </button>
            <button className="flex items-center justify-between gap-2 bg-white p-3 rounded-xl transition duration-300 ease-in-out transform hover:scale-105">
              <img className="w-7 h-7" src="/src/assets/images/googleicon.png" alt="" />
              <span className="hidden sm:inline">Sign in with</span> Google
            </button>
          </div>

        </div>
        <div className="">
          <img src="/src/assets/images/regsiter.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login;