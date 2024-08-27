import React from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaSquareCaretLeft } from "react-icons/fa6";

function LinkGenerator() {
  const navigate = useNavigate();
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
        <h3>Gerador de link</h3>
      </Grid>
      <Grid
        xs={10}
        md={10}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={1}
      >
        <Card variant="outlined" sx={{ padding: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <h4>Informações para Montagem do Link</h4>
            </Grid>
            <Grid item xs={12} md={12} display={"flex"}>
              <FormControl style={{ marginRight: "20px" }}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="PCP"
                  />
                  <FormControlLabel
                    style={{ marginTop: "0.2em" }}
                    value="male"
                    control={<Radio />}
                    label="Outros"
                  />
                  <FormControlLabel
                    style={{ marginTop: "0.3em" }}
                    value="other"
                    control={<Radio />}
                    label="Usuais"
                  />
                  <Box sx={12} md={2} style={{ marginTop: "0.8em" }}>
                    <h5>Arquivos.zip</h5>
                  </Box>
                </RadioGroup>
              </FormControl>
              <Grid xs={12} md={12}>
                <TextField
                  style={{ marginBottom: "7px" }}
                  size="small"
                  id="outlined-basic"
                  label="Caminho da pasta da unidade na rede:"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  style={{ marginBottom: "7px" }}
                  size="small"
                  id="outlined-basic"
                  label="Caminho da pasta da unidade na rede:"
                  variant="outlined"
                  fullWidth
                />
                <FormControl
                  size="small"
                  fullWidth
                  style={{ marginBottom: "7px" }}
                >
                  <InputLabel id="demo-simple-select-label">
                    Sistemas:
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Sistemas:"
                  >
                    <MenuItem value={10}>FireBird</MenuItem>
                    <MenuItem value={20}>Oracle</MenuItem>
                    <MenuItem value={30}>SQL Server 2012</MenuItem>
                    <MenuItem value={40}>SQL Server 2019</MenuItem>
                    <MenuItem value={50}>IBExpert</MenuItem>
                    <MenuItem value={60}>Management Studio</MenuItem>
                    <MenuItem value={70}>SQL Developer</MenuItem>
                  </Select>
                </FormControl>
                <Grid
                  xs={12}
                  md={12}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <TextField
                    size="small"
                    id="outlined-basic"
                    label="Caminho da pasta da unidade na rede:"
                    variant="outlined"
                    fullWidth
                  />
                  <Grid xs={6} md={4} paddingLeft={1}>
                    <Button fullWidth variant="contained">
                      Gerar Link
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                size="small"
                id="outlined-basic"
                label="Caminho da pasta da unidade na rede:"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="contained">
                Carregar
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default LinkGenerator;
