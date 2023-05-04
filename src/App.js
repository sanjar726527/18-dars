import React from "react";
import { Headers } from "./pages/Headers";
import { Box, Container, CssBaseline } from "@mui/material";
import { Cards } from "./pages/Cards";

function App() {
  return (
    <Box>
      <CssBaseline />
      <Headers />
      <Container>
        <Cards />
      </Container>
    </Box>
  );
}

export default App;
