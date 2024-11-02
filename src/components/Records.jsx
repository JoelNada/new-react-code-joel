import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Records() {
  const [usersData, setUsersData] = useState([]);
  const [firstName, setFirstName] = useState("");
  useEffect(() => {
    const data = localStorage.getItem("userData");
    console.log(JSON.parse(data));
    setUsersData(JSON.parse(data));
  }, []);
  return (
    <>
      <div
        style={{ padding: "20px", display: "flex", justifyContent: "center" }}
      >
        <Box component={Paper} sx={{ padding: "20px", width: "55%" }}>
          <Typography variant="h5">Records</Typography>
          {usersData &&
            usersData
              .reduce((acc, user, index) => {
                if (index % 2 === 0) {
                  acc.push([user]);
                } else {
                  acc[acc.length - 1].push(user);
                }
                return acc;
              }, [])
              .map((pair, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: "100%",
                    marginBottom: "10px",
                  }}
                >
                  {pair.map(({ firstname, lastname }) => (
                    <Box
                      component={Paper}
                      sx={{
                        width: "49%",
                        padding: "10px",
                        backgroundColor: "#f44336",
                        color: "white",
                        height: "100px",
                        cursor: "pointer",
                      }}
                      key={firstname}
                      onClick={() => {
                        setFirstName(firstname);
                      }}
                    >
                      Name : {firstname} <br />
                      First Name : {firstname} <br />
                      Last Name : {lastname} <br />
                    </Box>
                  ))}
                </div>
              ))}
        </Box>
      </div>
      <Box
        component={Paper}
        sx={{ padding: "20px", width: "55%", margin: "auto" }}
      >
        <Typography variant="h5">Full Details</Typography>
        <br />
        {usersData
          .filter((name) => name.firstname === firstName)
          .map((detail, index) => (
            <ul style={{ listStyle: "none" }} key={index}>
              <li>First Name : {detail.firstname}</li>
              <li>Last Name : {detail.lastname}</li>
              <li>Email : {detail.email}</li>
            </ul>
          ))}
      </Box>
    </>
  );
}
