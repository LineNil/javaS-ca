const drinkUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const container = document.querySelector(".results");
const errorResult = document.querySelector(".errorResult");
const loaderContainer = document.querySelector(".loader");

async function fetchDrink(){

  try{
    loaderContainer.innerHTML = "Loading...";

    let params = new URLSearchParams(document.location.search);
    const id = params.get(`id`);
  
  
    
    const response = await fetch(`${drinkUrl}${id}`);
  
    const json = await response.json();
  

    const drink = json.drinks[0];

    const newDiv = document.createElement("div");

    const newH1 = document.createElement("h1");
    newH1.textContent = `${drink.strDrink}`;

      const newB = document.createElement("b");
      newB.textContent = `Recommended glass:`;

      const newP = document.createElement("p");
      newP.textContent = `${drink.strGlass}`;

      const newB2 = document.createElement("b");
      newB2.textContent = `Ingredients:`;

      const newP2 = document.createElement("p");
      newP2.textContent = `Subscribe for ingredients`;

      const newB3 = document.createElement("b");
      newB3.textContent = `Instructions:`;

      const newP3 = document.createElement("p");
      newP3.textContent = `${drink.strInstructions}`;

      const newB4 = document.createElement("b");
      newB4.textContent = `Instructions (Italian):`;

      const newP4 = document.createElement("p");
      newP4.textContent = `${drink.strInstructionsIT}`;






      newDiv.appendChild(newH1);
      newDiv.appendChild(newB);
      newDiv.appendChild(newP)
      newDiv.appendChild(newB2);
      newDiv.appendChild(newP2);      
      newDiv.appendChild(newB3);      
      newDiv.appendChild(newP3);
      newDiv.appendChild(newB4);
      newDiv.appendChild(newP4);

      container.appendChild(newDiv);
    }
  
  
  catch(error) {
    errorResult.innerHTML = `An error has occurred, sorry for the inconvenience ${error}`
  }
  finally{
    loaderContainer.innerHTML = "";
  }
}

  fetchDrink();