import React from "react";
import { Box, Grid, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaSquareCaretLeft } from "react-icons/fa6";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Button, Card, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function InstallGenerator() {
  const navigate = useNavigate();

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

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
        <h3>Gerador de Instalação</h3>
      </Grid>
      <Grid item xs={10} md={10}>
        <Card variant="outlined" sx={{ padding: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <h4>Informações do sistema</h4>
            </Grid>
            <Grid item xs={6} md={3}>
              <FormControl size="small" fullWidth>
                <InputLabel id="demo-simple-select-label">Software:</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Software:"
                >
                  <MenuItem value={10}>AirMaster V.41</MenuItem>
                  <MenuItem value={20}>AirMaster V.42</MenuItem>
                  <MenuItem value={30}>AirMaster V.43</MenuItem>
                  <MenuItem value={40}>AirMaster V.44</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
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
              <Grid xs={12} md={1.9} marginLeft={"7px"}>
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={1}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="contained">
                Carregar
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={10} md={10}>
        <Card variant="outlined" sx={{ padding: 1 }}>
          <Grid xs={12}>
            <h4 style={{ marginBottom: "10px" }}>
              Diretório onde está Instalado
            </h4>
          </Grid>
          <Grid spacing={1}>
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
                label="Caminho da Instalação:"
                variant="outlined"
                fullWidth
              />
              <Grid xs={12} md={1.9} marginLeft={"7px"}>
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={2}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12} md={10} display="flex" textAlign="center"></Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={10}>
        <Card variant="outlined">
          <Grid item xs={12}>
            <h4 style={{ marginLeft: "7px", marginTop: "2px" }}>
              Arquivos do Sistema
            </h4>
          </Grid>
          <Grid padding={1}>
            <Grid item xs={12} md={12}>
              <Grid
                xs={12}
                md={12}
                display={"flex"}
                justifyItems={"center"}
                alignItems={"center"}
              >
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="Arquivo 1: Vários?"
                  variant="outlined"
                  fullWidth
                />
                <Grid xs={12} md={1.9} marginLeft={"7px"}>
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={3}
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
        <Grid item xs={12} md={12} paddingTop={1}>
          <Card variant="outlined" sx={{ padding: 1 }}>
            <h4 style={{marginBottom:"7px"}}>Status</h4>
            <Grid>
              <Box
                component="form"
                sx={12}
                md={12}
                noValidate
                autoComplete="off"
              >
                <Grid>
                  <TextField
                    id="outlined-multiline-static"
                    label="Status"
                    multiline
                    minRows={2}
                    fullWidth
                  />
                </Grid>
              </Box>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            marginTop={1}
          >
            <Grid sx={4} md={4}>
              <Button variant="contained" fullWidth>
                Gerar Instalação
              </Button>
            </Grid>
            <Grid sx={4} md={4}>
              <Button variant="contained" fullWidth>
                Open Dir. Install
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default InstallGenerator;
