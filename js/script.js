const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=v";


const resultsContainer = document.querySelector(".results");
const errorResult = document.querySelector(".errorResult");
const spinnerContainer = document.querySelector(".spinner");


async function makeApiCall() {
  try{
     
    spinnerContainer.innerHTML = "Loading...";
  
    const response = await fetch(url);

    const results = await response.json();

    const  drinksList = results.drinks;
    

  drinksList.forEach((drink) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("card");

    const newLink = document.createElement("a");
    newLink.classList.add("drinkName");
    newLink.href = `/details.html?id=${drink.idDrink}`;
    newLink.textContent = drink.strDrink;

    const newP = document.createElement("p");
    newP.textContent = `Category: ${drink.strCategory}`;

    const newP2 = document.createElement("p");
    newP2.textContent = drink.strAlcoholic;

    const newImg = document.createElement("img");
    newImg.classList.add("cardImage");
    newImg.src = drink.strDrinkThumb;
    newImg.alt = drink.strDrink;


    newDiv.appendChild(newLink);
    newDiv.appendChild(newP);
    newDiv.appendChild(newP2);
    newDiv.appendChild(newImg);

    resultsContainer.appendChild(newDiv);
  });

  }catch (error){
    errorResult.innerHTML = "An error has occurred! Sorry for the inconvenience.";
  }   
  finally {
  
    spinnerContainer.innerHTML = "";
  }
}

makeApiCall();