const shopItems = [
    {      
        id:1,
        imageSrc: './src/img/Shop/Maskgroup11.svg',
        altText: 'Maskgroup11',     
        title: 'Trenton modular sofa_3',
        price: 710.00     
    },
    {
        id:2,
        imageSrc: './src/img/Shop/Maskgroup12.svg',
        altText: 'Maskgroup12',  
        title: 'Granite dining table with dining chair',
        price: 200.00
    },
    {
        id:3,
        imageSrc: './src/img/Shop/Maskgroup13.svg',
        altText: 'Maskgroup13',
        title: 'Outdoor bar table and stool',
        price: 700.00
    },
    {
        id:4,
        imageSrc: './src/img/Shop/Maskgroup14.svg',
        altText: 'Maskgroup14',
        title: 'Plain console with teak mirror',
        price: 500.00
    } 
  ];  
  
  // const shopPage = document.getElementById("shop_list");
  const renderShopItems = async () => {
    const shopPage = document.getElementById("shop_list");


  shopItems.forEach((shopItem) => {
    const { id,imageSrc, altText, title, price} = shopItem;
    const singleProduct = document.createElement("div");
    singleProduct.classList.add("product_shop");
  singleProduct.innerHTML = `        
       <div class="w-full sm:w-[294px] text-center flex flex-col items-center image-container">
           <img src="${imageSrc}" class="h-48 w-auto mb-4  single_product top-image" alt="${altText}">
          <p class=" md:text-[14px] sm:text-[12px] lg:text-[16px] font-medium text-[#000000]">${title}</p>
          <p class="md:text-[18px] sm:text-[14px] lg:text-[24px] font-medium text-[#000000]">$${price}</p>                    
   </div> `;
   
   singleProduct.querySelector(".single_product").addEventListener("click", () => {
      window.location.href = `singleProduct.html?id=${id}`;
    });
  shopPage.appendChild(singleProduct);
  });
}; 
renderShopItems();


  const blogs = [
      {
          id:1,
          title: "Going all-in with millennial design",
          image: "./src/img/Home/Rectangle1.svg",
          altText:"Rectangle1",
          date: "12th Oct 2022",
        time: "5 min"    
      },
      {
          id:2,
          title: "The Rise of Minimalist Furniture",
          image: "./src/img/Home/Rectangle2.svg",
          altText:"Rectangle2",
          date: "12th Oct 2022",
          time: "5 min"
      },
      {
          id:3,
          title: "Sustainable Materials in Furniture Design",
          image: "./src/img/Home/Rectangle3.svg",
          altText:"Rectangle3",
          date: "12th Oct 2022",
          time: "5 min"
      }
    ]; 
  
    // const blogPage = document.getElementById("blog_list");
    const renderBlogItems = async () => {
      const blogPage = document.getElementById("blog_list");

    blogs.forEach((blog) => {
      const { title, image,altText, date, time} = blog;
      const singleBlog = document.createElement("div");
      singleBlog.classList.add("blog_shop");
     singleBlog.innerHTML = `        
     <div class="w-full md:w-[394px] text-center flex flex-col items-center gap-y-2 image-container">
    <img src="${image}" class="w-auto mb-4 blog-image"  alt="${altText}">
    <p class="lg:text-[20px] md:text-[16px] sm:text-[12px] font-medium text-[#000000]"> ${title}</p>
    <p class="lg:text-[20px] md:text-[16px] sm:text-[12px] text-[#000000] border-b-2 border-black pb-1 inline-block font-bold">Read More</p>
    <div class="flex gap-x-1 mt-4 justify-center">
      <img src="./src/img/Home/Group.svg" class="w-auto" alt="Group">
      <p class="lg:text-[20px] md:text-[16px] sm:text-[12px] font-light text-[#000000]">${time}</p>
      <img src="./src/img/Home/calender.svg" class="w-auto ml-3" alt="calender">
      <p class="lg:text-[20px] md:text-[16px] sm:text-[12px] font-light text-[#000000]">${date}</p>
    </div>
  </div> `;
  
     blogPage.appendChild(singleBlog);
    });
  };
    renderBlogItems();
 


    const furniturePage = document.getElementById("furniture_list");
    const singleFurniture = document.createElement("div");    
    singleFurniture.innerHTML = `     
      <div class="flex">      
        <div class="w-full sm:w-[562px] lg:w-[562px] mb-8 lg:mb-0 image-container">   
            <img src="./src/img/Home/Granitesquaresidetable.svg" alt="Granitesquaresidetable" class="w-full h-auto sm:h-[344px] md:h-[400px] lg:h-[344px] xl:h-[400px] object-contain filter-image">
            <div class="text-center">
              <p class="lg:text-[36px] md:text-[24px] sm:text-[20px] font-bold text-[#000000]">Side Table</p>         
                <p class="lg:text-[24px] md:text-[16px] sm:text-[12px] font-medium text-[#000000] border-b-2 border-black pb-1 inline-block table_product"  >View More</p>     
            </div>
          </div> 
          <div class="w-full sm:w-[562px] lg:w-[562px] mb-8 lg:mb-0 image-container">   
            <img src="./src/img/Home/sofathreeseater.svg" alt="sofathreeseater" class="w-full h-auto sm:h-[344px] md:h-[400px] lg:h-[344px] xl:h-[400px] object-contain filter-image">
            <div class="text-center">
              <p class="lg:text-[36px] md:text-[24px] sm:text-[20px] font-bold text-[#000000]">Sofa Three Seater</p>         
                <p class="lg:text-[24px] md:text-[16px] sm:text-[12px] font-medium text-[#000000] border-b-2 border-black pb-1 inline-block sofa_product"  >View More</p>      
            </div>
          </div> 
      </div> `;
  singleFurniture.querySelector(".table_product").addEventListener("click", () => {
    window.location.href = `shop.html?title=${"table"}`;
  });   
  singleFurniture.querySelector(".sofa_product").addEventListener("click", () => {
    window.location.href = `shop.html?title=${"sofa"}`;
  });  
    furniturePage.appendChild(singleFurniture);


