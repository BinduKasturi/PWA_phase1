function getData(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
    callback(xhr.responseText);
   }
  }
  xhr.send(null);
}
getData("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
  career(data.carrier);
  edu(data.education);
  skill(data.skills);
})

var P=document.querySelector(".P");
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function profile(pro){
  var image=document.createElement("img");
  image.src=pro.img;
  left.appendChild(image);
  var x=document.createElement("h1");
  x.textContent=pro.name;
  left.appendChild(x);
  var x=document.createElement("hr");
  left.appendChild(x);
  var x=document.createElement("p");
  x.textContent=pro.email;
  left.appendChild(x);
  var x=document.createElement("h4");
  x.textContent=pro.rollno;
  left.appendChild(x);
  P.appendChild(left);
}
function career(pro) {
  var x=document.createElement("h1");
  x.textContent="Career Objective";
  right.appendChild(x);
  var x=document.createElement("hr");
  right.appendChild(x);
  var x=document.createElement("h4");
  x.textContent=pro.inf;
  right.appendChild(x);
  P.appendChild(right);
}
function edu(pro) {
  var x=document.createElement("h1");
  x.textContent="Education";
  right.appendChild(x);
  var x=document.createElement("hr");
  right.appendChild(x);
  var table=document.createElement("table");
  table.border=2;
  let row='';
  let field="<tr>"+"<td>"+"sNo"+"</th>"
  +"<th>"+"program"+"</th>"
  +"<th>"+"institution"+"</th>"
  +"<th>"+"Y_O_P"+"</th>"
  +"<th>"+"percentage"+"</th>"
  +"</tr>";
  for (var i in pro) {
    row+="<tr>"+"<td>"+pro[i].sNo+"</td>"
    +"<td>"+pro[i].program+"</td>"
    +"<td>"+pro[i].institution+"</td>"
    +"<td>"+pro[i].Y_O_P+"</td>"
    +"<td>"+pro[i].percentage+"</td>"
    +"</tr>";
  }
  table.innerHTML=field+row;
  right.appendChild(table);
  P.appendChild(right);
  // var table=document.createElement("table");
  // var tr=document.createElement("tr");
  // var th=document.createElement("th");
  // table.appendChild(tr);
  // tr.appendChild(th);
  // var x=document.createElement("h3");
  // x.textContent="sNo";
  // th.appendChild(x);
  // var x=document.createElement("h3");
  // x.textContent="program";
  // th.appendChild(x);
  // var x=document.createElement("h3");
  // x.textContent="institution";
  // th.appendChild(x);
  // right.appendChild(table);
  // for (var i = 0; i < pro.length; i++) {
  //   var x=document.createElement("h5");
  //   x.textContent=pro[i].sNo;
  //   right.appendChild(x);
  //   var x=document.createElement("h5");
  //   x.textContent=pro[i].program;
  //   right.appendChild(x);
  //   var x=document.createElement("h5");
  //   x.textContent=pro[i].institution;
  //   right.appendChild(x);
  //   var x=document.createElement("h5");
  //   x.textContent=pro[i].Y_O_P;
  //   right.appendChild(x);
  // }
}
function skill(pro) {
  var x=document.createElement("h1");
  x.textContent="Skills";
  right.appendChild(x);
  var x=document.createElement("hr");
  right.appendChild(x);
  for (var i in pro) {
    var li=document.createElement("li");
    li.textContent=pro[i].info;;
    right.appendChild(li);
  }
}
