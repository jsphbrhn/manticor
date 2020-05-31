import React from "react";
import ItemForm from "./ItemForm";

//DETALLE DE FORMULARIO DE LA COLECCIÓN DEL USUARIO
const Nombres = ({ setForm, formData, navigation }) => {
  const { nickName } = formData;

  const { next } = navigation;

  return (
    <div className="form">
      <h3>Tu user anónimo</h3>
      <hr></hr>
      <ItemForm
        label="Nick Name"
        name="nickName"
        value={nickName}
        onChange={setForm}
      />
      <div>
        <button onClick={next}>Siguiente</button>
      </div>
    </div>
  );
};

export default Nombres;
