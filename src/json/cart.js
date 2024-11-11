const products = [
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
  const searchParams = new URLSearchParams(window.location.search);
  
  const productID = searchParams.get("cart");
  
  const cartArray = productID.split(",").map(Number);
  
  console.log(cartArray);
  
  const cartProducts = products.filter((product) =>
    cartArray.includes(product.id)
  );
  console.log(cartProducts);
  
  const productPage = document.getElementById("cartProduct");
  
  cartProducts.forEach((product) => {
    const { id, imageSrc, altText, title, price } = product;
    const singleProduct = document.createElement("div");
    singleProduct.classList.add("product_card");
  
singleProduct.innerHTML =`
<div class="w-full flex justify-between gap-x-5 items-center image-container">
                            <div class="bg-[#ffe6cc]  rounded-[10px] h-[80px] w-[80px] top-image">
                                <img class="" src="${imageSrc}" alt="${altText}">
                            </div>
                            <div class="flex flex-col w-[300px] gap-y-3  sm:gap-y-1">
                                <p class="text-[16px] font-medium text-[#000000]  sm:text-[14px]">${title}</p>                             
                                                                       
                            </div>
                            <div  class="border-2 border-[#9F9F9F] flex justify-around rounded-[10px] h-[64px] w-[120px] sm:w-[80px] sm:h-[44px] items-center top-image ">
                                <button class="text-[16px]  font-regular text-[#000000] ">-</button>
                                <p class="lg:text-[16px]  font-regular text-[#000000] sm:text-[14px]">1</p>
                                <button class="text-[16px]  font-regular text-[#000000] ">+</button>
                            </div>  
                            <div class="items-center w-[50px]">
                                <p class="lg:text-[16px] font-bold text-[#000000] items-center sm:text-[14px]">$${price}</p>                          
                            </div>                  
                        </div>`;
    productPage.appendChild(singleProduct);
  });
  
  const finalPrice = document.getElementById("finalPrice");
  let sumPrice = 0;
  console.log(cartProducts);
  cartProducts.forEach((product) => {
    sumPrice += product.price;
  });
  
  finalPrice.innerHTML = `$${sumPrice}`;