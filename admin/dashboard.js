const API="YOUR_WEB_APP_URL";

async function loadDashboard(){

const response=await fetch(API,{

method:"POST",

body:JSON.stringify({

action:"dashboard"

})

});

const data=await response.json();

document.getElementById("reviews").innerHTML=data.totalReviews;

document.getElementById("businesses").innerHTML=data.totalBusinesses;

loadChart(data);

}

function loadChart(data){

const ctx=document.getElementById("reviewChart");

new Chart(ctx,{

type:"bar",

data:{

labels:["Reviews","Businesses"],

datasets:[{

label:"Statistics",

data:[

data.totalReviews,

data.totalBusinesses

]

}]

}

});

}

loadDashboard();