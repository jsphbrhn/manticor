import React from "react";
const Submit = ({ navigation }) => {
  const { go } = navigation;
  return (
    <div>
      <h3>Gracias por ser parte del cambio.<br>En breve recibirás información</br></h3>
      Otra denuncia -> <button onClick={() => go("Nombre")}>Nueva</button>
    </div>
  );
};

export default Submit;
