const data = [
    {
      "user_id": "583c3ac3f38e84297c002546",
      "email": "test@test.com",
      "name": "test@test.com",
      "given_name": "Hello",
      "family_name": "Test",
      "nickname": "test",
      "last_ip": "94.121.163.63",
      "logins_count": 15,
      "created_at": "2016-11-28T14:10:11.338Z",
      "updated_at": "2016-12-02T01:17:29.310Z",
      "last_login": "2016-12-02T01:17:29.310Z",
      "email_verified": true
    }
  ]
// add data
  function addEmployData(addData){
const checkData = data.findIndex(item => item.user_id === addData.user_id && item.email === addData.email)
if(checkData === -1){
    data.push(addData)
}else{
    console.log(`user-Id not her ${addData.user_id} `)
}
  }

const dta = {
    "user_id": "583c3ac3f38e84297c002546",
    "email": "test@test.com",
    "given_name": "Hello",
    "family_name": "Test",
    "nickname": "test",
    "last_ip": "94.121.163.63",
    "logins_count": 15,
    "created_at": "2016-11-28T14:10:11.338Z",
    "updated_at": "2016-12-02T01:17:29.310Z",
    "last_login": "2016-12-02T01:17:29.310Z",
    "email_verified": true
}

//console.log(addEmployData(dta))

//console.log(data)

// update data

function upDateData(user_id,email,emdata){
  const index = data.findIndex(item=> item.user_id == user_id && item.email == email);
  if(index !== -1){
    data[index] = {...data[index],...emdata}
  }else{
    console.log(`not found id ${user_id} and email ${email} not here`)
  }

}

// updating data

const updating ={
  given_name : "jackSparrow",
  family_name:"sparrow"
}
console.log(upDateData("583c3ac3f38e84297c002546","test@test.com",updating))

//console.log(data)

// deleting data

function deleteData(id,email,deletingData){
  const index = data.findIndex(item=> item.user_id == id);
  if(index !== -1){
    data.splice(index,1)
  }else{
    console.log(`not found id ${id} and email ${email} not here`)
  }
}

console.log(deleteData( "583c3ac3f38e84297c002546"),"test@test.com")

console.log(data)