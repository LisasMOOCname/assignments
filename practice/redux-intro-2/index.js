const redux = require("redux");

function contacts(prevContacts = [], action) {
    switch(action.type) {
        case "ADD_CONTACT":
            return [...prevContacts, action.contact];
        case "EDIT_CONTACT":
            let editedContacts = [...prevContacts];
            return editedContacts.map((contact) => {
                if(contact.id === action.id) {
                    return action.contact;
                }
                else {
                    return contact; // Should it be prevContact?
                }
            })
        case "REMOVE_CONTACT":
            let newContacts = [...prevContacts];
            return newContacts.filter((contact) => {
                return action.id !== contact.id;
            })
        default:
            return prevContacts;
    }
}

let store = redux.createStore(redux.combineReducers({contact}));

// Action creators:
function addContact(contact) {
    return {
        type: "ADD_CONTACT",
        contact  // He didn't do a key:value pair here, but it works.
    }
}

function editContact(id, contact) {
    return {
        type: "EDIT_CONTACT",
        id,
        contact
    }
}

function removeContact(id) {
    return {
        type: "REMOVE_CONTACT",
        id
    }
}

// Tell store:
store.dispatch(addContact ({
    id: 0,
    name: "John"
}));

store.dispatch(editContact(0, {
    name: "Johnny",
}));

store.dispatch(removeContact(1));    // where 1 is the ID.

