// JavaScript file for Lesa Becker's "Consult the Oracle"
// V School pre-course project.

// Gets the user's selection.	
// Uses a conditional statement.				
function getInquiry(inquiry) {
    var topic = "";
    if (document.getElementById("health").checked) {
		                                            topic = "health";
			                                       }
    else if (document.getElementById("family").checked) {
						                                 topic = "family";
					                                    }
    else if (document.getElementById("journey").checked) {
                                                          topic = "a journey";
	                                                     }
    else if (document.getElementById("love").checked) {
						                                 topic = "love";
					                                    }
    else if (document.getElementById("money").checked) {
                                                          topic = "money";
	                                                     }
	else { 
	      topic = "spirit";
		  }
	return topic;
	}
	
	
// Displays on page load.
// IIFE function that doesn't depend on an event listener.
(function welcome() {
  			         document.getElementById("output").innerHTML = "Welcome, Seeker";
		            })();
					
					
// Give oracle's answer to the user's inquiry.
// Uses an array and strings. Is called by an event listener.
function foretell(topic) {
                          var subject = getInquiry(topic);
						  var foretellings = [
							"Fortune is smiling upon you.", 
							"proceed with caution.", 
							"you must look within yourself.", 
							"your Fate is entwined with a compelling stranger.", 
							"you must quest for fulfillment. ", 
							"the waters of foretelling are murky and show nothing."
						  ];
 					      var oracleAnswer = Math.floor(Math.random() * foretellings.length);
						  
						  document.getElementById("output").innerHTML = "In this matter of " + subject + ", " + foretellings[oracleAnswer];
					     }	

/*Non-working function. This is what I *want* to do.						 
function allowThreeRequests(){
                   do var count = 0;
				   while(count < 3){
				        //I want the event listener to go here, but it won't work inside the loop.
				        console.log(count);	
				        count++;
				   }
				   if(count === 3){
				                   document.getElementById("output").innerHTML = "You have made three requests. The Oracle will reveal no more.";
						          }
                  }	*/	
				  

// Here's what the oracle attendant is mumbling under his breath.
// Demonstrates a loop.				  
function attendantGrumblings() {
    var grumbles = [
	                "The seeker's offering could be better.",
					"The seeker obviously didn't stop at the ritual bath on the way.",
					"My feet hurt."
					];
					
    for(let i = 0; i < 3; i++) {
                                console.log(grumbles[i]);
                               }	
							  }
							  
							  
setTimeout(attendantGrumblings, 3000);
document.getElementById("chooser").addEventListener("change", foretell);

 
 
 