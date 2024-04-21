class Chief {
  constructor(secretRecipe) {
    this._secretRecipe = secretRecipe;
  }
  getRecipe() {
    return this._secretRecipe;
  }
  setRecipe(recipe) {
    this._secretRecipe = recipe;
  }
}

let recipe = new Chief("Cocacola Recipe!");
recipe.setRecipe("!Cocacola Recipe v2");
console.log(recipe.getRecipe());
