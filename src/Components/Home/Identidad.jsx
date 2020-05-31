import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../../Components/Modules/Typography";
import Button from "../../Components/Modules/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      width: "100%",
      marginTop: "2%",
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section className={classes.root}>
        <Container className={classes.container}>
          <Typography
            variant="h4"
            marked="center"
            className={classes.title}
            component="h2"
            style={{ paddingTop: "2%" }}
          >
            ¿Quiénes somos?
          </Typography>
          <div style={{ paddingTop: "4%" }}>
            <Grid container spacing={5}>
              Manticor es una instancia de coordinación entre distintas
              autoridades federales y locales, encargadas de la prevención,
              detección y sanción de responsabilidades administrativas y hechos
              de corrupción, en el cual participa la ciudadanía a través de la
              denuncia
            </Grid>
          </div>
        </Container>
      </section>
    </div>
  );
}
