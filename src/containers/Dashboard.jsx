import React from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleSheets from "./Integrations";

const Dashboard = ({ setToken }) => {
  const nav = useNavigate();
  return (
    <div className="flex w-[16.7vw] overflow-hidden  h-[48.7rem]">
      <div className="bg-[#90A0D0]">
        <div className="w-[15rem]">
          <img src="/logo.png" />
        </div>
        <ul className="flex flex-col items-center h-[30rem] justify-between ">
          <div className="w-full rounded-lg text-center ">
            <Link className="hover:bg-[#A6B5E0]  p-4 cursor-pointer">
              Dashboard
            </Link>
          </div>
          <div className="  rounded-lg  text-center">
            <Link className="hover:bg-[#A6B5E0] p-4  cursor-pointer">
              Settings
            </Link>
          </div>
          <div className="  rounded-lg  text-center">
            <Link
              to="/integrations"
              className="hover:bg-[#A6B5E0] p-4  cursor-pointer"
            >
              Integrations
            </Link>
          </div>
          <div className="  rounded-lg  text-center">
            <Link className="hover:bg-[#A6B5E0] p-4  cursor-pointer">
              Analytics
            </Link>
          </div>
          <div className="  rounded-lg  text-center">
            <Link className="hover:bg-[#A6B5E0] p-4  cursor-pointer">
              Documentation
            </Link>
          </div>
          <div className="  rounded-lg  text-center">
            <Link className="hover:bg-[#A6B5E0] p-4 cursor-pointer">
              My Account
            </Link>
          </div>
        </ul>
      </div>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          setToken(false);
          nav("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
