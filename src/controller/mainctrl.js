angular
.module('myapp')
.controller("mainctrl",['appservice','myfav','myconst','$log','message',function(appservice,myfav,myconst,$log,message){
    var vm =this;
    vm.name="im ctrl"
    console.log("im ctrl")
  
    console.log(myconst)
    console.log(myconst.NAME)

    console.log($log)

    console.log(message)
  
}])