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
      marginTop: "2%"
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
            style={{
              paddingTop: "2%",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Objetivos
          </Typography>

          <div style={{ paddingTop: "4%" }}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  <img
                    src="https://raw.githubusercontent.com/Mariyselita/Imgs/1856cf172cae23f83dc511872acaab37e7b34e50/Altavoz.svg"
                    width="150px"
                    alt="suitcase"
                    className={classes.image}
                  /><br></br>
                  <Typography variant="h6" align="center" style={{fontSize: "14px"}}>
                    Busca un espacio físico seguro: Donde nadie vea lo que haces y te sientas con confianza para proporcionar tu denuncia. <br></br>-
                    Instala Tor: El navegador Tor permite que puedas realizar tu denuncia con la mayor seguridad posible. <br></br>-Crea un correo electrónico especialmente para tu denuncia en un servicio como
                    https://protonmail.com/es, para mantener tu anonimato.<br></br> -
                    Asegúrate de tener a la mano las evidencias digitales.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  <img
                    src="https://raw.githubusercontent.com/Mariyselita/Imgs/1856cf172cae23f83dc511872acaab37e7b34e50/Listado.svg"
                    width="140px"
                    alt="graph"
                    className={classes.image}
                  /><br></br>
                  <Typography variant="h6" align="center">
                    Realiza la denuncia, te preguntaremos: <br></br>• ¿Quién está
                    involucrado? <br></br>• ¿Dónde sucedió el hecho? • ¿Cuándo ocurrió el
                    hecho? <br></br>• ¿Qué sucedió?
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  <img
                    style={{ marginBottom: "18%" }}
                    src="https://raw.githubusercontent.com/Mariyselita/Imgs/1856cf172cae23f83dc511872acaab37e7b34e50/Lupa.svg"
                    width="150px"
                    alt="clock"
                    className={classes.image}
                  /><br></br>
                  <Typography variant="h6" align="center">
                    1) Recibimos la denuncia<br></br> 2) Lo estamos investigando <br></br>3)
                    Llegamos a la siguiente conclusión
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
