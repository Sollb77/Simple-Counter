//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = 0;

function tick() {
    counter++
    let arraycounter = counter.toString().padStart(6, 0).split('');
    const element = ( <
        div className = "bg-dark m-3" >
        <
        i class = "far fa-clock text-light" > < /i>
        arraycounter.map((count, i) => ( <
                h2 key = {
                    i
                }
                className = "estilosContador" > {
                    count
                } < /h2>            ))
            }

            <
            /div>
        ); ReactDOM.render(element, document.querySelector("#app"));
    }

    setInterval(tick, 1000);
    //ReactDOM.render( < Home / > , document.querySelector("#app"));