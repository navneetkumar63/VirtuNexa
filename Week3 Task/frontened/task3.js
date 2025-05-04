document.getElementById('recipeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('recipeName').value;
    const description = document.getElementById('recipeDescription').value;
    const category = document.getElementById('recipeCategory').value;

    if (name && description && category) {
        const recipe = { name, description, category };
        displayRecipe(recipe);
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

function displayRecipe(recipe) {
    const recipeList = document.getElementById('recipeList');
    const recipeItem = document.createElement('div');
    recipeItem.innerHTML = `<h3>${recipe.name}</h3><p>${recipe.description}</p><p><strong>Category:</strong> ${recipe.category}</p>`;
    recipeList.appendChild(recipeItem);
}
