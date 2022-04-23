import "./App.css";
import LoginForm from "./components/user/LoginForm";
import { Button, Modal } from "@mui/material";
import { useState } from "react";
function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Login
      </Button>
      <Modal open={open}>
        <LoginForm setOpen={setOpen} handleClose={handleClose} />
      </Modal>
    </div>
  );
}

export default App;
