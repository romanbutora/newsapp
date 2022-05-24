import React from 'react'
import {  useEffect, useRef } from "react";

const Clock = () => {
    const canvasRef = useRef(null)

    const updateClock = () => {
        const canvas = canvasRef.current
        const c = canvas.getContext('2d')

        
        c.fillStyle = 'rgb(18, 16, 16)'
        c.fillRect(0, 0, canvas.width, canvas.height);
        
        // Get the current time
        var now = new Date();
        var  h = now.getHours();
        var  m = now.getMinutes();
        var  s = now.getSeconds();
        var  ampm = (h < 12 ? 'AM' : 'PM');

        // Make the hour between 0 and 12 (not 24)
        h = (h % 12);

        // Make values like '5' into '05'
        h = addLeadingZeroWhenNecessary(h);
        m = addLeadingZeroWhenNecessary(m);
        s = addLeadingZeroWhenNecessary(s);
        
        // Assemble the text
        var clockText = h + ':' + m + ':' + s + ' ' + ampm,
            x = 10,
            y = 60;
        
        // This green color was picked
        // using http://jscolor.com/
        c.fillStyle = '#bebebe';
        
        // Draw the text
        c.font = '20pt Arial';
        c.strokeStyle = 'white';
        c.fillText(clockText, x, y);
        c.strokeText(clockText, x, y);
            
            
    }

    function addLeadingZeroWhenNecessary(s){
        return (s < 10 ? '0' : '') + s;
    }

    useEffect(()=>{
    
        updateClock()
        const interval=setInterval(()=>{
            updateClock()
         },1000)
           
           
         return()=>clearInterval(interval)
    },[])



  return (
      
    <canvas ref={canvasRef} id='clock' width="200" height="70" style={{"display":"inline"}}>

    </canvas>
    
  )
}

export default Clock