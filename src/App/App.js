import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ServiceList from "../Components/ServiceList/ServiceList";
import ServiceEdit from "../Components/ServiceEdit/ServiceEdit";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/api-redux/"
          element={
            <>
              <Navigate to={"/api-redux/services"} replace />
            </>
          }
        />
        <Route path="/api-redux/services" element={<ServiceList />} />
        <Route path="/api-redux/services/:id" element={<ServiceEdit />} />
      </Routes>
    </div>
  );
}

export default App;
