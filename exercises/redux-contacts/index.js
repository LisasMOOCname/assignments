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
                    return contact;
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

let store = redux.createStore(redux.combineReducers({contacts}));

store.subscribe(() => {
    console.log(store.getState());
})

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
    id: 100,
    name: "James Barker",
    company: "The Barker Group",
    email: "jbarker@barkergroup.com"
}));

store.dispatch(addContact ({
    id: 101,
    name: "Kelly Conti",
    company: "The Barker Group",
    email: "kconti@barkergroup.com"
}));

store.dispatch(addContact ({
    id: 102,
    name: "Leon Goodnow",
    company: "Wisps Web Dev",
    email: "leon@wispswd.com"
}));

store.dispatch(editContact(100, {
    name: "Jim Barker",
    company: "The Barker Group",
    email: "jbarker@barkergroup.com"    
}));

store.dispatch(removeContact(102));    // where 102 is the ID.
