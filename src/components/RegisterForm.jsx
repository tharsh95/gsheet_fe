import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const initialValues = {
  username: "",
  email: "",
  password: "",
  conf_pass: "",
};
const RegisterForm = () => {
  const navigate = useNavigate();
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      try {
        const pay = {
          username: values.username,
          email: values.email,
          password: values.password,
        };
        await axios.post("http://localhost:8000/auth/register", pay);
        navigate("/");
      } catch (e) {
        const {
          response: {
            data: { code },
          },
        } = e;
        if (code === 333) {
          navigate("/");
        }
      }
    },
  });
  return (
    <div>
      <h1 className="text-3xl">Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-8">
          <input
            className="p-6 bg-gray-200 border-none outline-none w-[25rem] rounded-lg"
            type="text"
            placeholder="Username"
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="border-2 border-b-gray-300"></div>
        <div>
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
        <div className="mt-8">
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
        <div className="border-2 border-b-gray-300"></div>
        <div>
          <input
            className="p-6 bg-gray-200 border-none outline-none w-[25rem] rounded-lg"
            type="password"
            placeholder="Confirm Password"
            name="conf_pass"
            value={values.conf_pass}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div>
          {errors.username ? (
            <p className="text-red-500 text-sm">{errors.username}</p>
          ) : null}
        </div>
        {!errors.username && (
          <div>
            {errors.email ? (
              <p className="text-red-500 text-sm">{errors.email}</p>
            ) : null}
          </div>
        )}
        {!errors.email && (
          <div>
            {errors.password ? (
              <p className="text-red-500 text-sm">{errors.password}</p>
            ) : null}
          </div>
        )}
        {!errors.password && (
          <div>
            {errors.conf_pass ? (
              <p className="text-red-500 text-sm">{errors.conf_pass}</p>
            ) : null}
          </div>
        )}
        <div>
          <div className="flex justify-between items-center text-gray-500 h-[3rem]">
            <h1 className="text-xs">
              I Agree to the{" "}
              <a
                href="https://nexaflow.xyz/terms-and-conditions"
                target="_blank"
                className="text-[#7C77DC]"
              >
                Term and conditions
              </a>
            </h1>
            <Link to="/" className="cursor-pointer text-xs">
              Already have an Account?
            </Link>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#7C77DC] w-[25rem] rounded-lg p-4 hover:bg-[#706bdc]"
            >
              SignUp
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
