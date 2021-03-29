var beginPg = document.querySelector("#beginPg");
var beginBtn = document.querySelector("#beginBtn");

var ageCheckPg = document.querySelector("#ageCheckPg");
var olderBtn = document.querySelector("#olderBtn");
var youngerBtn = document.querySelector("#youngerBtn");

var alcChoicePg = document.querySelector("#alcChoicePg");
var vodkaBtn = document.querySelector("#vodkaBtn");
var rumBtn = document.querySelector("#rumBtn");
var ginBtn = document.querySelector("#ginBtn");
var teqBtn = document.querySelector("#teqBtn");
var whisBtn = document.querySelector("#whisBtn");
var bourBtn = document.querySelector("#bourBtn");

var loadingPg = document.querySelector("#loadingPg");

var listPg = document.querySelector("#listPg");
var alcType = document.querySelector("#alcType");
var drink1Btn = document.querySelector("#drink1Btn");
var drink2Btn = document.querySelector("#drink2Btn");
var drink3Btn = document.querySelector("#drink3Btn");
var drink4Btn = document.querySelector("#drink4Btn");
var drink5Btn = document.querySelector("#drink5Btn");
var drink6Btn = document.querySelector("#drink6Btn");
var drink7Btn = document.querySelector("#drink7Btn");
var drink8Btn = document.querySelector("#drink8Btn");

var ingPg = document.querySelector("#ingPg");
var ingList = document.querySelector("#ingList");
var mixDir = document.querySelector("#mixDir");
var loi = document.querySelector("#loi");
var dir = document.querySelector("#dir");
var enjoyBtn = document.querySelector("#enjoyBtn");

var musicPg = document.querySelector("#musicPg");
var anotherBtn = document.querySelector("#anotherBtn");

var historyPg = document.querySelector("#historyPg");
var historySideNav = document.querySelector("#historySideNav");
var historyBtn = document.querySelector("#historyBtn");
var clearSBBtn = document.querySelector("#clearSBBtn");
var closeSBBtn = document.querySelector("#closeSBBtn");

var underagePg = document.querySelector("#underagePg");

var historyA = [];
var storedHistory = [];
var results = [];

function start(){
    beginPg.style.display = "block";
    ageCheckPg.style.display = "none";
    underagePg.style.display = "none";
    alcChoicePg.style.display = "none";
    loadingPg.style.display = "none";
    listPg.style.display = "none";
    ingPg.style.display = "none";
    musicPg.style.display = "none";
    historyPg.style.display = "none";
}

function displayAgeCheck(){
    ageCheckPg.style.display = "block";
    beginPg.style.display = "none";
}

function displayAlcChoice(){
    alcChoicePg.style.display = "block";
    historyPg.style.display = "block";
    ageCheckPg.style.display = "none";

    vodkaBtn.onclick = function(event){
        displayLoading("vodka");
    };
    rumBtn.onclick = function(event){
        displayLoading("rum");
    };
    ginBtn.onclick = function(event){
        displayLoading("gin");
    };
    teqBtn.onclick = function(event){
        displayLoading("tequila");
    };
    whisBtn.onclick = function(event){
        displayLoading("whiskey");
    };
    bourBtn.onclick = function(event){
        displayLoading("bourbon");
    };
}

function displayUnderage(){
    underagePg.style.display = "block";
    ageCheckPg.style.display = "none";
    var seconds = 10;
    var countdown = setInterval(function() {
        seconds--;
        if (seconds <= 0){
            start();
            clearInterval(countdown);
        }
    }, 1000);
}

function displayLoading(alcohol){
    loadingPg.style.display = "block";
    alcChoicePg.style.display = "none";
    var seconds = 4;
    var countdown = setInterval(function() {
        seconds--;
        if (seconds <= 0){
            displayList(alcohol);
            clearInterval(countdown);
        }
    }, 1000);
}

function displayList(alcohol){
    listPg.style.display = "block";
    loadingPg.style.display = "none";

    alcType.textContent = alcohol;
    //search for drinks with alcohol

    drink1Btn.textConext = results[0];
    drink2Btn.textContent = results[1];
    drink3Btn.textContent = results[2];
    drink4Btn.textContent = results[3];
    drink5Btn.textContent = results[4];
    drink6Btn.textContent = results[5];
    drink7Btn.textContent = results[6];
    drink8Btn.textContent = results[7];

    drink1Btn.onclick = function(event){
        displayIng(event);
    };
    drink2Btn.onclick = function(event){
        displayIng(event);
    };
    drink3Btn.onclick = function(event){
        displayIng(event);
    };
    drink4Btn.onclick = function(event){
        displayIng(event);
    };
    drink5Btn.onclick = function(event){
        displayIng(event);
    };
    drink6Btn.onclick = function(event){
        displayIng(event);
    };
    drink7Btn.onclick = function(event){
        displayIng(event);
    };
    drink8Btn.onclick = function(event){
        displayIng(event);
    };
    historyBtn.onclick = function(event){
        displayHistory();
    };

}

function displayIng(){
    ingPg.style.display = "block";
    listPg.style.display = "none";

    //search for ingredients and directions with id
    var ingredients = [];
    var directions = [];

    for(var i = 0; i < ingredients.length; i++){
        var list = document.createElement("li");
        list.textContent = ingredients[i];
        loi.appendChild(list);
    }
    for(var i = 0; i < directions.length; i++){
        var list = document.createElement("li");
        list.textContent = directions[i];
        dir.appendChild(list);
    }

    enjoyBtn.onclick = function(event){
        displayMusic();
    };
    saveDrink();
}

function displayMusic(){
    musicPg.style.display = "block";
    historyPg.style.display = "block";
    ingPg.style.display = "none";

    //play music

    anotherBtn.onclick = function(event){
        displayAgeCheck();
    };
}

function displayHistory(){

}

function saveDrink(){

}

function getStorage(){

}

beginBtn.addEventListener("click", displayAgeCheck)

olderBtn.addEventListener("click", displayAlcChoice)

youngerBtn.addEventListener("click", displayUnderage)

clearSBBtn.addEventListener("click", function(){
    localStorage.clear();
    historyA.innerHTML = "";
});

historyBtn.addEventListener("click", function(){
    displayHistory();
});

$("#historyBtn").sideNav('show', {
    closeOnClick: true
});
$("#closeSBBtn").sideNav('hide');

start();