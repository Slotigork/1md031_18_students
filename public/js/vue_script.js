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
'use strict';
let socket = io();

let vm = new Vue({
  el:"#order-page",
  data:{
    menu: food_items,
    pickedBurgers: [],
    fullname: '',
    email: '',
    /*    streetname: '',
    housenum: undefined, */
    payment: '',
    gender: 'Undisclosed',

    isDisplayed: false,
    orderedBurgers: [],
    ordername: '',
    orderEmail: '',
    /*    orderAddress: '', */
    orderPayment:'',
    orderGender: '',

    orders: {},
  },
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
  },

  methods: {
    displayOrder:function(event){
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top};
        socket.emit("addOrder", { orderId: "T",
          details: { x: event.clientX - 10 - offset.x,
            y: event.clientY - 10 - offset.y }});
          },
    markDone: function(){
      console.log("Button has been clicked!");
    },
    createOrder: function(){
      this.isDisplayed = true,
      this.orderedBurgers = this.pickedBurgers.slice(),
      this.ordername = this.fullname,
      this.orderEmail = this.email,
      /*      this.orderAddress = this.streetname + ' ' + this.housenum, */
      this.orderPayment = this.payment,
      this.orderGender = this.gender
    },
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function (event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top};
        socket.emit("addOrder", { orderId: this.getNext(),
          details: { x: event.clientX - 10 - offset.x,
            y: event.clientY - 10 - offset.y },
            orderItems: ["Beans", "Curry"]
          });
        },
      }
    });
