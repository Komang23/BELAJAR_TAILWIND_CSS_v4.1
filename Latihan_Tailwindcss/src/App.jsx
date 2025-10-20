import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import App1 from "./pages/App1/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/App1" element={<App1 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
