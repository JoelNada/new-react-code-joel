import { TextField } from "@mui/material";
import React from "react";

export default function FormControl({ label, ...props }) {
  return <TextField label={label} {...props}></TextField>;
}
