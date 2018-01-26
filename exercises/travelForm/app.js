// Travel form inputs should display in an alert when 
// user clicks on the Submit button.
// Making all inputs required except for Dietary Restrictions,
// which will default to None.
var genders = document.getElementsByName("gender");
function findGender(){
    for(var i = 0; i < genders.length; i++){
        var isChecked = genders[i].checked;
        if(isChecked){
            return genders[i].value;
        }
    }
}

var restrictions = document.getElementsByName("restriction");
function findRestrictions(){
    let dietChoices = [];
    for(let i = 0; i < restrictions.length; i++){
        if(restrictions[i].checked){
            dietChoices.push(restrictions[i].value);
        }
    }
	if(dietChoices.length === 0) { // can't do if array === [], but can do a length of 0.
		dietChoices.push(restrictions[0].value); // if user doesn't select, default to None.
	}
    return dietChoices.join(", ");
}

function confirmForm(e) {
    e.preventDefault();
    var fname = document.getElementsByName("firstName")[0].value;
    var lname = document.getElementsByName("lastName")[0].value;
    var age = document.getElementsByName("age")[0].value;
    var sex = findGender();
    var location = document.getElementById("destination").value;
    var diet = findRestrictions();
    alert(
        "First name: " + fname + "\n" +
        "Last name: " + lname + "\n" +
        "Age: " + age + "\n" +
        "Gender: " + sex + "\n" +
        "Destination: " + location + "\n" +
        "Dietary restrictions: " + diet);
}

document.getElementById("travelForm").addEventListener("submit", confirmForm);
