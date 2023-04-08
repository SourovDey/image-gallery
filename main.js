let img = document.querySelector(".slide-img");
let bigbody = document.querySelector(".big-img");
let mainimg = document.querySelector(".main-img");
let overlay = document.querySelector(".overlay");


function over(){
    bigbody.classList.toggle("showing-none")
}
function img01(){
    bigbody.classList.toggle("showing-none")
    img.src = "img/img 1.avif";
    mainimg.style.top = "100px"
}
function img02(){
    bigbody.classList.toggle("showing-none")
    img.src = "img/img 2.jpg";
    mainimg.style.top = "100px"
}
function img03(){
    bigbody.classList.toggle("showing-none")
    img.src = "img/img 3.avif";
    mainimg.style.top = "100px"
}

function img04(){
    bigbody.classList.toggle("showing-none")
    img.src = "img/img 4.avif";
    mainimg.style.top = "100px"
}

function img05(){
    bigbody.classList.toggle("showing-none")
    img.src = "img/img 5.jpg";
    mainimg.style.top = "200px"
}

function img06(){
    bigbody.classList.toggle("showing-none")
    img.src = "img/img 6.jpg";
    mainimg.style.top = "200px"
}

function img07(){
    bigbody.classList.toggle("showing-none")
    img.src = "img/img 7.avif";
    mainimg.style.top = "200px"
}

function img08(){
    bigbody.classList.toggle("showing-none")
    img.src = "img/img 8.jpg";
    mainimg.style.top = "200px"
}

function img09(){
    bigbody.classList.toggle("showing-none")
    img.src = "img/img 9.jpg";
    mainimg.style.top = "300px"
}
function img10(){
    bigbody.classList.toggle("showing-none")
    img.src = "img/img 10.jpg";
    mainimg.style.top = "300px"
}

function img11(){
    bigbody.classList.toggle("showing-none")
    img.src = "img/img 11.avif";
    mainimg.style.top = "300px"
}

function img12(){
    bigbody.classList.toggle("showing-none")
    img.src = "img/img 12.jpg";
    mainimg.style.top = "300px"
}


let imges = ["img/img 1.avif","img/img 2.jpg","img/img 3.avif",
            "img/img 4.avif","img/img 5.jpg","img/img 6.jpg",
            "img/img 7.avif","img/img 8.jpg","img/img 9.jpg",
            "img/img 10.jpg","img/img 11.avif","img/img 12.jpg"]

let count = 0;



function next(){
    count++
    if (count >= imges.length){
        count = 0;
        img.src = imges[count];
        
    }
    else{
        img.src = imges[count];

        
    }
}
    


function previous(){
    count--
    if (count < 0){
        count = imges.length - 1;
        img.src = imges[count];
    }
    else{
        img.src = imges[count];
    }
}







