const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=v";


const resultsContainer = document.querySelector(".results");
const errorResult = document.querySelector(".errorResult");
const spinnerContainer = document.querySelector(".spinner");


async function makeApiCall() {
  try{
    //add spinner 
    spinnerContainer.innerHTML = "Loading...";
  
    const response = await fetch(url);

    const results = await response.json();

    const  drinksList = results.drinks;
    
    console.log(drinksList.strDrink);

  for (let i = 0; i < drinksList.length; i++){
      resultsContainer.innerHTML += `<div class="card">
                                     <a class="drinkName" href="/details.html?id=${drinksList[i].idDrink}">${drinksList[i].strDrink}</a>
                                     <p>Category: ${drinksList[i].strCategory}</p>
                                     <p>${drinksList[i].strAlcoholic}</p>
                                     <img class="cardImage" src="${drinksList[i].strDrinkThumb}" alt="${drinksList[i].strDrink}" />
                                     </div>`
      }
  }catch (error){
    console.log("error occurred", error);
    errorResult.innerHTML = "An error has occurred! Sorry for the inconvenience.";
  }   
  finally {
    //remove spinner
    spinnerContainer.innerHTML = "";
  }
}

  makeApiCall();