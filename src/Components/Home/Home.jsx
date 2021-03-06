import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "../../Components/Modules/Button";
import Typography from "../../Components/Modules/Typography";
import Layout from "../../Components/Home/Layout";
import AppBar from "../../Components/Modules/AppBar";
import Objetivos from "./Objetivos";
import Identidad from "./Identidad"
import { Link } from "react-router-dom";
import Proceso from "./Proceso"
const backgroundImage =
  "https://raw.githubusercontent.com/Mariyselita/Imgs/master/img.png";

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#07a6ca",
    backgroundPosition: "center",
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function Capa(props) {
  const { classes } = props;
  return (
    <div>
      <AppBar />
      <Layout backgroundClassName={classes.background}>
        <div style={{paddingLeft: "45%"}}>
          <Typography
            color="inherit"
            align="center"
            variant="h2"
            marked="center"
          >
            Manticor
          </Typography>
          <Typography
            color="inherit"
            align="center"
            variant="h5"
            className={classes.h5}
          >
            “Obtener justicia al denunciar un acto de corrupción asegurando su
            integridad.”
          </Typography>
          <Link to="/formulario">
            <Button
              color="secondary"
              variant="contained"
              size="large"
              className={classes.button}
              component="a"
            >
              DENUNCIA
            </Button>
          </Link>
          <Typography variant="body2" color="inherit" className={classes.more}>
            Descubre esta nueva experiencia
          </Typography>
        </div>
      </Layout>
      <Identidad />
      <Objetivos />
 
    </div>
  );
}

Capa.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Capa);
