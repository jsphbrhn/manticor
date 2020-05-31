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
      margin: theme.spacing(1),
      width: "100%",
      height: theme.spacing(16),
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section className={classes.root}>
        <Container className={classes.container}>
          {/* <img
            src="https://cdn.pixabay.com/photo/2016/06/22/11/10/box-1472804_1280.png"
            className={classes.curvyLines}
            alt="curvy lines"
          /> */}
          <Typography
            variant="h4"
            marked="center"
            className={classes.title}
            component="h2"
            style={{paddingTop: "2%"}}
          >
            Objetivos
          </Typography>
          <div style={{paddingTop: "4%"}}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/11/14/17/39/group-1824145_1280.png"
                    width="150px"
                    alt="suitcase"
                    className={classes.image}
                  />
                  <Typography variant="h6" align="center">
                    Fomentar la denuncia.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  <img
                    src="https://cdn.pixabay.com/photo/2015/12/10/16/39/shield-1086703_1280.png"
                    width="150px"
                    alt="graph"
                    className={classes.image}
                  />
                  <Typography variant="h6" align="center">
                    Garantizar a los denunciantes una forma segura y anónima
                    para proteger su integridad.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/08/19/20/37/time-1606153_1280.png"
                    width="150px"
                    alt="clock"
                    className={classes.image}
                  />
                  <Typography variant="h6" align="center">
                    Seguir el proceso eficientemente.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
         
        </Container>
      </section>
    </div>
  );
}
