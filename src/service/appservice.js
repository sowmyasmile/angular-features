angular
.module("myapp")
.service("appservice",[function(){
    this.myservice ="my service"
    console.log("im service")
    //console.log(this)
}])