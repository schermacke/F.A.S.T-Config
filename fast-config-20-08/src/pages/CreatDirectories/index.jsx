import React from "react";
import {
  Button,
  Card,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaSquareCaretLeft } from "react-icons/fa6";
import Box from "@mui/material/Box";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

function CreatDirectories() {
  const navigate = useNavigate();

  const names_one = [
    "Oliver Hansen",
    "Van Henryhhhhhhhhhhhhh",
    "April Tucker",
    "Ralph Hubbardhhhhhhhh",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagnerhhhhhhhhhhh",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];
  const names_two = [
    "Oliver Hansen",
    "Van Henryhhhhhhhhhhhhh",
    "April Tucker",
    "Ralph Hubbardhhhhhhhh",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagnerhhhhhhhhhhh",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];
  const names_three = [
    "Oliver Hansen",
    "Van Henryhhhhhhhhhhhhh",
    "April Tucker",
    "Ralph Hubbardhhhhhhhh",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagnerhhhhhhhhhhh",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  const [personName_one, setPersonName_one] = React.useState([]);
  const handleChangeMultiple1 = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName_one(value);
  };
  const [personName_two, setPersonName_two] = React.useState([]);
  const handleChangeMultiple2 = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName_two(value);
  };

  const [personName_three, setPersonName_three] = React.useState([]);
  const handleChangeMultiple3 = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName_three(value);
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
        <h3>Gerenciador de pastas</h3>
      </Grid>
      <Grid item xs={10}>
        <Card variant="outlined" sx={{ padding: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <h4>Diretório</h4>
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                id="outlined-basic"
                label="Raiz:"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Atual:"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={10}>
        <Card variant="outlined" sx={{ padding: 1 }}>
          <Grid item xs={12}>
            <h4 style={{ marginBottom: "10px" }}>Informações</h4>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} md={2}>
              <FormControl size="small" fullWidth>
                <InputLabel id="demo-simple-select-label">Sistemas:</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Sistemas:"
                >
                  <MenuItem value={10}>42</MenuItem>
                  <MenuItem value={20}>43</MenuItem>
                  <MenuItem value={30}>44</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={10} display="flex" textAlign="center">
              <Grid item xs={12} style={{ marginRight: "7px" }}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Cliente:"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} style={{ marginRight: "7px" }}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Unidade Cidade-UF:"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="GNF:"
                  variant="outlined"
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={10}>
        <Card variant="outlined">
          <Grid item xs={12}>
            <h4 style={{ marginLeft: "7px", marginTop: "2px" }}>
              Estrutura das Pastas
            </h4>
          </Grid>
          <Grid container spacing={1} padding={1}>
            <Grid
              item
              xs={12}
              md={12}
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}
            >
              <FormControl sx={12} md={12} style={{ marginRight: "7px" }}>
                <InputLabel shrink htmlFor="select-multiple-native">
                  Empresa:
                </InputLabel>
                <Select
                  style={{ minHeight: 130 }}
                  multiple
                  native
                  value={personName_one}
                  onChange={handleChangeMultiple1}
                  label="Empresa:"
                  inputProps={{
                    id: "select-multiple-native",
                  }}
                >
                  {names_one.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={12} md={12} style={{ marginRight: "7px" }}>
                <InputLabel shrink htmlFor="select-multiple-native">
                  Cidade:
                </InputLabel>
                <Select
                  style={{ minHeight: 130 }}
                  multiple
                  native
                  value={personName_two}
                  onChange={handleChangeMultiple2}
                  label="Cidade:"
                  inputProps={{
                    id: "select-multiple-native",
                  }}
                >
                  {names_two.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={12} md={12} spacing={2}>
                <InputLabel shrink htmlFor="select-multiple-native">
                  Codigo
                </InputLabel>
                <Select
                  style={{ minHeight: 130 }}
                  multiple
                  native
                  value={personName_three}
                  onChange={handleChangeMultiple3}
                  label="Codigo"
                  inputProps={{
                    id: "select-multiple-native",
                  }}
                >
                  {names_three.map((names) => (
                    <option key={names} value={names}>
                      {names}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
              <Grid>
                <h4 style={{ marginTop: "4px", marginBottom: "7px" }}>
                  Estrutura final:
                </h4>
                <Grid xs={12} md={12}
                  display={"flex"}
                >
                  <Card variant="outlined" sx={{ padding: 1 }}>
                    <Box sx={12}>
                      <SimpleTreeView>
                        <TreeItem itemId="grid" label="Cliente">
                          <TreeItem
                            itemId="grid-child-one"
                            label="Unidade Cidade UF"
                          >
                            <TreeItem itemId="grid-child-two" label="00000">
                              <TreeItem
                                itemId="grid-child-three"
                                label="Arquivos"
                              >
                                <TreeItem itemId="grid-child-for" label="BD" />
                              </TreeItem>
                              <TreeItem
                                itemId="grid-premium"
                                label="Documentos"
                              />
                              <TreeItem itemId="grid-pro" label="Imagens" />
                              <TreeItem itemId="pickers-pro" label="Projetos" />
                              <TreeItem
                                itemId="tree-view-community"
                                label="Propostas"
                              />
                            </TreeItem>
                          </TreeItem>
                        </TreeItem>
                      </SimpleTreeView>
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
        <Grid item xs={12} md={12}>
          <Grid>
            <Card
              variant="elevation"
              sx={12}
              md={12}
              style={{
                marginTop: "7px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button variant="contained" fullWidth>Procurar</Button>

            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CreatDirectories;
