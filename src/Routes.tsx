import RatingConfiguration from "./pages/RatingConfiguration";
import { StyledRoutesApp } from "./styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rating from "./pages/Rating";

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
          path="/rating"
          element={
            <StyledRoutesApp>
              <Rating />
            </StyledRoutesApp>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
