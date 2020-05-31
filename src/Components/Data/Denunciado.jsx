import React from "react";
import ItemForm from "./ItemForm";

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
        <button onClick={previous}>Previo</button>
        <button onClick={next}>Siguiente</button>
      </div>
    </div>
  );
};

export default Denunciado;
