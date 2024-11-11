const header = document.getElementById("header-container");
    const headerContent = document.createElement("div");     
    headerContent.innerHTML = `   
      <header class="bg-[#ffffff]">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">    
      <div class="flex lg:flex-1">   
      </div>
      <div class="hidden lg:flex lg:gap-x-16 ">
        <a href="index.html" class="text-[16px] font-medium leading-[24px] text-[#000000]">Home</a>
        <a href="shop.html" class="text-[16px] font-medium leading-[24px] text-[#000000]">Shop</a>
        <a href="blog.html" class="text-[16px] font-medium leading-[24px] text-[#000000]">About</a>
        <a href="contact.html" class="text-[16px] font-medium leading-[24px] text-[#000000]">Contact</a>
      </div>  
      <div class="lg:hidden flex items-center ">
        <button id="menu-toggle" type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" alt="menu icon">         
            <span class="sr-only">Close menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </button>
      </div>  
      <div class="hidden lg:flex lg:flex-1 lg:justify-end gap-x-[28px]">
        <a href="Login.html" class="text-black-900">
          <img class="h-[28px] w-auto" src="./src/img/Common/account.svg" alt="account">
        </a>
        <a href="#" class="text-black-900">
          <img class="h-[28px] w-auto" src="./src/img/Common/search.svg" alt="search">
        </a>
        <a href="#" class="text-black-900">
          <img class="h-[28px] w-auto" src="./src/img/Common/heart.svg" alt="heart">
        </a>        
        <button type="submit"  id="cart" >
             <img class="h-[28px] w-auto" src="./src/img/Common/shopping.svg" alt="shopping" >
        </button>  
      </div>
    </nav>  
    <div id="mobile-menu" class="lg:hidden hidden flex-col items-start gap-y-4 px-6 py-4 flex flex-col absolute top-0 left-0">
      <a href="index.html" class="text-[16px] font-medium leading-[24px] text-[#000000]">Home</a>
      <a href="shop.html" class="text-[16px] font-medium leading-[24px] text-[#000000]">Shop</a>
      <a href="blog.html" class="text-[16px] font-medium leading-[24px] text-[#000000]">About</a>
      <a href="contact.html" class="text-[16px] font-medium leading-[24px] text-[#000000]">Contact</a>
      <div class="flex gap-x-6 mt-4 ">
        <a href="Login.html" class="text-black-900">
          <img class="h-[20px] w-auto" src="./src/img/Common/account.svg" alt="account">
        </a>
        <a href="#" class="text-black-900">
          <img class="h-[20px]  w-auto" src="./src/img/Common/search.svg" alt="search">
        </a>
        <a href="#" class="text-black-900">
          <img class="h-[20px]  w-auto" src="./src/img/Common/heart.svg" alt="heart">
        </a>
        <a href="cart.html" class="text-black-900">
          <img class="h-[20px]  w-auto" src="./src/img/Common/shopping.svg" alt="shopping">
        </a>
      </div>
    </div>
  </header>
    `;      


    header.appendChild(headerContent);

     // Get button and the mobile menu
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  // Add event listener to toggle the mobile menu visibility
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  
  