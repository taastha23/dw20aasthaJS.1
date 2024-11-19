/*if gender =female print she is female
 if gender =male print he is male
 if gender=other print they are other  */
let gender="other"
if(gender==="female"){
    console.log("she is female")
}
else if(gender==="male")
{console.log("he is male")

}
else{
    console.log("they are other")
}
/* firts condition is place in if, second in else if and last one in else */


/* age  0 to 18   => Underage       if
// age  19 to 60  => Adult   else if
// age  61 to 150=> Old     else if
// else none   else */
let age=60
if(age>=0 && age<=18)
{
    console.log("underage")
}
else if(age>=19 && age<=60)
{
    console.log("adult")
}
else if(age>=61 && age<=150)
{
    console.log("old")}
else{
    console.log("none")
}