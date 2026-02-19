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
import FormHandling  from "./component/ReactFormHook/FormHandling";
import FormValidation from "./component/ReactFormHook/FormValidation";
import Api from "./component/ApiDemo/Api";
import Api1 from "./component/ApiDemo/Api1";
import { Omdb } from "./component/ApiDemo/Omdb";
import Moviedetail from "./component/ApiDemo/Moviedetail";
import Series from "./component/ApiDemo/Series";



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
          <Route path="/formHandling" element={<FormHandling/>}/>
        <Route path="/formValidation" element={<FormValidation/>}/>
        <Route path="/api" element={<Api/>}/>
        <Route path="/api1" element={<Api1/>}/>
        <Route path="/omdb" element={<Omdb/>}/>
        <Route path="/moviedetail" element={<Moviedetail/>}/>
        <Route path="/Series" element={<Series/>}/>
        
        
        
      </Routes>
    </>
  );
}

export default App;
