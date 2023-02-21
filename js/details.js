const drinkUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const container = document.querySelector(".results");
const errorResult = document.querySelector(".errorResult");
const spinnerContainer = document.querySelector(".spinner");

async function fetchDrink(){

  try{
    spinnerContainer.innerHTML = "Loading...";

    let params = new URLSearchParams(document.location.search);
    const id = params.get(`id`);
  
  
    
    const response = await fetch(`${drinkUrl}${id}`);
  
    const json = await response.json();
  
    console.log(json)
    container.innerHTML = `<h1>${json.drinks[0].strDrink}</h1>
                           <b>Recommended glass:</b>
                           <p>${json.drinks[0].strGlass}</p>  
                           <b>Ingredients:</b>
                           <p>Subscribe for ingredients</p>
                           <b>Instructions:</b>
                           <p>${json.drinks[0].strInstructions}</p>
                           <b>Instructions (Italian):</b>
                           <p>${json.drinks[0].strInstructionsIT}</p>`;
  
  }
  catch(error) {
    errorResult.innerHTML = `An error has occurred, sorry for the inconvenience ${error}`
  }
  finally{
    spinnerContainer.innerHTML = "";
  }
}

  fetchDrink();