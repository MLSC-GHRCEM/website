import "./App.css";
import Home from "./pages/Home";
import Events from "./pages/Events";
import { Route, Routes } from "react-router-dom";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event/:slug" element={<EventPage />} />
      </Routes>
    </>
  );
}

export default App;
