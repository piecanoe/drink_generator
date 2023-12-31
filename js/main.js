document.querySelector('button').addEventListener('click', getDrink)
document.querySelector('#ingredient-section').style.display = "none";
document.querySelector('#recipe-section').style.display = "none";
document.querySelector('#measure-section').style.display = "none";
document.querySelector('#full-drink').style.display = "none";

function getDrink() {

    let drink = document.querySelector('button').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)
      document.querySelector('#drink').innerText = data.drinks[Math.floor(Math.random() * data.drinks.length)].strDrink
      document.querySelector('#ingredient1').innerText = data.drinks[Math.floor(Math.random() * data.drinks.length)].strIngredient1
      document.querySelector('#ingredient2').innerText = data.drinks[Math.floor(Math.random() * data.drinks.length)].strIngredient2
      document.querySelector('#ingredient3').innerText = data.drinks[Math.floor(Math.random() * data.drinks.length)].strIngredient3
      document.querySelector('#ingredient4').innerText = data.drinks[Math.floor(Math.random() * data.drinks.length)].strIngredient4
      document.querySelector('#ingredient5').innerText = data.drinks[Math.floor(Math.random() * data.drinks.length)].strIngredient5
      document.querySelector('#ingredient6').innerText = data.drinks[Math.floor(Math.random() * data.drinks.length)].strIngredient6
      document.querySelector('#ingredient7').innerText = data.drinks[Math.floor(Math.random() * data.drinks.length)].strIngredient7
      document.querySelector('#ingredient8').innerText = data.drinks[Math.floor(Math.random() * data.drinks.length)].strIngredient8
      document.querySelector('#measure1').innerText = data.drinks[Math.floor(Math.random() * data.drinks.length)].strMeasure1
      document.querySelector('#measure2').innerText = data.drinks[Math.floor(Math.random() * data.drinks.length)].strMeasure2
      document.querySelector('#measure3').innerText = data.drinks[Math.floor(Math.random() * data.drinks.length)].strMeasure3
      document.querySelector('#measure4').innerText = data.drinks[Math.floor(Math.random() * data.drinks.length)].strMeasure4
      document.querySelector('#measure5').innerText = data.drinks[Math.floor(Math.random() * data.drinks.length)].strMeasure5
      document.querySelector('#measure6').innerText = data.drinks[Math.floor(Math.random() * data.drinks.length)].strMeasure6
      document.querySelector('#measure7').innerText = data.drinks[Math.floor(Math.random() * data.drinks.length)].strMeasure7
      document.querySelector('#measure8').innerText = data.drinks[Math.floor(Math.random() * data.drinks.length)].strMeasure8
      document.querySelector('img').src = data.drinks[Math.floor(Math.random() * data.drinks.length)].strDrinkThumb
      document.querySelector('#recipe').innerText = data.drinks[Math.floor(Math.random() * data.drinks.length)].strInstructions
    
      document.querySelector('#ingredient-section').style.display = "block";
      document.querySelector('#recipe-section').style.display = "block";
      document.querySelector('#measure-section').style.display = "block";
      document.querySelector('#full-drink').style.display = "flex";
    })


    .catch(err => {
        console.log(`error ${err}`)
    });
}