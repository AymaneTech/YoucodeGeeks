import { LockKeyhole, Mail, User } from "lucide-react"
import { AuthInput } from "../../components/partials/AuthInput"
import { Stack } from "@chakra-ui/react"
import { AuthButton } from "../../components/partials/Buttons"
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className="flex justify-center items-center bg-cover bg-center w-[100vw] h-[100vh] bg-[url('/src/assets/images/hero.png')] font-mono">
      <div>
        <div>
          <div className="flex gap-12 bg-gradient-to-r from-gray-700 to-black p-20 rounded-2xl">
            <div className="flex flex-col gap-8">
              <div className="">
                <h1 className="text-4xl text-white font-bold">Create Your Account! </h1>
                <p className="text-white"> Welcome to geeks world</p>
              </div>
              <form className="">
                <Stack spacing={6}>
                  <AuthInput options={{
                    label: "Full Name",
                    icon: <User color="white" />,
                    type: "text",
                    placeholder: "Enter your name"
                  }} />
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
                  <AuthInput options={{
                    label: "Confirm password",
                    icon: <LockKeyhole color="white" />,
                    type: "password",
                    placeholder: "Confirm your password"
                  }} />
                  <AuthButton>Sign up</AuthButton>
                </Stack>
                or
              </form>
              <div>
                <p className="text-white">Aready have an account? <Link className="underline text-blue-400" to="/login">Login</Link> </p>
              </div>
            </div>
            <div className="">
              <img src="/src/assets/images/regsiter.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
