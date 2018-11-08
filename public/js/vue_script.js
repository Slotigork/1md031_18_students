function MenuItem(b_name, kcal, containsGluten, containsLactose, imgurl){
  this.name = b_name;
  this.kcal=kcal;
  this.containsGluten = containsGluten;
  this.containsLactose = containsLactose;
  this.img = imgurl;

  this.returnNameAndCal=function(){
    return this.name + ' contains ' + this.cal + ' kCal';
  }
}
/*
let fireBurger = new MenuItem("Fire Burger", 2050, true, true, 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4409427.jpg' );
let waterBurger = new MenuItem("Water Burger", 574, false, true, 'https://d1q0twczwkl2ie.cloudfront.net/wp-content/uploads/2017/09/colette.jpg' );
let maxBurger = new MenuItem("Max Burger", 300, true, true, "https://i.pinimg.com/originals/0d/d9/6d/0dd96d5718f3fa2a04e853110e757817.jpg" );
let brownBurger = new MenuItem("Brown Burger", 1012, false, false,"https://www.chowstatic.com/assets/recipe_photos/21395_bison_mushroom_burger.jpg" );
let sweetBurger = new MenuItem("Sweet Burger", 7014, true, false,"https://www.halalcandies.co.uk/image/cache/catalog/Gummy%20Burger-500x500.JPG" );
*/
let vm = new Vue({
  el:"#burger-wrapper",
  data:{
    menu: food_items
  },
}
);
