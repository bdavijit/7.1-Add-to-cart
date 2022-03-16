// const Items_ID = document.getElementById("Items");

const FindPhone = () => {
    Hidden();
    document.getElementById("Item_Find").style.display = "block";
    document.getElementById("DarkFooter").style.display = "block";
    document.getElementById("Items").style.display = "block"
    window.scrollTo(0, 0);
  
  
  };
  //Get Data By Find
  let BrandArr = [],
  storage = 0,
  TotalData = [];
  const GetFindData = () => {
  // console.log("kk");
  (BrandArr = []), (storage = 0),(TotalData = []);
  var radios = document.getElementsByName("Storage");
  for (var radio of radios) {
    if (radio.checked) {
      storage = radio.value;
    }
  }
  GetBrandData();
  
  };
  const GetBrandData = () => {
  BrandArr = [];
  var checkboxes = document.getElementsByName("BrandNames");
  for (var checkbox of checkboxes) {
    if (checkbox.checked) {
      // document.body.append(checkbox.value + " ");
      BrandArr.push(checkbox.value);
    }
  }
  console.log( typeof storage , BrandArr);
  if( storage && BrandArr.length !== 0){
    
    Items_ID.innerHTML = "";
    BrandArr.forEach(brand =>LoadOnlyData(brand) );
    
  }else{
    alert("No result found or select all field");
  }
  
 
  };

  // Load search data
const LoadOnlyData = (BrandName) => {
      try {
        const URL = `https://openapi.programming-hero.com/api/phones?search=${BrandName}`;
        fetch(URL)
          .then((res) => res.json())
          .then((data) =>FilterData(data.data));
      } catch (err) {
        alert(err.message);
      }
    
  };

  const FilterData =( Data)=>{
    TotalData =[...TotalData, Data];
    // console.log(TotalData);
    TotalData.forEach( D =>{ 
        D.forEach(E =>{
            FilterDataById(E.slug);
            // console.log( typeof storage);
        })
    });
  }

  const FilterDataById = (id) => {
 
    try {
      const URL = `https://openapi.programming-hero.com/api/phone/${id}`;
      fetch(URL)
        .then((res) => res.json())
        .then((data) =>displayMobilefromFilter(data.data));
    } catch (err) {
      alert(err.message);
    }
  };
//   let start2 = 0;
  const displayMobilefromFilter = (Item) => {

      if(Item?.mainFeatures?.storage?.includes(storage)){
        console.log(Item?.name || "Not Found");
        console.log(Item?.image || "Not Found");
        console.log(Item?.brand || "Not Found");
        console.log(Item?.mainFeatures?.storage || "Not Found");
        // console.log(++start2);
      

      const div = document.createElement("div");
      div.classList.add("MyCard");
      div.classList.add("animate__animated");
      div.classList.add("animate__fadeInUp");
      div.innerHTML = `       
      <div class="image_height">
        <img src="${Item?.image || "Not Found"}" class="my-img-fluid" alt="picture" />
      </div>
      <div class="card-body">
        <h5 class="card-title text-center">${Item?.name || "Not Found"}</h5>
        <p class="card-text text-center">
        ${Item?.brand || "Not Found"}
        </p>
        <a 
        href="#" 
        class="btn btn-danger d-flex justify-content-center" 
        onclick="AddToCart('${Item.slug}')"
        >Add to Cart</a>
        <br />
        <a 
        href="#" 
        class="btn btn-primary d-flex justify-content-center" 
        onclick="LoadDetails('${Item.slug}')"
        >Details</a>
      </div>

   `;
   Items_ID.appendChild(div);
}
  };