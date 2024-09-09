import React, { useState } from 'react'

function Hook() {
    // let score = 0;
    let [score,setScore] = useState(0);
    let [singles,setSingles] = useState(0);
    let [balls,setBalls] = useState(0);
    let [double,setDouble] = useState(0);
    let [fours,setFours] = useState(0);
    let [sixes,setSixes] = useState(0);
    let [noballs,setNoBalls] = useState(0);
    let [wickets,setWickets] = useState(0);
    
  return (
    <div>
        <h1 style={{
            background:"blue",
            borderRadius : "20px",
            color:"white",
            boxShadow:"10px 10px 10px black"
        }}>Cricket Match Details</h1>
      <h1>IND Score:{score}/{wickets}</h1>
      <h1>Singles:{singles}</h1>
      <h1>Overs:{parseInt(balls/6)}.{balls%6}</h1>
      <h1>Double:{double}</h1>
      <h1>Fours:{fours}</h1>
      <h1>Sixes:{sixes}</h1>
      <h1>NoBalls:{noballs}</h1>
      <h1>Sixes:{wickets}</h1>
      <button type='button' onClick={()=>{
        setScore(score +1);
        setBalls(balls +1);
        setSingles(singles +1);
        // score ++;
        // console.log(score)
      }}>Singles</button>

       <button type='button' onClick={()=>{
        setScore(score +2);
        setBalls(balls +1);
        setDouble(double +1);
      }}>Doubles</button>

<button type='button' onClick={()=>{
        setScore(score +4);
        setBalls(balls +1);
        setFours(fours +1);
      }}>Fours</button>

      <button type='button' onClick={()=>{
        setScore(score +6);
        setBalls(balls +1);
        setSixes(sixes +1);
      }}>Sixes</button>

<button type='button' onClick={()=>{
        setScore(score +2);
        setNoBalls(noballs +1);  
      }}>NoBalls</button>

<button type='button' onClick={()=>{
        setBalls(balls +1);
        setWickets(wickets +1);
      }}>Wickets</button>
    </div>
  )
}

export default Hook
