import React from "react";
import ItemForm from "./ItemForm";
import { Typography } from "@material-ui/core";

//DETALLE FORMULARIO DE LA PERSONA A QUIEN SE LE VA DENUNCIAR
const Denunciado = ({ setForm, formData, navigation }) => {
  const {
    nombreDenunciado,
    entidadCrimen,
    organizacionInvolucrada,
    detalleCrimen,
  } = formData;

  const { previous, next } = navigation;

  return (
    <div className="form">
      <Typography>Paso 3 de 3</Typography>
      <hr></hr>
      <h3>¿A quién o qué denuncias?</h3>
      <hr></hr>
      <ItemForm
        label="Nombre del denunciado"
        name="nombreDenunciado"
        value={nombreDenunciado}
        onChange={setForm}
      />
      <ItemForm
        label="Entidad Federativa del crimen"
        name="entidadCrimen"
        value={entidadCrimen}
        onChange={setForm}
      />
      <ItemForm
        label="Organización involucrada"
        name="organizacionInvolucrada"
        value={organizacionInvolucrada}
        onChange={setForm}
      />
      <ItemForm
        label="Detalle"
        name="detalleCrimen"
        value={detalleCrimen}
        onChange={setForm}
      />
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

export default Denunciado;
