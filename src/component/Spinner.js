import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react'

export const Spinner = () => {

    const myfunction = () => {
        var x = 1024;
        var y = 9999;
        var deg = Math.floor(Math.random() * (x - y)) + y; 
        document.getElementById('box').style.transform = "rotate("+deg+"deg)";
    
        var element = document.getElementById('mainbox');
        element.classList.remove('animate');
        setTimeout(function(){
            element.classList.add('animate');
            var valueList = ["10","20","50","100","150","200","400","500",];
            var getValue = valueList[Math.floor(Math.random() * valueList.length)];
            console.log(getValue);
            // alert(getValue); 
        }, 5000);
    }

  return (
<div id="mainbox" className="mainbox">
	<div id="box" className="box">
		<div className="box1">
			<span className="span1"><b>10</b></span>
			<span className="span2"><b>20</b></span>
			<span className="span3"><b>50</b></span>
			<span className="span4"><b>100</b></span>
		</div>
		<div className="box2">
			<span className="span1"><b>150</b></span>
			<span className="span2"><b>200</b></span>
			<span className="span3"><b>400</b></span>
			<span className="span4"><b>500</b></span>
		</div>
	</div>
	<button className="spin" onClick={()=>{myfunction()}}>SPIN</button>
</div>
  );
}
