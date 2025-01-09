import 'tailwindcss/tailwind.css';  
import LoginForm from "@/components/LoginForm"
export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#EC008C]">
    <div className="w-full max-w-md p-8 bg-[#380759] shadow-md shadow-[#380759] rounded-lg">
    <h1 className="text-2xl font-bold text-center text-white mb-1">
        Welcome to Starberry
      </h1>
      <h3 className="text-2xl font-bold text-center text-white mb-6">
        Login
      </h3>
      <LoginForm />
    </div>
  </div>
  )
}