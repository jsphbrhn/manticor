import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import Nombre from "../Data/Nombre";
import Contacto from "../Data/Contacto";
import Denunciado from "../Data/Denunciado"
import Review from "../Data/Review";
import Submit from "../Data/Submit";

const steps = [
  { id: "nombre" },
  { id: "contacto" },
  { id: "denunciado" },
  { id: "review" },
  { id: "submit" },
];

const defaultData = {
  nombre: "",
  nickName: "",
  nombreDenunciado: "",
  entidadCrimen: "",
  organizacionInvolucrada: "",
  detalleCrimen: "",
  email: ""
};

const Formulario = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };

  switch (id) {
    case "nombre":
      return <Nombre {...props} />;
    case "contacto":
      return <Contacto {...props} />;
    case "denunciado":
      return <Denunciado {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
    default:
      return null;
  }
};

export default Formulario;
