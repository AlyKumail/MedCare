import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Patient from "./pages/Patient";
import Records from "./pages/Records";
import RecordDetail from "./pages/RecordDetail";
import Profile from "./pages/Profile";
import Doctor from "./pages/Doctor";
import Patients from "./pages/Patients";
import PatientAccess from "./pages/PatientAccess";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/patient" element={<Patient />}></Route>
        <Route path="/records" element={<Records />}></Route>
        <Route path="/recorddetail" element={<RecordDetail />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/doctor" element={<Doctor />}></Route>
        <Route path="/patients" element={<Patients />}></Route>
        <Route path="/patientAccess" element={<PatientAccess />}></Route>
        {/* <Route path="/patient/profile" element={<Profile />}></Route>
                <Route path="/patient/history" element={<PatientHistory />}></Route>
                <Route path="/doctor" element={<Doctor />}></Route>
                <Route path="/doctor/profile" element={<DoctorProfile />}></Route>
                <Route path="/doctor/history" element={<DoctorHistory />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
