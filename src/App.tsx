import "./styles.css";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import { userData } from './WorkoutData';

import ActiveSession from './components/ActiveSession'

const HeaderItem = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2028" : "#fff",
  ...theme.typography.h3,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  color: "red",
  ...theme.typography.h4,
  padding: theme.spacing(1),
  textAlign: "center",
  //color: theme.palette.text.secondary,
}));

const ClockItem = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.h3,
  padding: theme.spacing(1),
  textAlign: "left",
  color: "green" //theme.palette.text.secondary,
}));

const workout = userData.currentProgram?.workouts[0];

console.log(JSON.stringify(workout));

export default function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <HeaderItem>{userData.name} - {workout?.title}</HeaderItem>
          <Item>
            <ActiveSession session={workout}/>
          </Item>
        </Grid>
        <Grid xs={12}><ClockItem>CLOCK!</ClockItem></Grid>
      </Grid>
    </Box>
  );
}

