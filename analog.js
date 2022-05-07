const second=document.getElementById("sec");
const minute=document.getElementById("min");
const hours=document.getElementById("hr");

setInterval(()=>
{
     let time=new Date();
     let sec=time.getSeconds()*6;
     let min=time.getMinutes()*6;
     let hr=time.getHours()*30;
    
   
    second.style.transform=`rotateZ(${sec}deg)`;
    minute.style.transform=`rotateZ(${(min)+(sec)/60}deg)`;
    hours.style.transform=`rotateZ(${(hr)+(min)/12}deg)`;

    
});
