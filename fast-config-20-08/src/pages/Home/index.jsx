import { Button, Grid } from "@mui/material";
import { useState } from "react";
import { routesList } from "../../routes/routes";
import { useNavigate } from "react-router-dom";

function Home() {
  const [titleShow, setTitleShow] = useState();
  const navigate = useNavigate();

  function hoverEffect(index) {
    setTitleShow(index);
  }
  return (
    <Grid container spacing={1} padding={1}>
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          fontSize: "20px",
          marginBottom: "6em"
        }}
      >
        <h2>F.A.S.T Tools</h2>
      </Grid>
      {(routesList || [])
        .filter((f) => f?.isMenu)
        .map((item) => (
          <Grid item xs={12} md={3}>
            <Button
              size="small"
              fullWidth
              variant={titleShow === item.id ? "contained" : "outlined"}
              type="button"
              onMouseEnter={() => {
                hoverEffect(item.id);
              }}
              onMouseLeave={() => {
                hoverEffect(undefined);
              }}
              color={item.id === 8 ? "error" : "info"}
              sx={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                fontSize: "14px",
                borderColor: "transparent",
              }}
              startIcon={<img src={item.icon} alt={item.alt} height={100} />}
              onClick={() => navigate(item?.path)}
            >
              {item.description}
            </Button>
          </Grid>
        ))}
    </Grid>
  );
}

export default Home;
