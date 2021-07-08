function removeThis(element){
       $(`#${element}`).hide("slow").remove()
       console.log('se removio')
       if($("#this_price").length == 0) {
              $("#total_price").html('0.00'); 
            }else{totalPrice();}       
}

function shopCart(book) {
       let newProdCart = currentStock.find(el => el.id == book.id);
       $("#addBooks").append(`<div id="side_${newProdCart.id}"><br><span>${newProdCart.name}</span> <span class="price" id="this_price"  value= ${newProdCart.price}>${newProdCart.price}</span><button onclick="removeThis('side_${newProdCart.id}')">x</button></div>`);
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
   });
