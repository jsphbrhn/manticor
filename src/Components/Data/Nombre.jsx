import React from "react";
import ItemForm from "./ItemForm";
import { Typography } from "@material-ui/core";

//DETALLE DE FORMULARIO DE LA COLECCIÓN DEL USUARIO
const Nombres = ({ setForm, formData, navigation }) => {
  const { nickName } = formData;

  const { next } = navigation;

  return (
    <div className="form">
      <Typography style={{ color: "white" }}>
        <b>Paso 1 de 3</b>
      </Typography>
      <img
        width={200}
        style={{
          marginRight: "10px",
          marginRight: "10px",
          position: "absolute",
          textAlign: "right",
          right: "0",
        }}
        src={require("../../Images/RecursoA.png")}
        alt="RecursoA"
      />
      <Typography style={{ color: "white" }}>
        <br></br>
        <b>¡Hola!Permíteme ayudarte </b>
      </Typography>
      <div
        style={{ position: "absolute", bottom: "100px", paddingBottom: "2%", }}
      >
        <h3 >Nickname</h3>
        <ItemForm
          label="Nickname"
          name="nickName"
          value={nickName}
          onChange={setForm}
        />
      </div>

      <div>
        <button className="button-Form" onClick={next}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Nombres;
