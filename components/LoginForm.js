"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
    const navigation = useRouter(); 
    const formik = useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: Yup.object({
        username: Yup.string()
          .required("Username is required")
          .min(3, "Username must be at least 3 characters"),
        password: Yup.string()
          .required("Password is required")
          .min(6, "Password must be at least 6 characters"),
      }),
      onSubmit: (values) => {
        if (values.username === "Starberry" && values.password === "123456") {
          console.log("Login details:", values);
          navigation.push("/home");
        } else {
          toast.error("Invalid Credentials", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      },
    });
  return (
    <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-white mb-1"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                formik.errors.username && formik.touched.username
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.username && formik.touched.username && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.username}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                formik.errors.password && formik.touched.password
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#000] text-white py-2 hover:bg-primary focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            Login
          </button>
          <ToastContainer position="top-center" />
        </form>
  )
}

export default LoginForm
