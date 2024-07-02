async function getpizza() {
  const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
  const data  = await response.json();
  const pizzas = data.recipes;
  console.log(pizzas);

  const result = pizzas.map(function(ele){
  return `
  <div class="pizza">
    <h2>${ele.title}</h2>
    <img src="${ele.image_url}">
    <a href=${ele.source_url}>Click here for more <span>Details...</span></a>
  </div> `;
  }).join('');
  document.querySelector(".pizzas").innerHTML=result;
  }
  getpizza();