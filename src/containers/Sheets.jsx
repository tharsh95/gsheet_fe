import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sheets = () => {
  const [email, setEmail] = useState([]);
  const handleGoogle = async (cred) => {
    console.log(cred.credential)
    const {
      data: { google },
    } = await axios.post(
      "http://localhost:8000/google",
      {
        credential: cred.credential,
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    setEmail([google]);
  };
  const fetchEmail = async () => {
    const {
      data: { email },
    } = await axios.get("http://localhost:8000/google", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setEmail(email);
    console.log(email);
  };
  useEffect(() => {
    fetchEmail();
  }, []);
  return (
    <div className="flex flex-col justify-around items-center w-[75vw] h-[55vh]">
      <div className="flex justify-between w-[50vw] ">
        <h1>Google Sheets</h1>
        {!email.length ? (
          <h1>
            <GoogleLogin
              onSuccess={(cred) => handleGoogle(cred)}
              onError={() => console.log("Login failed")}
            />
          </h1>
        ) : null}
      </div>

      {email.length ? (
        <h1>
          {email.map((el) => (
            <div key={el.email}>
              <Link
                to={`/spreadsheets/${el._id}`}
                className="text-xl font-bold"
              >
                {el.email}
              </Link>
            </div>
          ))}
        </h1>
      ) : (
        <div>No Accounts found</div>
      )}
    </div>
  );
};

export default Sheets;
