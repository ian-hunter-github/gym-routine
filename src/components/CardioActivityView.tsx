import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { CardioActivity } from "../Types";

const Item = styled(Box, {})(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  flex: 1,
}));

interface Props {
  activity: CardioActivity | undefined;
}

export default function CardioActivityView({ activity }: Props) {
  return (
    <Grid container>
      <Item><Button variant="contained">{activity?.name}</Button></Item>
      <Item>{activity?.description}</Item>
      {activity?.expectedDistanceM ? <Item>Dist: {activity.expectedDistanceM}</Item> : null}
      {activity?.expectedTimeSecs ? <Item>Time: {activity.expectedTimeSecs}</Item> : null}
      {activity?.expectedReps ? <Item>Reps: {activity.expectedReps}</Item> : null}
    </Grid>
  );
}
