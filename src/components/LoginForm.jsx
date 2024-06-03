import { useFormik } from "formik";
import { signInSchema } from "../schemas";
import { Link } from "react-router-dom";
import axios from "axios";
const initialValues = {
  email: "",
  password: "",
};
const LoginForm = ({ setToken }) => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signInSchema,
      onSubmit: async (values) => {
        const {
          data: { token },
        } = await axios.post("http://localhost:8000/auth/login", values);
        localStorage.setItem("token", token);
        setToken(true)
      },
    });

  return (
    <div>
      <h1 className="text-3xl">Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-8">
          <input
            className="p-6 bg-gray-200 border-none outline-none w-[25rem] rounded-lg"
            type="text"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="border-2 border-b-gray-300"></div>
        <div>
          <input
            className="p-6 bg-gray-200 border-none outline-none w-[25rem] rounded-lg"
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div>
          {errors.email && touched.email ? (
            <p className="text-red-500 text-sm">{errors.email}</p>
          ) : null}
        </div>
        {!errors.email && (
          <div>
            {errors.password && touched.password ? (
              <p className="text-red-500 text-sm">{errors.password}</p>
            ) : null}
          </div>
        )}
        <div>
          <div className="flex justify-between items-center text-gray-500 h-[3rem]">
            <Link to="/register" className="cursor-pointer text-sm">
              Don&apos;t Have Account?
            </Link>
            <h1 className="text-sm">Forgot Password</h1>
          </div>

          <div className="flex justify-center">
            <button className="bg-[#7C77DC] w-[25rem] rounded-lg p-4 hover:bg-[#706bdc]">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
