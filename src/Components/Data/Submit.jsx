import React from "react";
const Submit = ({ navigation }) => {
  const { go } = navigation;
  return (
    <div>
      <h3>Gracias por ser parte del cambio.En breve recibirás información</h3>
      Otra denuncia ->{" "}
      <button className="button-Form" onClick={() => go("Nombre")}>
        Nueva
      </button>
    </div>
  );
};

export default Submit;
