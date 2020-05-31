import React from "react";
import ItemForm from "./ItemForm";

//DETALLE FORMULARIO DE CONTACTO
const Contacto = ({ setForm, formData, navigation }) => {
  const { email } = formData;

  const { previous, next } = navigation;

  return (
    <div className="form">
      <h3>Contácto </h3>
      <hr></hr>
      <ItemForm label="E-mail" name="email" value={email} onChange={setForm} />
      <div>
        <button onClick={previous}>Previo</button>
        <button onClick={next}>Siguiente</button>
      </div>
    </div>
  );
};

export default Contacto;
