
function shopCart(book) {
       let newProdCart = currentStock.find(el => el.id == book.id);
       $("#addBooks").append(`<br>${newProdCart.name} <span class="price" value= ${newProdCart.price}>${newProdCart.price}</span></br>`);
       totalPrice()
}

function totalPrice(){
       var finalPrice = $('.price').map(function() {
              return parseFloat($(this).attr('value'));
          })
       finalPrice = finalPrice.get().reduce((acc, el) => acc + el).toFixed(2);
       let newprice = finalPrice
       $("#total_price").html(newprice);
}

function suscribirse(){
       let newEmail = document.getElementById('email').value
       sessionStorage.setItem('email', newEmail)
}

$( ".cart" ).click(function() {
       $( "#addBooks" ).slideToggle( "slow");
     });

$( "#showBar" ).click(function(){
       $( "#mySidebar" ).slideToggle("slow");

       console.log('algo')
   });

