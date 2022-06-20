import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetails from "./components/ExcerciseDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <Box width="400px" sx={{ width: { x1: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/excercise/:exerciseId" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
