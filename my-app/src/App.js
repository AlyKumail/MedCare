import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/register" element={<Register />}></Route>
                {/* <Route path="/patient" element={<Patient />}></Route>
                <Route path="/patient/view_records" element={<PatientRecords />}></Route>
                <Route path="/patient/profile" element={<Profile />}></Route>
                <Route path="/patient/history" element={<PatientHistory />}></Route>
                <Route path="/doctor" element={<Doctor />}></Route>
                <Route path="/doctor/profile" element={<DoctorProfile />}></Route>
                <Route path="/doctor/history" element={<DoctorHistory />}></Route> */}
            </Routes>
        </div>
    );
}

export default App;
