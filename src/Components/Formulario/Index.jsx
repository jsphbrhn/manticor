import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import Formulario from './Formulario';
import AppBar from "../Modules/AppBar"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));


export default function() {
  const classes = useStyles();
   const { handleSubmit, register, errors } = useForm();
   const onSubmit = (values) => console.log(values);

  return (
    <div>
      <div className={classes.root}>
        <AppBar/>
        <Formulario />
      </div>
    </div>
  );
}
