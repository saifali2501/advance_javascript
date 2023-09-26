let currentdate= new Date()

let monthname=["jan","feb","mar","april","may","jun","july","augast","sep","octo","nove","dec"]

let x=currentdate.getDate();

let mm=currentdate.getMonth()+1

let yy=currentdate.getFullYear()

let dayy=currentdate.getDay()

console.log(`today date is ${x} ${monthname[mm]} ${yy}`);