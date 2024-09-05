
function fun1(argFun1,argFun2,callback){
    setTimeout(() =>{
        console.log("-----fun1");
        callback(argFun1,argFun2)
    },[2000])
    
}
function fun2(callback1,argFun2){
    setTimeout(() =>{
        console.log("----------fun2");
        callback1(argFun2)
    },[4000])
    
}
function fun3(callback2) {
    setTimeout(() =>{
        console.log("----------fun2oj");
        callback2()
    },[4000])
  
}
function fun4() {
    console.log("----------fun4");
  
}
fun1(fun3,fun4,fun2)

