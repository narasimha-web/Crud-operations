
  const data = 
  [{
    name:"narasimha",
    email:"narasimha235@gmail.com",
    address:"gopavaram villege ",
    phone:9581702145,
  
},
{
    name:"sunil",
    email:"sunil562@gmail.com",
    address:"chenai",
    phone:8844997755
},
{
    name:"venkata Ram",
    email:"venkat234#gmail.com",
    address:"hydearabad",
    phone:8855663322,
},
{
    name:"venkata kalyan",
    email:"venkat234#gmail.com",
    address:"hydearabad",
    phone:8855663322,
},
{
    name:"venkata subbaiah",
    email:"venkat234#gmail.com",
    address:"hydearabad",
    phone:8855663322,
},
];


// Function to add a new entry
function addEntry(newEntry) {
    // Check if the entry with the same email already exists
    const findRecord = data.some(entry => entry.email !== newEntry.email);
    console.log(findRecord)
    if (findRecord) {
        data.push(newEntry);
    } else {
        console.log("An entry with this email already exists.");
    }
}

// Function to update an existing entry
function updateEntry( email,updatedEntry) {
    const index = data.findIndex(entry => entry.email === email );
    if (index !== -1) {
        data[index] ={ ...data[index], ...updatedEntry };
    } else {
        console.log("Entry not found.");
    }
}

// Function to delete an entry
/*function deleteEntry(email) {
    const index = data.findIndex(entry => entry.email === email);
    if (index !== -1) {
        data.splice(index, 1);
    } else {
        console.log("Entry not found.");
    }
}

// Example usage
console.log("Initial data:", data);

// Adding a new entry
const newEntry = {
    name: "john doe",
    email: "sunil562@gmail.com",
    address: "new york",
    phone: 1234567890,
};
addEntry(newEntry);
console.log("After adding a new entry:", data);

// Updating an existing entry
const updatedEntry = {
    address: "new address",
    phone: 9876543210,
};
updateEntry("narasimha235@gmail.com", updatedEntry);
console.log("After updating an entry:", data);

// Deleting an entry
deleteEntry("venkat234@gmail.com");
console.log("After deleting an entry:", data);*/


// Adding a new entry
const newEntry = {
    name: "john doe",
    email: "narasimha@12.com",
    address: "new york",
    phone: 1234567890,
};
addEntry(newEntry);
//console.log("After adding a new entry:", data);

updateEntry("narasimha","surendra")

console.log(data)