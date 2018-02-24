import React from "react";

function NamesList(props) {
    const names = props.namesList.map((name, index) => {
        return <li key={index}>{name}</li>
    })
    return (
       <ol className="list">{names}</ol>
    )
}

export default NamesList;