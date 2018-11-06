let vm = new Vue({});
function MenuItem(b_name, kcal, allergen, freeFromX){
  this.name = b_name;
  this.cal=kcal;
  this.allergies=allergen;
  this.freeFrom=freeFromX;
  this.returnNameAndCal=function(){
    return this.name + ' contains ' + this.cal + ' kCal';
  };
}

let myBurger = new MenuItem("Fire Burger", 765, "mercury", "gluten" );
//console.log(myBurger.returnNameAndCal());
