import React from "react";
import { Grid, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaSquareCaretLeft } from "react-icons/fa6";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //--------------------------------------------------------//

  const [openTwo, setOpenTwo] = React.useState(false);
  const handleOpenTwo = () => {
    setOpenTwo(true);
  };
  const handleCloseTwo = () => {
    setOpenTwo(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Button onClick={handleOpenTwo}>Open Child Modal two</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>

          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
      
      <Modal
        open={openTwo}
        onClose={handleCloseTwo}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="child-modal-title">Text in a child modal two</h2>
          <p id="child-modal-description">
            two Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleCloseTwo}>Close Child</Button>
        </Box>
      </Modal>
      
    </React.Fragment>
  );
}

function RepositionEngine() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid
      container
      spacing={1}
      padding={1}
      display="flex"
      justifyContent="center"
    >
      <Grid item xs={12} display="flex" alignItems="center">
        <IconButton color="primary" onClick={() => navigate("/")}>
          <FaSquareCaretLeft size={30} />
        </IconButton>
        <h3>Reposicionador de Motor</h3>
      </Grid>
      <Grid>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <h2 id="parent-modal-title">Text in a modal</h2>
            <p id="parent-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
            <ChildModal />
          </Box>
        </Modal>
      </Grid>
    </Grid>
  );
}
export default RepositionEngine;
