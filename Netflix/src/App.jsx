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
      </Routes>
    </>
  );
}

export default App;
