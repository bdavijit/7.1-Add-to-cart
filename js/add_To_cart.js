// const loadCard = () => {
//   location.href = "/cart.html";
// };

const AddToCart = (id) => {
  let cartData = GetCartData();

  storeData(cartData, id);

  upDate_Notification();
};

const upDate_Notification = () => {
  let NotificationNumber = localStorage.getItem("cart_Item_num");
  document.getElementById("cart_Item_num").innerText =
    JSON.parse(NotificationNumber);
};

const storeData = (cartData, id) => {
  //   console.log("ok");
  let InsertDone = false;
  for (const data of cartData) {
    if (data.id === id) {
      InsertDone = true;
      data.quantity += 1;
    }
  }
  if (InsertDone) {  
  } else {
    if (cartData.length === 0) {
      cartData = [{ id: id, quantity: 1 }];
    } else {
      cartData = [...cartData, { id: id, quantity: 1 }];
    }
  }

  localStorage.setItem("cart", JSON.stringify(cartData));
  localStorage.setItem("cart_Item_num", JSON.stringify(cartData.length));
};

const GetCartData = () => {
  const cartData = localStorage.getItem("cart");

  if (cartData === null) {
    return [];
  } else {
    return JSON.parse(cartData);
  }
};

upDate_Notification();
