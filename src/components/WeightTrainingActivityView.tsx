import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { WeightLiftingActivity } from "../Types";
import WeightLiftingSetView from "./WeightTrainingSetView";

const Item = styled(Box, {})(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  flex: 1,
}));

interface Props {
  activity: WeightLiftingActivity | undefined;
}

export default function WeightLiftingActivityView({ activity }: Props) {
  return (
    <Grid container>
      <Item>NAME: {activity?.name}</Item>
      <Grid container >
        {activity?.sets.map((set) => {
          return (<Item><WeightLiftingSetView set={set} /></Item>);
        })
        }
      </Grid>
    </Grid>
  );
}
