import { createContext, useEffect , useState} from "react";
import React from "react";
import Tray from "./Tray";
import "../styles/Form.css"

export const DataContext = createContext();
function Form(){

const [number, setNumber] = useState(100);

const [algorithim, setAlgorithim] = useState('bubbleSort');

const [data, setData] = useState([]);

function handleCountChange(e){
  setNumber(e.target.value);
}

function handleAlgorithimChange(e){
  setAlgorithim(e.target.value);
}


function generateSampleData(number){

     document.getElementById("isSorted").value = 0;

     if(number<=1) {
        window.alert("The miniumum number of elements is 2");
        return;
     }

     if(number>200){
        window.alert("The maximum number of elements is 200");
        return;
     }

    const newData =[];
    let dataCounter = 0;
    let randomElement = 0;

    while(dataCounter<number){
        randomElement = Math.floor(Math.random()*number+1);
        if(!newData.indexOf(randomElement)){
            newData.push(randomElement);
            dataCounter++;
        }
    }

    setData(newData);

}

useEffect(() =>{
    generateSampleData();
},[])

return(
  <React.Fragment>
    <div>
      <select name="sortingAlgorithim" id="sortingAlgorithim" onChange={handleAlgorithimChange}>
        <option value="bubbleSort">Bubble Sort</option>
        <option value="insertionSort">Insertion Sort</option>
        <option value="selectionSort">Selection Sort</option>
        <option value="quickSort">Quick Sort</option>
        <option value="mergeSort">Merge Sort</option>
      </select>
    <input id="count" placeholder="Array Size" className="formElement" autoComplete="off" value={number} onChange={handleCountChange}/>
    <button className="formElement" onClick={() => generateSampleData(number)}>Generate Array</button>

    <DataContext.Provider value={data}>
     <Tray algorithim = {algorithim} data={data} setData= {setData}/>
     </DataContext.Provider>
      

    </div>

  </React.Fragment>
);
}

export default Form;