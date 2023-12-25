import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ICardioSet } from "../Types";

const Item = styled(Box, {})(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  flex: 1,
}));

interface Props {
  set: ICardioSet | undefined;
}

export default function WeightLiftingSetView({ set }: Props) {
  return (
    <Item><Button variant="contained">{set?.state}</Button></Item>
  );
}
