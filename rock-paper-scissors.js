//rock = 1;
//paper = 2;
//scissors = 3;

alert("Enter R,P,S");
var userscore = 0;
var cpuscore = 0;
for(var i =0; i <=10;i++)
{
    var user = prompt("R"|"P"|"S");
    var cpu = Math.floor(Math.random()*3+1);
    
    if(user=="R" && cpu == 2)
{
    alert("User: Rock");
    alert("CPU:Paper");
    alert("User lost : Paper beat rock");
    cpuscore++;
    alert("Userscore: "+ userscore+ " Cpuscore: " + cpuscore);
}
else if(user == "R" && cpu == 3)
{
    alert("User: Rock");
    alert("CPU:Scissors");
    alert("User wins: Rock beats scissors");
    userscore++;
    alert("Userscore: "+ userscore+ " Cpuscore: " + cpuscore);
}
else if(user == "R" && cpu == 1)
{
    alert("User: Rock");
    alert("CPU: Rock");
    alert("Tie");
    alert("Userscore: "+ userscore+ " Cpuscore: " + cpuscore);
}
else if(user=="P" && cpu == 3)
{
    alert("User: Paper");
    alert("CPU:Scissors");
    alert("User lost : Scissors beat paper");
    cpuscore++;
    alert("Userscore: "+ userscore+ " Cpuscore: " + cpuscore);
}
else if(user == "P" && cpu == 1)
{
    alert("User: Paper");
    alert("CPU: Rock");
    alert("User wins: Paper beats rock");
    userscore++;
    alert("Userscore: "+ userscore+ " Cpuscore: " + cpuscore);
}
else if(user == "P" && cpu == 2)
{
    alert("User: Paper");
    alert("CPU:Paper");
    alert("Tie");
    alert("Userscore: "+ userscore+ " Cpuscore: " + cpuscore);
}
else if(user=="S" && cpu == 1)
{
    alert("User: Scissors");
    alert("CPU: Rock");
    alert("User lost : Rock beat scissors");
    cpuscore++;
    alert("Userscore: "+ userscore+ " Cpuscore: " + cpuscore);
}
else if(user == "S" && cpu == 2)
{
    alert("User: Scissors");
    alert("CPU:Paper");
    alert("User wins: Scissors beats paper");
    userscore++;
    alert("Userscore: "+ userscore+ " Cpuscore: " + cpuscore);
}
else if(user == "S" && cpu == 3)
{
    alert("User: Scissors");
    alert("CPU:Scissors");
    alert("Tie");
    alert("Userscore: "+ userscore+ " Cpuscore: " + cpuscore);
}
}
if(userscore > cpuscore)
{
    alert("User WINS!!! " + " User wins: " + userscore + " CPU wins: " + cpuscore );
}
else if(userscore < cpuscore)
{
    alert("CPU WINS!!!! "+ " User wins: " + userscore + " CPU wins: " + cpuscore);
}
else
{
    alert("TIE!!!! " + " User wins: " + userscore + " CPU wins: " + cpuscore);
}

