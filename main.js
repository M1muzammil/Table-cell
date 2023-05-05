
    function tablecell()
{
    var value1  = document.querySelector("#value1").value
value1= Number(value1)         


var value2 = document.querySelector("#value2").value
value2= Number(value2)
 var result= ""


for (var i = 1;  i <= value2 ; i++ ) {
     result +=(  value1 +  "x"  + i +   " ="  + value1*i + "</br>"  )


}

document.querySelector("#result" ).innerHTML  += result
}
// for (var i = 1;  i <= 10 ; i++) {
// Console.log ( table + "×" +i+  " ="  + i*table)
// }

