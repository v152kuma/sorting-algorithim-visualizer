import sleep from "../utils/sleep";
import inputOn from "../utils/inputOn";
import greenLayer from "../utils/greenLayer";


async function BubbleSort(data, setData, speed, jump)
{

let buffer = [...data];
let counter =0 ;
const n = buffer.length;
let i,j;

for(i = 0; i< n;i++){
    for(j=0;j<n-1;j++)
    {
        if(buffer[j]>buffer[j+1]){

            const x = document.getElementById(j);
            const y = document.getElementById(j+1);

            x.style.background = "red";
            y.style.background = "red";

            const tempheight = x.style.height;
            x.style.height = y.style.height;
            y.style.height = tempheight;

            let temp = buffer[j];
            buffer[j] = buffer[j+1];
            buffer[j+1] = temp;

            await sleep(1);

            x.style.background = "black";
            y.style.background = "black";

            setData(buffer);
        }
    }
}

   greenLayer(data, speed, jump);
   inputOn();


}

export default BubbleSort;