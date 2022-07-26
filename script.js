function addnewWEField(){
    console.log("Adding new field");

let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("wefield");
newNode.setAttribute("placeholder", "Enter here");

let weOb = document.getElementById("we");
let weAddButtonOb = document.getElementById("weAddButton");

weOb.insertBefore(newNode, weAddButtonOb);
}


function addnewAQField(){
    console.log("adding new field");

let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("aqfield");
newNode.setAttribute("placeholder", "Enter here");

let aqOb = document.getElementById("aq");
let aqAddButtonOb = document.getElementById("aqAddButton");

aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addnewAcField(){
    console.log("adding new field");

let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("AField");
newNode.setAttribute("placeholder", "Enter here");

let AcOb = document.getElementById("Ac");
let AcAddButtonOb = document.getElementById("AcAddButton");

AcOb.insertBefore(newNode, AcAddButtonOb);
}

function addnewPField(){
    console.log("adding new field");

let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("pfield");
newNode.setAttribute("placeholder", "Enter here");
    
let pOb = document.getElementById("p");
let pAddButtonOb = document.getElementById("pAddButton");
    
pOb.insertBefore(newNode, pAddButtonOb);  
}

function addnewSField(){
    console.log("adding new field");

let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("skillfield");
newNode.setAttribute("placeholder", "Enter here");
    
let sOb = document.getElementById("s");
let sAddButtonOb = document.getElementById("sAddButton");
    
sOb.insertBefore(newNode, sAddButtonOb);  
}

//generating cv
function generateCV(){


    // console.log("generating CV");

    let namefield=document.getElementById('namefield').value;
    let nameT=document.getElementById('nameT');
    nameT.innerHTML = namefield;

    

    
    document.getElementById("contactT").innerHTML = document.getElementById("contactfield").value;
    document.getElementById("webT").innerHTML = document.getElementById("positionfield").value;
    document.getElementById("ldT").innerHTML = document.getElementById("linkfield").value;
    document.getElementById("ghT").innerHTML = document.getElementById("Gitfield").value;
    document.getElementById("emT").innerHTML = document.getElementById("emailfield").value;
    document.getElementById("objectiveT").innerHTML = document.getElementById("obfield").value;

    let we= document.getElementsByClassName("wefield");
    let str="";
  
    for(let e of we){
     str = str + `<li> ${e.value} </li>`;
    }
   
    document.getElementById("weT").innerHTML=str;

    let aq= document.getElementsByClassName("aqfield");
    let str1="";
  
    for(let e of aq){
     str1 = str1 + `<li> ${e.value} </li>`;
    }
   
    document.getElementById("aqT").innerHTML=str1;

    let sq= document.getElementsByClassName("skillfield");
    let str2="";
  
    for(let e of sq){
     str2 = str2 + `<li> ${e.value} </li>`;
    }
   
    document.getElementById("skillT").innerHTML=str2;


    let pr= document.getElementsByClassName("pfield");
    let str3="";
  
    for(let e of pr){
     str3 = str3 + `<li> ${e.value} </li>`;
    }
   
    document.getElementById("pT").innerHTML=str3;

   
   
    let ac= document.getElementsByClassName("AField");
    let str4="";
  
    for(let e of ac){
     str4 = str4 + `<li> ${e.value} </li>`;
    }
   
    document.getElementById("acT").innerHTML=str4;


    let file= document.getElementById("imgfield").files[0];
    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
 
    // set the profile to templete
    reader.onloadend= function(){
        document.getElementById("imgTemplate").src=reader.result;
    }

  
    

  document.getElementById("carousel-1").style.display="none";
  document.getElementById("footer").style.display="none";
  document.getElementById("Heading").style.display="none";
  document.getElementById("cv-form").style.display="none";

  document.getElementById("cv-template").style.display="block";
}



//print resume

function printCV(){
      window.print();
      document.getElementsByClassName("btn").style.display="none";
}