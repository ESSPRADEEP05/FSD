// // var a=10;
// // // document.write(a);
// var b = "Hi, This is me,I,m";
// // document.write(b+"\t"+a);
// // var c="its not me";
// // document.write(c);
// c+= "its me";
// document.write(c);
// document.write(c);
//
var name1 = "pradeep";
// name1 += "\t" + "ganesh";
// name1 += "&sivaram";
// document.write(name1);
// document.write(b.length + "<br>");
// var d = 2;
// document.write(d);
// console.log(2 + 0.22);
// alert("see in console also");
// window.alert("see");
// var e = true;
// document.write(e);
// var name2 = [10, "ess", 20.45, true];

// document.write(name2);
// //object
// // var trainee={
// // 'name':'pradeep'
// // }
// var trainee =
// {
//     'name': 'pradeep',
//     'rollno': '21A91A05D1',
//     'college': 'AEC',
//     'branch': 'CSE'
// }

// console.log(trainee.name+"\n"+trainee.rollno+"\n"+trainee.college+"\n"+trainee.branch);
var obj_name = [{
    'name': 'pradeep',
    'rollno': '21A91A05D1',
    'college': 'AEC',
    'branch': 'CSE'
},
{
    'name': 'sivaram',
    'rollno': '21A91A05J7',
    'college': 'AEC',
    'branch': 'CSE'
},
{
    'name': 'ganesh',
    'rollno': '21A91A05D4',
    'college': 'AEC',
    'branch': 'CSE'
}]
for (var i = 0; i < obj_name.length; i++) {
    // console.log(obj_name[i].name+"\n"+obj_name[i].rollno+"\n"+obj_name[i].college+"\n"+obj_name[i].branch);
    for(var key in obj_name[i])
    {
        document.write(obj_name[i][key]+" ");
        document.write("\n");
    }
    document.write("<br>");
}
for( var key for obj_name[i])
{
    document.write()
}
