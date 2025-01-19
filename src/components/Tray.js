import { useState,useEffect, useContext } from "react"
import React from "react"
import { DataContext } from "./Form"
import "../styles/Tray.css"
import Bar from "./Bar"
import BubbleSort from "../algos/BubbleSort"



function Tray(props) {

    const data = useContext(DataContext)
    const [speed, setSpeed] = useState(0);
    const [jump, setJump] = useState(0);
    const [sliderValue, setSlidervalue] = useState(51);

    function sort() {

        if (document.getElementById("isSorted").value == "1") {
            return;
            //the array is already sorted
        }


        document.getElementById("isSorted").value = "1";
        document.getElementById("sortingButton").disabled = true;
        document.getElementById("generateButton").disabled = true;
        switch (props.algorithim) {

            case "bubbleSort":
                {
                    //alert("Bubble sort");
                    BubbleSort(props.data, props.setData, speed, jump);
                    break;
                }
            case "selectionSort":
                {
                    alert("Selection sort")
                    break;
                }
            case "insertionSort":
                {
                    alert("Insertion Sort")
                    break;
                }
            case "cocktailShakerSort":
                {   
                    alert("Cocktail shaker sort")
                    break;
                }


        }


    }

    return (<React.Fragment>

        <button onClick={sort} id="sortingButton" className="edit">Sort</button>
        <div className="tray" id="tray">
            <div className="screen" id="screen">
                {data.map((value, i) => {
                    <Bar key={i} id={i} value={value} length={data.length} i={i} />
                })
                }
            </div>
        </div>
    </React.Fragment>
    );
}

export default Tray;