
//ASSIGNMENT NAME - FUN WITH ES6. Question 1 
// Submitter : Vipin V Kartha

//Rewritten function 1
let checkLogin = (email,password,allUsers) =>{ //Arrow function

    let isUserFound = false        //block scope using let
    let passwordCorrect = false
    for(currentUser of allUsers)    //for of loop
    {
        console.log(currentUser)
        if(currentUser['email'] == email)
        {
            if(currentUser['password'] == password)
            {
                isUserFound = true
                passwordCorrect = true
                break
            }
            else
            {
                isUserFound = true
                passwordCorrect = false
                break
            }
        }
        else
        {
            isUserFound = false
        }
    }
    if((isUserFound == true )&&(passwordCorrect == true))
    {
        alert('You are logged in')
    }
    else if((isUserFound == true )&&(passwordCorrect == false))
    {
        alert('You have provided incorrect password')
    }
    else
    {
        alert('No user with this email found')
    }
}
//Sample input for testing function
let users = [
    {email:"test",
    pass:"123"
}  ,
{email:"john",
password:"1234"
}  ,
{email:"rahul",
password:"321"
}  ,
{email:"kumar",
password:"890"
}  ,
{email:"prabhu",
pass:"345"
}   
]
//Sample function call
checkLogin("rahul",321,users)

//Rewritten function 2
let bubble_Sort = (a) =>{
    let swapp
    let n = a.length - 1
    console.log(n)
    let x = a
    do
    {
        swapp = false
        for(let i=0;i<n;i++)
        {
            if(x[i] < x[i+1])
            {
                //let temp = x[i]
                //x[i] = x[i+1]
                //x[i+1] = temp
                [x[i],x[i+1]] = [x[i+1],x[i]]    //swapping logic in one statement
                swapp = true
            }
            
        }
        n--
    }while(swapp);
    return x
}

//Sample input and function call
let y = [1,2,17,27,-5,3,6,1,2,9]
console.log("sorted" + bubble_Sort(y))



