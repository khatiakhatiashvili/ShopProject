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
  
    const blogPage = document.getElementById("blog_list");
    blogs.forEach((blog) => {
      const { title, image,altText, date, time} = blog;
      const singleBlog = document.createElement("div");
      singleBlog.classList.add("product_shop");
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
    
  