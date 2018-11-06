function MenuItem(b_name, kcal, containsGluten, containsLactose){
  this.name = b_name;
  this.kcal=kcal;
  this.containsGluten = containsGluten;
  this.containsLactose = containsLactose;

  this.returnNameAndCal=function(){
    return this.name + ' contains ' + this.cal + ' kCal';
  };
}

let fireBurger = new MenuItem("Fire Burger", 2050, true, true );
let waterBurger = new MenuItem("Water Burger", 574, false, true );
let maxBurger = new MenuItem("Max Burger", 300, true, true );
let brownBurger = new MenuItem("Brown Burger", 1012, false, false );
let sweetBurger = new MenuItem("Sweet Burger", 7014, true, false );

let burgers = new Array(fireBurger, waterBurger, maxBurger, brownBurger, sweetBurger);

let vm = new Vue({
el:"#burgerwrapper",
data:{}
}
);
