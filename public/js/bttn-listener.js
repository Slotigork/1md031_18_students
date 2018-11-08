let bttn_listener = new Vue({
el:"#order-page",
data:{
  pickedBurgers: [],
  fullname: '',
  email: '',
  streetname: '',
  housenum: undefined,
  payment: '',
  gender: 'Undisclosed',

},
methods: {
  markDone: function(){
    console.log("Button has been clicked!");
  }
}
});
