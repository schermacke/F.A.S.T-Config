import React from "react";
import {
  Box,
  ButtonGroup,
  Checkbox,
  FormControl,
  FormGroup,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaSquareCaretLeft } from "react-icons/fa6";
import { Button, Card, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function TestSoftware() {
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

  const buttons = [
    <Button key="clearBd">Limpar BD</Button>,
    <Button key="systemThermo">Abrir sistema de Termometria</Button>,
  ];

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
        <h3>Teste de software</h3>
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
                  tabIndex={-1}
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
                  tabIndex={-1}
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
                paddingBottom={1}
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
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </Grid>
              </Grid>
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
                  label="Arquivo 2:"
                  variant="outlined"
                  fullWidth
                />
                <Grid xs={12} md={1.9} marginLeft={"7px"}>
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
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
            <h4>Informações do teste Automático / Área para Teste Manual:</h4>
            <Grid
              xs={12}
              md={12}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <h4>Código Cliente para Teste:</h4>

              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="groupOne"
                    control={<Radio />}
                    label="819"
                  />
                  <FormControlLabel
                    value="groupTwo"
                    control={<Radio />}
                    label="501"
                  />
                  <FormControlLabel
                    value="gruopThree"
                    control={<Radio />}
                    label="723"
                  />
                  <FormControlLabel
                    value="groupFor"
                    control={<Radio />}
                    label="779"
                  />
                </RadioGroup>
              </FormControl>
              <Grid>
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="Editar BD Teste:"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid
              paddingTop={1}
              xs={12}
              md={12}
              justifyContent={"space-around"}
              display={"flex"}
              alignItems={"center"}
            >
              <Box
                component="form"
                sx={12}
                md={12}
                noValidate
                autoComplete="off"
                marginRight={"1.5em"}
              >
                <Grid>
                  <TextField
                    id="outlined-multiline-static"
                    label="Arquivo CSV"
                    maxrows={6}
                    inputProps={{ maxLength: 150 }}
                    multiline
                    sx={{ maxWidth: 250 }}
                  />
                </Grid>
              </Box>
              <Grid
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
              >
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked />} />
                  <FormControlLabel control={<Checkbox defaultChecked />} />
                </FormGroup>
                <Box sx={{ display: "flex" }}>
                  <ButtonGroup
                    orientation="vertical"
                    aria-label="Vertical button group"
                    variant="contained"
                  >
                    {buttons}
                  </ButtonGroup>
                </Box>
              </Grid>
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
                Testar Obra
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
      <Grid xs={12} md={12} display={"flex"} justifyContent={"center"}>
        <Grid item xs={10} md={10}></Grid>
      </Grid>
    </Grid>
  );
}

export default TestSoftware;
