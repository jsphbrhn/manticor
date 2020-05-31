import React from "react";
//DATOS FINALES A E ENVIAR 
const Review = ({ setForm, formData, navigation }) => {
  const {
    email,
    nickName,
    nombreDenunciado,
    organizacionInvolucrada,
    entidadCrimen,
    detalleCrimen
  } = formData;
  const { go } = navigation;
  const setSubmit=async ()=>{
        console.log(formData);
      // go("submit");
  }

  return (
    <div className="form">
      <h3>Revisar tu información</h3>
      <h4>Datos del denunciado</h4>
      <div>Nick Name: {`${nickName}`}</div>

      <div>
        e-mail: {`${email}`},
        <br />
        <br />
      </div>
      <h4>Datos del denunciado</h4>
      <div>
        Nombre del Denunciado: {`${nombreDenunciado}`},
        <br />
        Entidad: {`${entidadCrimen}`}
        <br />
        organizacionInvolucrada: {`${organizacionInvolucrada}`}
        <br />
        detalleCrimen {`${detalleCrimen}`}
      </div>
      <div>
        <button onClick={() => setSubmit()}>Subir</button>
      </div>
    </div>
  );
};

export default Review;
