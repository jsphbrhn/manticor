import React from "react";
import ItemForm from "./ItemForm";
import { Typography } from "@material-ui/core";

//DETALLE FORMULARIO DE CONTACTO
const Contacto = ({ setForm, formData, navigation }) => {
  const { email } = formData;

  const { previous, next } = navigation;

  return (
    <div className="form">
      <Typography>Paso 2 de 3</Typography>
      <hr></hr>
      <h3>Contácto </h3>
      <ItemForm label="E-mail" name="email" value={email} onChange={setForm} />
      <div>
        <button className="button-Form-1" onClick={previous}>
          Previo
        </button>
        <button className="button-Form" onClick={next}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Contacto;
