app.filter('orderTotal', function(){
  return function(input){
    var total = 0;
    for(i=0;i<input.length;i++){
      total += input[i].quantity * input[i].price;
    }
    return total;
  }

});

// app.filter('orderTotal', function () {
//   return function (input) {
//     var total = input.reduce(function(prev, next) {
//       return prev + (next['quantity'] * next['price']/100)
//     }, 0)
//     return total;
//   }
// })
