const Cart_Box = document.getElementById("Cart_Box");


const LoadCart = (id , Quintity) => {
  Cart_Box.innerHTML = "";
  document.getElementById("Spinner").style.display = "block";

  try {
    const URL = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => displayCart(data.data ,Quintity));
  } catch (err) {
    alert(err.message);
  }
};

// display product Cart
const displayCart = (Item ,Quintity) => {
  const div = document.createElement("div");
  div.classList.add("cartItem");
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
    <p class="card-text text-center">${Item.brand }</p>
  </div>
  <div>Quintity: ${Quintity}</div>
     `;

  Cart_Box.appendChild(div);

  document.getElementById("Spinner").style.display = "none";
};


const loadLocalStorageData = () =>
{
  const cartData = localStorage.getItem("cart");
  const Datas = JSON.parse(cartData);

  for(const Data of Datas){
    LoadCart(Data.id , Data.quantity);
  }
}

loadLocalStorageData();

document.getElementById("Spinner").style.display = "none";

