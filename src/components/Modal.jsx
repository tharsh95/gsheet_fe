import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { spreadSchema } from "../schemas";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
const initialValues = { id: "", name: "" };
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ handleClose, open, sheets, setSheets }) {
  const params = useParams();
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: spreadSchema,
    onSubmit: async (values, { resetForm }) => {
      handleClose();
      resetForm();
      const {
        data: { details },
      } = await axios.post(
        "http://localhost:8000/google/sheetDetails",
        {
          id: params.id,
          name: values.name,
          sheetId: values.id,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
setSheets([...sheets,details])
    },
  });

  return (
    <div>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <h1 className="text-2xl mb-4 font-bold">Google sheets</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <div className="mb-4 ">
                  <TextField
                    id="outlined-basic"
                    label="SpreadSheet ID"
                    variant="outlined"
                    name="id"
                    value={values.id}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div className="mb-4">
                  <TextField
                    id="outlined-basic"
                    label="WorkSheet Name"
                    variant="outlined"
                    className="w-full"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                  />
                </div>
                <div>
                  <p className="text-red-400 text-sm">
                    {errors.id || errors.name}
                  </p>
                </div>

                <div className="text-center">
                  <Button type="submit" variant="contained">
                    Create
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
