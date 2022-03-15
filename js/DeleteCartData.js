const GetCartData = () => {
    const cartData = localStorage.getItem("cart");
  
    if (cartData === null) {
      return [];
    } else {
      return JSON.parse(cartData);
    }
  };

const DeleteCartData = (id) =>{
    console.log(id);
    let cartData = GetCartData();
    let AfterDelete = cartData.filter(Data => Data.id != id);
    cartData = AfterDelete;

    console.log(AfterDelete);
  
    localStorage.setItem("cart", JSON.stringify(cartData));
    localStorage.setItem("cart_Item_num", JSON.stringify(cartData.length));
  }