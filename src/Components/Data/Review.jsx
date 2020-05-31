import React from "react";
import { db } from "../../Firebase";

//DATOS FINALES A E ENVIAR
const Review = ({ setForm, formData, navigation }) => {
  const {
    email,
    nickName,
    nombreDenunciado,
    organizacionInvolucrada,
    entidadCrimen,
    detalleCrimen,
  } = formData;
  const { go } = navigation;
  //INFORMACIÓN RELEVANTE QUE VA USAR FIREBASE
  const setSubmit = async () => {
    try {
      const userKey = new Date().getTime().toString();
      await db.collection("Usuario").doc(userKey).set({
        email,
        nickName,
      });
      await db.collection("Denuncia").doc(new Date().getTime().toString()).set({
        nombreDenunciado,
        organizacionInvolucrada,
        entidadCrimen,
        detalleCrimen,
        userKey,
      });
      go("submit");
    } catch (error) {
      console.log(error);
    }
    console.log(formData);
  };

  return (
    <div className="form">
      <h3>Revisar tu información</h3>
      <h4>Datos del denunciado</h4>
      <div>Nickname: {`${nickName}`}</div>
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
        <button className="button-Form"  onClick={() => setSubmit()}>
          Subir
        </button>
      </div>
    </div>
  );
};

export default Review;
