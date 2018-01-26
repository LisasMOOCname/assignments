// Make two constructor functions. One must inherit from the other.
// Add a prototype method to the parent (can use the print() method from
// the lesson). Make an instance of each class and call the prototype.
// Do this in ES5 and ES6.

//ES5
function Customer(contactName, custNumber, request) {
    this.contactName = contactName;
    this.custNumber = custNumber;
    this.request = request;   

    }


Customer.prototype.print = function() {
    for(let key in this) {
        if(this.hasOwnProperty(key)) {
            console.log(`${key}: ${this[key]}`);
        }
    }
}

function CorporateCustomer(contactName, custNumber, request, corpName, taxExempt) {
    Customer.call(this, contactName, custNumber, request );
    this.corpName = corpName;
    this.taxExempt = taxExempt || false;
}

CorporateCustomer.prototype = Object.create(Customer.prototype);

//ES6
/*class Customer {
    constructor(contactName, custNumber, request) {
        this.contactName = contactName;
        this.custNumber = custNumber;
        this.request = request;
    }
    print() {
        for(let key in this) {
            if(this.hasOwnProperty(key)) {
                console.log(`${key}: ${this[key]}`);
            }
        }
    }
}

class CorporateCustomer extends Customer {
    constructor(contactName, custNumber, request, corpName, taxExempt) {
        super(contactName, custNumber, request);
        this.corpName = corpName;
        this.taxExempt = taxExempt || false;
    }
}*/

let keithRedstone = new Customer("Keith Redstone", 12345, "software glitch");
keithRedstone.print();

let brightsideSchoolDistrict = new CorporateCustomer("Jane Hopewell", 23867,
 "requesting customized module", "Brightside School District", true);
brightsideSchoolDistrict.print(); 







/*state = {
    name: 'lesa',
    hasHair: true,
    gender: "female"
}

render() {
    let {name, hasHair, gender} = this.state;
    let name = this.state.name;

    <div>
        {name}
    </div>
} */