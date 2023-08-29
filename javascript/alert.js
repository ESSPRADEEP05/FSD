alert("this is alert");
// a return is required for confirm
 var c=confirm("Do you want to continue?");
if(c==true)
{
    var d=prompt("great to have you here!!\n can you please provide your name");
    // d.length or !=null can be used....
    if(d.length>0)
    {
        alert("thank you "+d);
    }

}
else
{
    prompt("its bad you are not continuing with us!!!");
}
//eval(t) --> when only one input is given
var t=prompt("enter the first value");
var h=prompt("enter the second value");
//parseInt converts that string to integer
document.write(parseInt(t)+parseInt(h)+"\n");
//3 kind of declaring the variables
// var -->global variables -- used any where in the page 
// let -->block  level or local scope variables declared inside particular -- redeclaration is not possible but reinitialisation is possible
// const-->no redeclaration or reinitialisation possible
{                 //can be used inside brackets without any name for the block      
var a=10;
document.write("var is"+a+"\n");
let b=20;
}
//let b=30;//wrong --redeclaration is not possible
b=30;//correct -- reinitialisation is possible
document.write("let is"+b+"\n");
const pi=3.14;
// const pi=3.15;//wrong
//pi=3;//wrong as well
document.write("const is:"+pi);
