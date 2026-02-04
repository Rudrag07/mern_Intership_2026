import React from "react";
import { Link } from "react-router-dom";

const TeamDetail = () => {
  let IplTeam = [
    { id: 1, name: "CSK", tropy:5 },
    { id: 2, name: "MI", tropy:5 },
    { id: 3, name: "RR", tropy:1 },
    { id: 4, name: "SRH", tropy:1},
    { id: 5, name:"KKR",tropy:1},
    { id: 6, name:"PBKS",tropy:0},
    { id: 7, name:"GT",tropy:1},
    { id: 8, name:"LSG",tropy:0},
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>All IPL TEAM Detail In 2008 To 2025 </h1>
      <ul>
            {IplTeam.map((ipl)=>{
              return <li>
                <Link to={`/iplteam/${ipl.name}/${ipl.tropy}`}>{ipl.name}</Link>
              </li>
            })}
                 
                           
    
        </ul>
           </div>
  )
}

export default TeamDetail;

