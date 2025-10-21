import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";

import Dashboard from "./component/Dashboard";
import AdminLogin from "./Pages/Login/AdminLogin";
import AddPatientPage from "./Pages/Faculty/AddPatientPage";
import ViewPatient from "./Pages/Faculty/ViewPatient/ViewPatient";
import EditPatient from "./Pages/Faculty/EditPatient/EditPatient";
import SoberPeriodPrediction from "./Pages/Faculty/PredictPatient/SoberPeriodPrediction";
import RiskLevelPrediction from "./Pages/Faculty/PredictPatient/RiskLevelPrediction";
import AAOPrediction from "./Pages/Faculty/PredictPatient/AAOPrediction";
import DashboardFaculty from "./component/FacultyPanel/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Topbar from "./component/Topbar/Topbar";
import LanguageSwitcher from "./component/LanguageSwitcher/LanguageSwitcher";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <div style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          zIndex: 1000,
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '8px',
          padding: '8px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
        }}>
          <LanguageSwitcher />
        </div>
        <Topbar />
        <Routes>
          <Route path="/admin/:id" element={<Dashboard />}></Route>
          <Route path="/login" element={<AdminLogin />}></Route>
          <Route path="/patientadd/:id" element={<AddPatientPage />}></Route>
          <Route path="/admin/add-patient" element={<AddPatientPage />}></Route>
          <Route path="/patientview/:id" element={<ViewPatient />}></Route>
          <Route path="/patient/:id" element={<EditPatient />}></Route>
          <Route path="/faculty" element={<DashboardFaculty />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/predictSoberPeriod"
            element={<SoberPeriodPrediction />}
          ></Route>
          <Route
            path="/predictRiskLevel"
            element={<RiskLevelPrediction />}
          ></Route>
          <Route path="/predictAAO" element={<AAOPrediction />}></Route>
        </Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;
