 const data = [
        {
          "model": "Nissan",
          "code": "1",
          "id": "12",
          "properties": {"color": "red", "doors": "4", "engine": "best", "price": "500", "is_electric": "false"}
        },
        {
          "model": "Tesla",
          "code": "2",
          "id": "13",
          "properties": {"color": "grey", "doors": "4", "engine": "best", "price": "800", "is_electric": "true"}
        },
        {
          "model": "Kia",
          "code": "3",
          "id": "14",
          "properties": [{"color": "green", "doors": "4", "engine": "diesel", "price": "900", "is_electric": "false"},
            {"color": "green", "doors": "4", "engine": "diesel", "price": "900", "is_electric": "false"}
          ]
        }
    ]
  
// update car properties


function updateProperty(model, property, value) {
  const findProperty = data.findIndex(car => car.model === model);
  if (findProperty !== -1) {
    data[findProperty].properties[property] = value;
  }else{
    console.log("the car model is not here")
  }
}

updateProperty("Kia","color","red")

// add car properties

function addProduct(model,property){
  const findingProperty = data.findIndex(item => item.model === model);
  if(findingProperty !== -1){
   // data[findingProperty].properties[property] = value;
    data[findingProperty].properties = {...data[findingProperty].properties, ...property}
  }else{
    console.log("the car model is not here...")
  }
}
addProduct("Kia",{automatic:"yes",speed:"120kmph"})
console.log(data)
// delete carproperties

function deleteProperty(model,property){
  const findingData = data.findIndex(item => item.model === model);
  if(findingData !== -1 && data[findingData].properties[property]){

  delete data[findingData].properties[property]
  }else{
  console.log("the car model is not here")
  }
};
deleteProperty('Kia','color')

