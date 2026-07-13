const modal=document.getElementById("projectModal");

const close=document.querySelector(".close");

function openProject(title,desc,image,github,demo){

document.getElementById("modalTitle").innerHTML=title;

document.getElementById("modalDesc").innerHTML=desc;

document.getElementById("modalImage").src=image;

document.getElementById("githubLink").href=github;

document.getElementById("demoLink").href=demo;

modal.style.display="flex";

}

close.onclick=function(){

modal.style.display="none";

}

window.onclick=function(e){

if(e.target==modal){

modal.style.display="none";

}

}