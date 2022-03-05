let cart_Item_num = 0;

const loadCard = () =>{
   location.href = "/cart.html";
}
const AddToCart = (id) =>{
  let cartData = GetCartData();
  console.log(cartData);
  
  if(cartData.length === 0){
   cartData = [{id: id , quantity:1}];
  }else{
   cartData = [...cartData, {id: id , quantity:1}];
  }
  
  localStorage.setItem('cart' , JSON.stringify(cartData));
  localStorage.setItem('cart_Item_num' , JSON.stringify(cartData.length));

  cart_Item_num = cartData.length;
  document.getElementById('cart_Item_num').innerText = cart_Item_num;
}


const GetCartData = (id) =>{
  const cartData = localStorage.getItem('cart');

if (cartData === null){
   return [];
}else{
   return JSON.parse(cartData); 
}
}


// let cartData = [{id:1 , num:1}];
// localStorage.setItem('cart', JSON.stringify(cartData));