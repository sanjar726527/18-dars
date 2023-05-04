import { Card, Grid } from "@mui/material";
import React from "react";

export const Cards = () => {
  return (
    <Grid container spacing={2} sx={{ my: 4 }}>
      <Grid item xs={3}>
        <Card sx={{ p: 3 }}>1</Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{ p: 3 }}>2</Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{ p: 3 }}>3</Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{ p: 3 }}>4</Card>
      </Grid>
    </Grid>
  );
};
