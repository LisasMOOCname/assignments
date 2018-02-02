import React from "react";
import Friend from "./Friend";
import "./index.css";

function Friendlist(props) {
let friends = [
    {
        name: "Jeff",
        age: 32,
        pets: [{
            petName: "Hershey",
            breed: "calico cat"
        }]
    },
    {
        name: "Henry",
        age: 41,
        pets: [
            {
                petName: "Alegre",
                breed: "German shepherd"
            },
            {
                petName: "Cookie",
                breed: "shih tzu"
            },
            {
                petName: "Tux",
                breed: "calico cat"
            },
            {
                petName: "Belle",
                breed: "tabby cat"
            }]
    },
    {
        name: "Marilyn",
        age: 20,
        pets: [
            {
                petName: "Sadie",
                breed: "poodle"
            },
            {
                petName: "Carmen",
                breed: "Persian cat"
            },
            {
                petName: "Duncan",
                breed: "guinea pig"
            },
            {
                petName: "Cecily",
                breed: "hamster"
            }
        ]
    },
    {
        name: "Mark",
        age: 27,
        pets: [
            {
                petName: "Eric",
                breed: "fish"
            }
        ]
    }
]
    return (
        <div className="listParent">
            <div className="list">
                <h1>Friends with Pets</h1>
                <ul>
                    {friends.map((info) => {
                        return <Friend {...info} />
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Friendlist;