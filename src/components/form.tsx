import { Button, TextField } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
interface formDataProps {
  name?: string;
  number?: number | string;
  email?: string;
}

const Form = () => {
  const [formData, setFormData] = useState<formDataProps>();
  const navigate = useNavigate();

  const submitForm = () => {
    localStorage.setItem("name", formData?.name ?? "");
    // @ts-ignore
    localStorage.setItem("number", formData?.number ?? "");
    localStorage.setItem("email", formData?.email ?? "");

    setFormData({
      ...formData,
      name: "",
      number: "",
      email: "",
    });

    navigate("/");
  };

  return (
    <FormGroup id="form">
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <TextField
        id="outlined-basic"
        label="Number"
        variant="outlined"
        // type="number"
        onChange={(e) =>
          setFormData({ ...formData, number: Number(e.target.value) })
        }
      />
      <TextField
        autoFocus
        required
        margin="dense"
        id="name"
        name="email"
        label="Email Address"
        type="email"
        fullWidth
        variant="outlined"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <Button variant="contained" onClick={submitForm}>
        Submit
      </Button>
    </FormGroup>
  );
};

export default Form;
