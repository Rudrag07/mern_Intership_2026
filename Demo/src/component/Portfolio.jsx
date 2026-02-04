import React from 'react'
import dhoni from '../assets/dhoni.jpg';
import trophy from'../assets/trophy.jpg';
import trophy1 from'../assets/trophy1.jpg';
import "../assets/portfolio.css"

const Portfolio = () => {

  return (
    <>
   <h1 className='h1'>  <marquee id="marq" behavior="scroll" direction="up" scrollAmount="5">Portfolio</marquee></h1>
    
    <div className='portfolio'>  

         <img src={dhoni} width={500}></img>
         <p> Mahendra Singh Dhoni born 7 July 1981 is an Indian professional cricketer who plays as a right-handed batter and a wicket-keeper. Widely regarded as one of the most prolific wicket-keeper batsmen and captains, he represented the Indian cricket team and was the captain of the side in limited overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. Dhoni has captained the most international matches and is the most successful Indian captain. He has led India to victory in the 2007 ICC World Twenty20, the 2011 Cricket World Cup, and the 2013 ICC Champions Trophy, being the only captain to win three different limited overs ICC tournaments. He also led the teams that won the 
        Asia Cup in 2010 and 2016, and he was a member of the title winning squad in 2018.</p>
</div>
<img src={trophy} width={400} className='photo'></img>
<img src={trophy1} width={400} className='photo1'></img>
  </>
  
  )
}

export default Portfolio