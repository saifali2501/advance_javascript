var t=1;
var tahid=setInterval(()=>{
  let i;
    let line =""
    for( i=1;i<=t;i++){
        line+="*"
    }
    console.log("<br>",line);
    t++

    if(t==5){
        clearInterval(tahid)
    }
},1000)
console.log("🚀 ~ tahid ~ =:",tahid)