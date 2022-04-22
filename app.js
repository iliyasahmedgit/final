var text = '';
function findMeal (){
    text = document.getElementById('meal-search').value;
    connectMeal(text)
    document.getElementById('meal-search').value = '';
}


function connectMeal (text) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
    .then(res=> res.json() )
    .then(data=> loadMeal(data));

}

connectMeal();

function loadMeal (data){

  console.table(data.meals[0]);

  var container = document.getElementById('main-container');
  var idm = data.meals[0].idMeal;
     var imgLink = data.meals[0].strMealThumb;
     var cat = data.meals[0].strCategory;
     var title = data.meals[0].strMeal;
    var area = data.meals[0].strArea;
    var ins = data.meals[0].strIngredient1 ;
    var ins2 = data.meals[0].strIngredient2 ;
    var ins3 = data.meals[0].strIngredient3 ;
    var ins4 = data.meals[0].strIngredient4 ;
    var inst = data.meals[0].strInstructions;
    
  
     container.innerHTML = `
                        <p> <b> ID: ${idm}</b> </p>
                        <p><b> Meal Name:  ${title} </b></p>
                         <img width="300px" src="${imgLink}" <br/> <br> <br>
                         <p> <b> Category: ${cat}</b> </p>
                         <p> <b> Area: ${area}</b>
                         <p> <b>Ingredients :<br> 
                         1. ${ins} <br>
                         2. ${ins2} <br>
                         3. ${ins3} <br>
                         4. ${ins4}</b>
                         <p> <b> Cooking Instructions: ${inst}</b> </p>
                         <button class="btn rounded text-light bg-primary" onclick="moreDetails()">SHOW ALL</button>
                        `;

   
    
    

}
   function moreDetails() {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
    .then(res=>res.json() )
    .then(data=>loadDetails(data) );
}

function loadDetails(data){
    console.table(data.meals[0]);

    var newDiv = document.getElementById('main-container2');
    var idm2 = data.meals[0].idMeal;
     var imgLink2 = data.meals[0].strMealThumb;
     var cat2 = data.meals[0].strCategory;
     var title2 = data.meals[0].strMeal;
    var area2 = data.meals[0].strArea;
    var ins2 = data.meals[0].strIngredient1 ;
    var ins22 = data.meals[0].strIngredient2 ;
    var ins32 = data.meals[0].strIngredient3 ;
    var ins42 = data.meals[0].strIngredient4 ;
    var inst2 = data.meals[0].strInstructions;

    for (var a=0; a<data.meals.length; a++){

     
        newDiv.innerHTML = `<p> <b> ID: ${idm2}</b> </p>
        <p><b> Meal Name:  ${title} </b></p>
         <img width="300px" src="${imgLink2}" <br/> <br> <br>
         <p> <b> Category: ${cat2}</b> </p>
         <p> <b> Area: ${area2}</b>
         <p> <b>Ingredients :<br> 
         1. ${ins2} <br>
         2. ${ins22} <br>
         3. ${ins32} <br>
         4. ${ins42}</b>
         <p> <b> Cooking Instructions: ${inst2}</b> </p>
                             `;
    
         
       
        
    }
    

   
    
    
    }
    
