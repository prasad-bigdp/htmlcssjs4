function test1 (a)
{
		if (a > 50) {
			console.log("success")
		} else {
			console.log("fail")
		}
}
test1(55)
//WAF to check eligibility of vote
function userRole (user)
{
    if (user == "admin")
    {
        console.log("welcome to admin")
    }
    else if (user == "student")
    {
        console.log("welcome to student")
    }
   else if (user == "teacher") {
			console.log("welcome to teacher")
    }
    else
    {
        console.log("Welcome to guest")
    }
}

function test3 (user)
{
    switch (user) {
        case "admin":
            console.log("welcome to admin"); break;
        case "student":
            console.log("welcome to student"); break;
        case "teacher":
            console.log("welcome to teacher"); break;
        default:
            console.log("welcome to guest"); break;
		}
}
test3("admin")