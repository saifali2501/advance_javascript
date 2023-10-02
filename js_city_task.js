let dataa = require("./data.json");

let pro = require("./product.json");

function cityByState(state) {
  let matchData = dataa.filter((e) => {
    return e?.state_name === state && e.population > 163716;
  });

  let filterCity=matchData.map((e) => {
    return e.city;  
  });
  console.log("filterCity:", filterCity)

  
 
}
// let cityOfAP = cityByState("Delhi");
// console.log("cityOfAP:", cityOfAP);
cityByState("Delhi")
// console.log(" citylist:", citylist)

// let filterPopu = citylist.filter()