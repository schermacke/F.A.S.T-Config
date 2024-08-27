import React from "react";
import {
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaSquareCaretLeft } from "react-icons/fa6";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

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

function SetupCheck() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  ///////////////////////////////
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
  /////////////////////////////
  function createData(calories, fat) {
    return { calories, fat };
  }

  const rows = [
    createData(0, 0),
    createData(0, 0),
    createData(0, 0),
    createData(0, 0),
    createData(0, 0),
    createData(0, 0),
    createData(0, 0),
  ];
  //////////////////////////
  function createDataModal(calori, fate, slin, fates) {
    return { calori, fate, slin, fates };
  }

  const rowsModal = [
    createDataModal(0, 0, 0, 0),
    createDataModal(0, 0, 0, 0),
    createDataModal(0, 0, 0, 0),
    createDataModal(0, 0, 0, 0),
    createDataModal(0, 0, 0, 0),
    createDataModal(0, 0, 0, 0),
    createDataModal(0, 0, 0, 0),
    createDataModal(0, 0, 0, 0),
  ];
  /////////////////////////
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
        <h3>Verificador de Configuração</h3>
      </Grid>
      <Grid item xs={10} md={10}>
        <Card variant="outlined" sx={{ padding: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <h4>Conexão com o Banco de Dados</h4>
            </Grid>
            <Grid item xs={12} md={12}>
              <Grid
                xs={12}
                md={12}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={1}
              >
                <FormControl size="small" style={{ minWidth: "30%" }}>
                  <InputLabel id="demo-simple-select-label">
                    Software:
                  </InputLabel>
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

                <TextField
                  size="small"
                  id="outlined-basic"
                  label="Banco de Dados:"
                  variant="outlined"
                  fullWidth
                />
                <Grid xs={12} md={2}>
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
            <Grid
              item
              xs={12}
              md={12}
              display={"block"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid
                xs={12}
                md={12}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={1}
              >
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="User:"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="Password:"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="Status:"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
        </Card>
        <Grid item xs={12} md={12} paddingTop={1}>
          <Card variant="outlined" sx={{ padding: 1 }}>
            <Grid xs={12} md={12}>
              <h4>Dados Gerais</h4>
            </Grid>
            <Grid xs={12} md={12}>
              <Card variant="elevation">
                <Grid style={{ margin: "5px" }}>
                  <Grid
                    display={"flex"}
                    justifyContent={"space-around"}
                    alignItems={"center"}
                  >
                    <h5>Pedido:</h5>
                    <h5>GNF:</h5>
                    <h5>Cliente:</h5>
                  </Grid>
                  <Divider />
                  <Grid
                    display={"flex"}
                    justifyContent={"space-evenly"}
                    alignItems={"center"}
                  >
                    <h5>Local/UF:</h5>
                    <h5>Sistema:</h5>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid
          xs={10}
          md={10}
          gap={"15%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 190 }} aria-label="caption table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">sim</TableCell>
                    <TableCell align="center">sim </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow>
                      <TableCell align="center">{row.calories}</TableCell>
                      <TableCell align="center">{row.fat}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 190 }} aria-label="caption table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">sim</TableCell>
                    <TableCell align="center">sim </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow>
                      <TableCell align="center">{row.calories}</TableCell>
                      <TableCell align="center">{row.fat}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid xs={4} md={4}>
          <Button onClick={handleOpen} variant="contained" fullWidth>
            Vizualização Completa
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 1000, height: 625 }}>
              <Grid container spacing={1} padding={2}>
                <Grid
                  item
                  xs={12}
                  md={12}
                >
                  <Grid
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={"5%"}
                  >
                    <Grid xs={12} md={12}>
                      <TableContainer component={Paper}>
                        <Table
                          sx={{ minWidth: 220 }}
                          aria-label="caption table"
                        >
                          <TableHead>
                            <TableRow>
                              <TableCell align="center">sim</TableCell>
                              <TableCell align="center">sim </TableCell>
                              <TableCell align="center">sim</TableCell>
                              <TableCell align="center">sim </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rowsModal.map((row) => (
                              <TableRow>
                                <TableCell align="center">{row.fates}</TableCell>
                                <TableCell align="center">{row.calori}</TableCell>
                                <TableCell align="center">{row.fate}</TableCell>
                                <TableCell align="center">{row.slin}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                    <Grid xs={12} md={12}>
                      <TableContainer component={Paper}>
                        <Table
                          sx={{ minWidth: 220 }}
                          aria-label="caption table"
                        >
                          <TableHead>
                            <TableRow>
                              <TableCell align="center">sim</TableCell>
                              <TableCell align="center">sim </TableCell>
                              <TableCell align="center">sim</TableCell>
                              <TableCell align="center">sim </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rowsModal.map((row) => (
                              <TableRow>
                                <TableCell align="center">{row.fates}</TableCell>
                                <TableCell align="center">{row.calori}</TableCell>
                                <TableCell align="center">{row.fate}</TableCell>
                                <TableCell align="center">{row.slin}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                    <Grid xs={12} md={12}>
                      <TableContainer component={Paper}>
                        <Table
                          sx={{ minWidth: 190 }}
                          aria-label="caption table"
                        >
                          <TableHead>
                            <TableRow>
                              <TableCell align="center">sim</TableCell>
                              <TableCell align="center">sim </TableCell>
                              <TableCell align="center">sim </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rowsModal.map((row) => (
                              <TableRow>
                                <TableCell align="center">{row.calori}</TableCell>
                                <TableCell align="center">{row.slin}</TableCell>
                                <TableCell align="center">{row.fate}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Modal>
        </Grid>
      </Grid>

      <Grid
        item
        xs={10}
        md={10}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={1}
      >
        <Grid xs={12}>
          <Button variant="contained" fullWidth>
            Connect
          </Button>
        </Grid>
        <Grid xs={12}>
          <Button variant="contained" fullWidth>
            Carregar/Recarregar
          </Button>
        </Grid>
        <Grid xs={12}>
          <Button variant="contained" fullWidth>
            Verifica/Auto
          </Button>
        </Grid>
        <Grid xs={12}>
          <Button variant="contained" fullWidth>
            Aprovar
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SetupCheck;
