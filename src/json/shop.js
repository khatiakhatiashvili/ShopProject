    const shopItems = [
        {
            id:1,
            imageSrc: './src/img/Shop/Maskgroup11.svg',
            altText: 'Maskgroup11',
            title: 'Trenton modular sofa_3',
            price: 70.20     
        },
        {
            id:2,
            imageSrc: './src/img/Shop/Maskgroup12.svg',
            altText: 'Maskgroup12',
            title: 'Granite dining table with dining chair',
            price: 20.20
        },
        {
            id:3,
            imageSrc: './src/img/Shop/Maskgroup13.svg',
            altText: 'Maskgroup13',
            title: 'Outdoor bar table and stool',
            price: 50.20
        },
        {
            id:4,
            imageSrc: './src/img/Shop/Maskgroup14.svg',
            altText: 'Maskgroup14',
            title: 'Plain console with teak mirror',
            price: 50.00
        },
        {
            id:5,
            imageSrc: './src/img/Shop/Maskgroup21.svg',
            altText: 'Maskgroup21',
            title: 'Plain console with teak mirror',
            price: 'Rs. 25,000.00'
        },
        {
            id:6,
            imageSrc: './src/img/Shop/Maskgroup22.svg',
            altText: 'Maskgroup22',
            title: 'Plain console with teak mirror',
            price: 50.20
        },
        {
            id:7,
            imageSrc: './src/img/Shop/Maskgroup23.svg',
            altText: 'Maskgroup23',
            title: 'Plain console with teak mirror',
            price: 550.90
        },
        {
            id:8,
            imageSrc: './src/img/Shop/Maskgroup24.svg',
            altText: 'Maskgroup24',
            title: 'Plain console with teak mirror',
            price: 50.20
        },
        {  
              id:9,
            imageSrc: './src/img/Shop/Maskgroup31.svg',
            altText: 'Maskgroup31',
            title: 'Plain console with teak mirror',
            price:  250.20
        },
        {
            id:10,
            imageSrc: './src/img/Shop/Maskgroup32.svg',
            altText: 'Maskgroup32',
            title: 'Plain console with teak mirror',
            price: 50.20
        },
        {
            id:11,
            imageSrc: './src/img/Shop/Maskgroup33.svg',
            altText: 'Maskgroup33',
            title: 'Plain console with teak mirror',
            price: 50.20
        },
        {
            id:12,
            imageSrc: './src/img/Shop/Maskgroup34.svg',
            altText: 'Maskgroup34',
            title: 'Plain console with teak mirror',
            price: 50.20
        },
        {
            id:13,
            imageSrc: './src/img/Shop/Maskgroup41.svg',
            altText: 'Maskgroup41',
            title: 'Plain console with teak mirror',
            price: 50.20
        },
        {
            id:14,
            imageSrc: './src/img/Shop/Maskgroup42.svg',
            altText: 'Maskgroup42',
            title: 'Plain console with teak mirror',
            price: 50.20
        },
        {
            id:15,
            imageSrc: './src/img/Shop/Maskgroup43.svg',
            altText: 'Maskgroup43',
            title: 'Plain console with teak mirror',
            price:50.20
        },
        {
            id:16,
            imageSrc: './src/img/Shop/Maskgroup24.svg',
            altText: 'Maskgroup24',
            title: 'Plain console with teak mirror',
            price: 50.20
        }
    ];
    let cartItems = [];
    const productPage = document.getElementById("main");
    shopItems.forEach((shopItem) => {
        const { id, imageSrc, altText, title, price} = shopItem;
        const singleProduct = document.createElement("div");
        singleProduct.classList.add("product_card");
    
        singleProduct.innerHTML = `          
        
       <div class="flex place-content-around pt-[90px] flex-wrap text-center max-w-7xl ">    
            <div class="w-[394px] text-center flex flex-col flex-wrap t items-center image-container">
                <img src="${imageSrc}" class="h-48 w-auto mb-4 single_product top-image" alt="${altText}">
                <p class="text-[16px] font-medium text-[#000000]">${title}</p>
                <p class="text-[24px] font-medium text-[#000000]">$${price}</p>
                <div class="flex space-x-4 mb-5 text-sm font-medium">
                    <div class="flex-auto flex space-x-4 pr-4 mt-2">    
                        <button class="add_to_cart flex-none w-[194px] h-14 rounded-lg bg-gradient-to-r from-[#F1DFD5] to-[#F8E1A1] text-black
                         font-semibold tracking-wider hover:from-[#F8E1A1] hover:to-[#F1DFD5] focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300
                         ">
                            Add Cart
                        </button>     
                    </div>            
                 </div>
            </div>             
        </div>
        `;
        singleProduct.querySelector(".add_to_cart").addEventListener("click", () => {
          addToCart(id);
        });

        singleProduct.querySelector(".single_product").addEventListener("click", () => {
            window.location.href = `singleProduct.html?id=${id}`;
          });       

        // singleProduct.querySelector(".buy_now").addEventListener("click", () => {
        //   navigaateToProductPage(id);
        // });
    //     <button class="buy_now flex-none w-[60%] h-14 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold tracking-wider hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
    //     Buy Now
    // </button>  
        productPage.appendChild(singleProduct);
      }); 
   
// });

const addToCart = (id) => {
    const shopItem = shopItems.find((shopItem) => shopItem.id === id);
    cartItems.push(shopItem);
    console.log(cartItems);
    updateCartUrl();
  };
  let url;
  const updateCartUrl = () => {
    const cartItemsIds = cartItems.map((item) => item.id).join(",");
    const currentURl = new URL(window.location.href);
    currentURl.searchParams.set("cart", cartItemsIds);
    console.log(currentURl.search);
    const newURl = currentURl.search;
    url = `cart.html${newURl}`;
    console.log(url);
  };
  
 const cartButton = document.getElementById("cart");
  
  const navigaateToProductPage = () => {
    window.location.href = url;
  };
  
  cartButton.addEventListener("click", navigaateToProductPage);


