import RatingConfiguration from "./pages/RatingConfiguration";
import { StyledRoutesApp } from "./styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rating from "./pages/Rating";
import Success from "./pages/Success";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <StyledRoutesApp>
              <RatingConfiguration />
            </StyledRoutesApp>
          }
        />
        <Route
          path="/rating/:id"
          element={
            <StyledRoutesApp>
              <Rating />
            </StyledRoutesApp>
          }
        />
        <Route
          path="/rating"
          element={
            <StyledRoutesApp>
              <Rating />
            </StyledRoutesApp>
          }
        />
        
        <Route
          path="/success"
          element={
            <StyledRoutesApp>
              <Success />
            </StyledRoutesApp>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
