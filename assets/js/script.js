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
var historyCont = document.querySelector("#historyContent");

var underagePg = document.querySelector("#underagePg");

var historyA = [];
var storedHistory = [];
var resultsName = [];
var resultsIng = [];

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
    historyCont.style.display = "none";
}

function displayAgeCheck(){
    ageCheckPg.style.display = "block";
    beginPg.style.display = "none";
    musicPg.style.display = "none";
}

function displayAlcChoice(){
    alcChoicePg.style.display = "block";
    historyPg.style.display = "block";
    ageCheckPg.style.display = "none";

    vodkaBtn.onclick = function(event){
        displayLoading("Vodka");
    };
    rumBtn.onclick = function(event){
        displayLoading("Rum");
    };
    ginBtn.onclick = function(event){
        displayLoading("Gin");
    };
    teqBtn.onclick = function(event){
        displayLoading("Tequila");
    };
    whisBtn.onclick = function(event){
        displayLoading("Whiskey");
    };
    bourBtn.onclick = function(event){
        displayLoading("Bourbon");
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

    getDrinks(alcohol);

    alcType.textContent = alcohol;
    //search for drinks with alcohol

    drink1Btn.textContent = resultsName.drinks[0].strDrink;
    drink2Btn.textContent = resultsName.drinks[1].strDrink;
    drink3Btn.textContent = resultsName.drinks[2].strDrink;
    drink4Btn.textContent = resultsName.drinks[3].strDrink;
    drink5Btn.textContent = resultsName.drinks[4].strDrink;
    drink6Btn.textContent = resultsName.drinks[5].strDrink;
    drink7Btn.textContent = resultsName.drinks[6].strDrink;
    drink8Btn.textContent = resultsName.drinks[7].strDrink;

    drink1Btn.onclick = function(event){
        displayIng(resultsName.drinks[0].idDrink);
        saveDrink(resultsName.drinks[0].idDrink);
    };
    drink2Btn.onclick = function(event){
        displayIng(resultsName.drinks[1].idDrink);
        saveDrink(resultsName.drinks[1].idDrink);
    };
    drink3Btn.onclick = function(event){
        displayIng(resultsName.drinks[2].idDrink);
        saveDrink(resultsName.drinks[2].idDrink);
    };
    drink4Btn.onclick = function(event){
        displayIng(resultsName.drinks[3].idDrink);
        saveDrink(resultsName.drinks[3].idDrink);
    };
    drink5Btn.onclick = function(event){
        displayIng(resultsName.drinks[4].idDrink);
        saveDrink(resultsName.drinks[4].idDrink);
    };
    drink6Btn.onclick = function(event){
        displayIng(resultsName.drinks[5].idDrink);
        saveDrink(resultsName.drinks[5].idDrink);
    };
    drink7Btn.onclick = function(event){
        displayIng(resultsName.drinks[6].idDrink);
        saveDrink(resultsName.drinks[6].idDrink);
    };
    drink8Btn.onclick = function(event){
        displayIng(resultsName.drinks[7].idDrink);
        saveDrink(resultsName.drinks[7].idDrink);
    };
    historyBtn.onclick = function(event){
        displayHistory();
    };

}

function displayIng(id){
    ingPg.style.display = "block";
    listPg.style.display = "none";

    searchIng(id);

    }

function disIng(cocktail){
    //search for ingredients and directions with id
    var ingredients = [cocktail.drinks[0].strIngredient1, cocktail.drinks[0].strIngredient2, cocktail.drinks[0].strIngredient3, cocktail.drinks[0].strIngredient4, cocktail.drinks[0].strIngredient5,
    cocktail.drinks[0].strIngredient6, cocktail.drinks[0].strIngredient7, cocktail.drinks[0].strIngredient8, cocktail.drinks[0].strIngredient9, cocktail.drinks[0].strIngredient10, 
    cocktail.drinks[0].strIngredient11, cocktail.drinks[0].strIngredient12, cocktail.drinks[0].strIngredient13, cocktail.drinks[0].strIngredient14, cocktail.drinks[0].strIngredient15];

     console.log(ingredients);

    var dire = cocktail.drinks[0].strInstructions; 
    var directions = dire.split(".");

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

function getDrinks(alcohol){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+alcohol)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        resultsName = data;
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

function searchIng(id){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+id.toString())
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        disIng(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

beginBtn.addEventListener("click", displayAgeCheck)

olderBtn.addEventListener("click", displayAlcChoice)

youngerBtn.addEventListener("click", displayUnderage)

clearSBBtn.addEventListener("click", function(){
    localStorage.clear();
    historyA.innerHTML = "";
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  }); 
  
start();
