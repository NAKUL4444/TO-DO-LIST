
module.exports=getDate;

function getDate(){
var today=new Date();
var options={
weekday:"long",
day:"numeric",
month:"long"
};

var day=today.toLocaleDateString("hi-IN",options);
return day;
}