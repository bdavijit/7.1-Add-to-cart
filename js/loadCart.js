const Cart_Box = document.getElementById("Cart_Box");

const LoadCart = (id, Quintity) => {
  Cart_Box.innerHTML = "";
  document.getElementById("Spinner").style.display = "block";

  try {
    const URL = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => displayCart(data.data, Quintity));
  } catch (err) {
    alert(err.message);
  }
};

// display product Cart
const displayCart = (Item, Quintity) => {
  const div = document.createElement("div");
  div.classList.add("cartItem");
  div.classList.add("animate__animated");
  div.classList.add("animate__bounceInUp");
  div.innerHTML = `       
    <div class="image_height">
    <img
      src="${Item.image}"
      class="my-img-fluid"
      alt="picture"
    />
  </div>
  <div class="card-body">
    <h3 class="card-title text-center">${Item.name}</h3>
    <p class="card-text text-center">${Item.brand}</p>
  </div>
  <div>Quintity: ${Quintity}</div>
  <button type="button" class="btn btn-danger" onclick="DeleteCartData('${Item.slug}')">Delete</button>
     `;

  Cart_Box.appendChild(div);

  document.getElementById("Spinner").style.display = "none";
};

const loadLocalStorageData = () => {
  Hidden();
  document.getElementById("Cart_Box").style.display = "block";
  document.getElementById("DarkFooter").style.display = "block";
  // document.getElementById("Items").style.display = "none";
  
  const cartData = localStorage.getItem("cart");
  const Datas = JSON.parse(cartData);
  console.log(Datas);
  if(Datas.length !== 0){
    for (const Data of Datas) {
      LoadCart(Data.id, Data.quantity);
    }
  }else{
    Cart_Box.innerHTML = "";
    Cart_Box.style.display = "none";
  }
  
};

// loadLocalStorageData();

document.getElementById("Spinner").style.display = "none";

//get localStorage data
const GetCartData2 = () => {
  const cartData = localStorage.getItem("cart");

  if (cartData === null) {
    return [];
  } else {
    return JSON.parse(cartData);
  }
};


//delete cart data
const DeleteCartData = (id) =>{
  console.log(id);
  let cartData = GetCartData2();
  let AfterDelete = cartData.filter(Data => Data.id != id);
  cartData = AfterDelete;

  console.log(AfterDelete);

  localStorage.setItem("cart", JSON.stringify(cartData));
  localStorage.setItem("cart_Item_num", JSON.stringify(cartData.length));
  loadLocalStorageData();

}
