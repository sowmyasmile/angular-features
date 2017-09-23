angular
.module("myapp")
.filter("search",function(){
  return function(){
      var name="sowmya"
      console.log("im custom filter")
      return name
  }
})