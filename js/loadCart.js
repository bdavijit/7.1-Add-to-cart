// load product details
const LoadCart = (id) => {
    Item_Cart.innerHTML = "";
    document.getElementById("Spinner").style.display = "block";
  
    try {
      const URL = `https://openapi.programming-hero.com/api/phone/${id}`;
      fetch(URL)
        .then((res) => res.json())
        .then((data) => displayCart(data.data));
    }
    catch(err) {
      
      alert(err.message);
    }
  
  };
  
  // display product Cart
  const displayCart = (Item) => {
    const div = document.createElement("div");
    div.classList.add("cartItem");
    div.innerHTML = `       
 
     `;
  
    Item_Cart.appendChild(div);
  
    document.getElementById("Item_Cart").style.display = "block";
    document.getElementById("Spinner").style.display = "none";
  };