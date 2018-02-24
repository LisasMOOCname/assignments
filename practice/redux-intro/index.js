const redux = require("redux");

//This is the reducer:
function count(prevState = 0, action) {
    switch(action.type) {
        case "CHANGE":
            return action.amount + prevCount;
        default:
            return prevCount; // No actions yet.
    }
}

let store = redux.createStore(redux.combineReducaers({count}));

// Optional, only if want to see this. It gets the state anyway.
store.subscribe(() => {
    console.log(store.getState());
})

function change(num) {
    return {
        type: "CHANGE",
        amount: num
    }
}

/* He took this out, not sure when or why.
let defaultState = {
    count: count()
} */

store.dispatch(change(10));