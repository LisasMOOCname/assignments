// Job Search 
function searchJobs(searchTerm) {
    alert("This is placeholder functionality for a search results list.");
    document.getElementById("search").value = "";
}

document.getElementById("findJobs").addEventListener("click", searchJobs);


// Job Applicant Form
function apply(event) {
    event.preventDefault();
    console.log("Yeah, it's working.");
    alert("Thank you for applying to Sable IT Staffing! We will review your information and contact you within two business days.");
    // return false; Not really needed and doesn't help.
}

document.getElementById("submitForm").addEventListener("click", apply);