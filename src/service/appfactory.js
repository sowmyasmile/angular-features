angular
.module("myapp")
.factory("myfav",[function(){
    console.log("im factory")
    function printname(){

    }
    return {
        printname:printname
    }
}])