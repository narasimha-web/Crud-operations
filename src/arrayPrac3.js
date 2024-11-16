const data = [
    {
      "model": "Nissan",
      "code": "1",
      "id": "12",
      "properties": [{ id : 1,"color": "red", "doors": "4", "engine": "best", "price": "500", "is_electric": "false"}]
    },
    {
      "model": "Tesla",
      "code": "2",
      "id": "13",
      "properties": [{ id : 1.1,"color": "grey", "doors": "4", "engine": "best", "price": "800", "is_electric": "true"},
        { id : 1.2,"color": "grey", "doors": "4", "engine": "best", "price": "800", "is_electric": "true"}
      ]
    },
    {
      "model": "Kia",
      "code": "3",
      "id": "14",
      "properties": [{ id : 101,"color": "green", "doors": "4", "engine": "diesel", "price": "900", "is_electric": "false"},
        { id : 102,"color": "green", "doors": "4", "engine": "diesel", "price": "900", "is_electric": "false"},
      ]
      }
  ]


function addPropertyToModel( model, newProperty) {
    const dataItem = data.find(item => item.model.toLowerCase() === model.toLowerCase());
    if (dataItem) {
      const newId = dataItem.properties[dataItem.properties.length - 1].id + 1;
      newProperty.id = newId;
      dataItem.properties.push(newProperty);
    } else {
      console.log(`Model ${model} not found`);
    }
  }
  
  // New property to add
  const newProperty = {
    color: "red",
    doors: "2",
    engine: "petrol",
    price: "1200",
    is_electric: "true"
  };
  
  // Add the new property to the "Kia" model
  addPropertyToModel( "Kia", newProperty);
  
//console.log(data)

function updateData(model,propertyId,value){
    const dataItems = data.find(item => item.model.toLowerCase() === model.toLowerCase());
 if(dataItems){
 const findExistingProperty = dataItems.properties.find(item => item.id === propertyId);
 if(findExistingProperty){
  const findExistingPropertyIndex = dataItems.properties.findIndex(item => item.id === propertyId);
  const dataItemIndex = data.findIndex(item => item.model.toLowerCase() === model.toLowerCase());
  data[dataItemIndex].properties[findExistingPropertyIndex] = {id:findExistingProperty.id, ...value}
 }
 }else{
  console.log("no model here")
 }
}

updateData("kia",101,{color:"black",model:2021})

console.log(data[2].properties)

// delete the properties

function deletePropertyById(propertyId) {
  data.forEach(item => {
    const propertyIndex = item.properties.findIndex(property => property.id === propertyId);
 if(propertyIndex !== -1){
  item.properties.splice(propertyIndex , 1)
 }
  });
const propertyExist = data.some(item => item.properties.some(property => property.id === propertyId));
if(!propertyExist){
  console.log("the id is note here")
}

}

deletePropertyById(101)

console.log(data)