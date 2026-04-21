import { Routes, Route } from "react-router-dom";
import Day1App from "./Day1/App";
import Day2App from "./Day2/App";
import FetchingData from "./Day3/FetchingData";
import Controlled from "./Day3/Controlled";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Day1App />} />
      <Route path="/day2" element={<Day2App />} />
      <Route path="/fetchingData" element={<FetchingData />} />
      <Route path="/Controlled" element={<Controlled/>} />

       </Routes>
   
  )
};

export default App;


