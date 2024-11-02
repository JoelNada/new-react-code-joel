import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import FormControl from "./FormControl";
import { useForm } from "react-hook-form";

export default function FormComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const localData = localStorage.getItem("userData");
    let newData = [];

    if (localData) {
      // Parse and check if it's an array, otherwise start fresh with an empty array.
      newData = Array.isArray(JSON.parse(localData))
        ? JSON.parse(localData)
        : [];
    }

    newData.push(data);
    localStorage.setItem("userData", JSON.stringify(newData));
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          padding: "10px",
          width: "50%",
          display: "flex",
          flexDirection: "column",
        }}
        component={Paper}
      >
        <div>
          <Typography
            variant="h4"
            style={{ textAlign: "center", width: "100%", fontWeight: "500" }}
          >
            Employee Details Form
          </Typography>
          <Typography
            style={{ textAlign: "center", width: "100%", marginTop: "5px" }}
          >
            Please fill all the details carefully.
          </Typography>
          <hr
            style={{
              width: "100%",
              border: "0.3px solid #ddd",
              margin: "20px 0 10px 0",
            }}
          />
        </div>
        <br />
        <Box sx={{ padding: "5px 20px 5px 20px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography sx={{ marginBottom: "10px" }}>Full Name</Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5%",
              }}
            >
              <FormControl
                label={"First Name"}
                sx={{ width: "50%" }}
                {...register("firstname")}
                inputRef={register("firstname").ref}
              />
              <FormControl
                label={"Last Name"}
                sx={{ width: "50%" }}
                {...register("lastname")}
                inputRef={register("lastname").ref}
              />
            </div>
            <Typography sx={{ margin: "10px 0 10px 0" }}>
              Contact Details
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5%",
              }}
            >
              <FormControl
                label={"Phone Number"}
                type={"number"}
                sx={{ width: "50%" }}
                {...register("phoneNumber")}
                inputRef={register("phoneNumber").ref}
              />
              <FormControl
                label={"Alternate Phone Number"}
                type={"number"}
                sx={{ width: "50%" }}
                {...register("alternatePhoneNumber")}
                inputRef={register("alternatePhoneNumber").ref}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5%",
                margin: "10px 0 10px 0",
              }}
            >
              <FormControl
                label={"Email"}
                type={"text"}
                sx={{ width: "50%" }}
                {...register("email")}
                inputRef={register("email").ref}
              />
              <FormControl
                label={"LinkedIn ID"}
                type={"text"}
                sx={{ width: "50%" }}
                {...register("linkedinId")}
                inputRef={register("linkedinId").ref}
              />
            </div>
            <br />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </div>
  );
}
