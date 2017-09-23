angular
.module("myapp")
.config(['$logProvider',function($logProvider){
    console.log("im config phase")
    console.log($logProvider)
    $logProvider.debugEnabled(false)
}])

.run(['$log',function($log){
    console.log("im run phase")
    console.log("existing servics form run phase")
    console.log($log)
}])

.info({
    version:'1.5.6'
})

.value("message", "Hello world!")