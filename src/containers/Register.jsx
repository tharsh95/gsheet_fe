import React from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <React.Fragment>
      <div className="h-[100vh] flex flex-col justify-between overflow-y-hidden">
        <div className="w-[15rem]">
          <img src="/logo.png" />
        </div>
        <div className="flex justify-around items-start ">
          <div className="text-gray-400">
            {/* <img src="https://app.nexaflow.xyz/loginIllustration.png" /> */}
            <h1 className="mb-4">Welcome to Nexaflow</h1>
            <h1>Bring Your Customise website to life in rocket speed</h1>
          </div>
          <div>
            <RegisterForm />
          </div>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#1673FF"
              fillOpacity="1"
              d="M0,128L40,149.3C80,171,160,213,240,224C320,235,400,213,480,197.3C560,181,640,171,720,154.7C800,139,880,117,960,122.7C1040,128,1120,160,1200,181.3C1280,203,1360,213,1400,218.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </React.Fragment>
  );
};
// #1673FF

export default Register;
