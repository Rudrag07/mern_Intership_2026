// import Netflixhome from '/Netflixhome'
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import NetflixShow from "./NetflixShow";
import Kids from "./component/Kids";
import Netflixhome from "./Netflixhome";
import Error from "./component/Error";
import Watch from "./component/Watch";
import "./assets/style.css";
import IplTeam from "./component/IplTeam";
import TeamDetail from "./component/TeamDetail";
import { Profile } from "./component/Profile";
import { Formhandling } from "./component/ReactFormHook/FormHandling";
import FormValidation from "./component/ReactFormHook/FormValidation";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/netflixhome" element={<Netflixhome />} />
        <Route path="/netflixshow" element={<NetflixShow />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="*" element={<Error />} />
        <Route path="/watch/:name" element={<Watch />}/>
         <Route path="/iplteam/:name/:tropy" element={<IplTeam/>}/>
         <Route path="/teamdetail" element={<TeamDetail/>}/>
         <Route path="/profile" element={<Profile/>}/>
          <Route path="/formhandling" element={<Formhandling/>}/>
        <Route path="/formValidation" element={<FormValidation/>}/>
      </Routes>
    </>
  );
}

export default App;
