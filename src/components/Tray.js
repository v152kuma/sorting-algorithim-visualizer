import { useState } from "react"
import { DataContext } from "./Form"

function Tray(props) {

    const data = useContext(DataContext)
    const [speed, setSpeed] = useState(0);
    const [jump, setJump] = useState(0);
    const [sliderValue, setSlidervalue] = useState(51);

    function sort() {

        if (document.getElementById("isSorted").value == "1") {
            return;
        }


        document.getElementById("isSorted").value = "1";
        document.getElementById("sortingButton").disabled = true;
        document.getElementById("generateButton").disabled = true;
        switch (props.algorithim) {

            case "bubbleSort":
                {

                    break;
                }
            case "selectionSort":
                {
                    break;
                }
            case "insertionSort":
                {
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
    </React.Fragment>)
}