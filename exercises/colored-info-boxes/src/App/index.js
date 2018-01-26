import React, {Component} from "react";
import Box from "./Box";

function App(props) {
        let boxes = [
            {
            title: "calm",
            subtitle: "no tension",
            information: "clouds wafting by",
            boxColor: "rgb(156, 220, 254)",
            border: "1px solid rgb(130, 200, 235)"
            },
            {
            title: "peace",
            subtitle: "welcoming",
            information: "all is well",
            boxColor: "rgb(253, 253, 240)",
            border: "1 px solid rgb(233, 233, 220)"
            },
            {
            title: "serenity",
            subtitle: "centered acceptance",
            information: "the breath flows in and out",
            boxColor: "rgb(255, 240, 245)",
            border: "1 px solid rgb(225, 210, 215)"
           }, 
           {
            title: "quietude",
           subtitle: "stillness within",
           information: "flowing with the waves",
           boxColor: "rgb(254, 245, 202)",
           border: "1 px solid rgb(234, 225, 182)"
           },         
           {
            title: "dream",
            subtitle: "sleepscape",
            information: "a lovely vision sent to you",
            boxColor: "rgb(233, 199, 231)",
            border: "1 px solid rgb(203, 169, 201)"
           },  
           {
            title: "breeze",
            subtitle: "gentle force",
            information: "caressed by soft winds",
            boxColor: "rgb(208, 249, 249)",
            border: "1 px solid rgb(188, 229, 229)"
           },  
           {
            title: "sunlight",
            subtitle: "daylight",
            information: "nourishing source",
            boxColor: "rgb(255, 250, 190)",
            border: "1 px solid rgb(235, 216, 150)"
           },  
           {
            title: "warmth",
            subtitle: "envelopment",
            information: "soft sands",
            boxColor: "rgb(255, 227, 155)",
            border: "1 px solid rgb(235, 177, 105)"
           },  
           {
            title: "comfort",
            subtitle: "ease",
            information: "at one with the earth",
            boxColor: "rgb(250, 235, 215)",
            border: "1 px solid rgb(230, 215, 195)"
           },  
           {
            title: "rest",
            subtitle: "stillness",
            information: "renewal",
            boxColor: "rgb(221, 232, 187)",
            border: "1 px solid rgb(200, 210, 167)"
           }  
        ];
        return(
        <div>
            <Box boxes={boxes} />
        </div>
    )
}

export default App;