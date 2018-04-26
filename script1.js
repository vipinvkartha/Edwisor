var users = [
    {
        "name":"vipin",
        "pass":"test"
    },
    {
        "name":"john",
        "pass":"123"
    },
    {
        "name":"lasar",
        "pass":"kuttu"
    }
    ]
var checkLogin = function(name,passs,users){
    var isUser = false , isPass = false
    for(user in users)
    {
        if(users[user]["name"] == name)
        {
            isUser = true
            if(users[user]["pass"] == passs)
            {
                isPass = true
                break
            }
            else
            {
                isPass = false
                break
            }
        }
    }
    if((isUser == true) && (isPass == true))
    {
        alert("You are logged in")

    }
    else if((isUser == true) && (isPass == false))
    {
        alert("Password wrong")
    }
    else
    {
        alert("no User")
    }
}
var nam = prompt("Name")
var pa = prompt("pass")
checkLogin(nam,pa,users)
