import axios from "axios";
import { useEffect, useState } from "react";
import InfoIcon from '@mui/icons-material/Info';
import BasicModal from "../components/Modal";
import Tooltip from '@mui/material/Tooltip';

import { useParams } from "react-router-dom";
const SpreadSheets = () => {
  const [sheets, setSheets] = useState([]);
  const params = useParams();
  console.log(sheets);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    const fetchAllSheets = async () => {
      const {
        data: { details },
      } = await axios.get(`http://localhost:8000/google/getAll/${params.id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setSheets(details);
    };
    fetchAllSheets();
  }, [params.id]);
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-start items-center w-[75vw] ">
        <div className="flex justify-between w-[50vw] items-center  h-[20vh] ">
          <h1 className="text-2xl font-bold">Google Sheets</h1>
          <button
            onClick={handleOpen}
            className="p-3 text-white bg-blue-500 rounded-lg"
          >
            + Add spreadsheets
          </button>
        </div>
        <div>
          <BasicModal sheets={sheets} setSheets={setSheets} handleClose={handleClose} open={open} />
        </div>
      </div>
      <div className="flex justify-center">
        <ul className="flex flex-col justify-between h-[35rem] items-start w-[35rem]">
          {sheets.map((el) => (
            <div key={el._id}>
              <li className="text-xl font-bold">{el.sheetName}<span><Tooltip title={el.sheetId}><InfoIcon/></Tooltip></span></li>
              <div className="border-b border-gray-400 w-[35rem] "></div>

            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SpreadSheets;
