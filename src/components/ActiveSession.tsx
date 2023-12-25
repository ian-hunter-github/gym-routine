import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/system/Stack";
import { styled } from "@mui/material/styles";

import WeightLiftingActivityView from "./WeightTrainingActivityView";

import { CardioActivity, WeightLiftingActivity, Workout } from '../Types';
import CardioActivityView from "./CardioActivityView";

interface Props {
  session: Workout | undefined;
}

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#262B32" : "#fff",
  ...theme.typography.h5,
  padding: theme.spacing(1),
  textAlign: "left",
  borderRadius: 4,
}));

export default function ActiveSession({ session }: Props) {

  return (
    <Stack>
      {
        session?.activities.map((activity) => {
          if (activity instanceof WeightLiftingActivity) {
           return <WeightLiftingActivityView activity={activity} />
          } else if (activity instanceof CardioActivity) {
            return(<Item><CardioActivityView activity={activity}/></Item>)
          } else return <Item>Unknown Activity</Item>
        })
      }

    </Stack>
  );
}
