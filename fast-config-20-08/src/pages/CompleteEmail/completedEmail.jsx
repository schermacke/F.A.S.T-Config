import React from "react";
import { Grid, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaSquareCaretLeft } from "react-icons/fa6";

function EmailSoftware() {
  const navigate = useNavigate()
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
        <h3>Envio de E-mail</h3>
      </Grid>
      
    </Grid>
  );
}

export default EmailSoftware;
