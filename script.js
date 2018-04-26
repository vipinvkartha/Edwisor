//alert("hello world")
var marksObtained = window.prompt("Enter marks")
var isTopper = false
var totalMarks = 100
if((marksObtained == null) || (marksObtained == ' ') || (marksObtained == undefined))
{
    alert("Invalid")
}
else if((marksObtained<0) || (marksObtained > 100))
    alert("Range invalid")
else if(isNaN(marksObtained))
    alert("Not number")
else
{
    marksObtained = Number(marksObtained)
    var percent = marksObtained/totalMarks * 100
    if(percent >= 90)
        alert(true)
    else
        alert(false)
}