import sleep from "./sleep";

async function greenLayer(data, speed, jump){


    let i ;

    for(i=0; i < data.length; i++)
    {
       document.getElementById(i).style.background = "green";

    }

    await sleep(250);
 
    for(i=0; i < data.length; i++)
        {
           document.getElementById(i).style.background = "black";
    
        }

}

export default greenLayer;