  const freeDeliveries =  [
    {       
       title: "Free Delivery",
       description: "For all orders over $50, consectetur adipiscing elit."
     },
    {       
       title: "90 Days Return",
       description: "If goods have problems, consectetur adipiscing elit."
     },
  {       
       title: "Secure Payment",
       description: "100% secure payment, consectetur adipiscing elit."
     }
   ];
 

   const freeDeliveryData = document.getElementById("freedelivery");
   freeDeliveries.forEach((freeDeliveryItem) => {
       const { title, description} = freeDeliveryItem;
       const singleDelivery = document.createElement("div");     
       singleDelivery.innerHTML = `   
       <div class="w-[394px] text-center flex flex-col items-start  gap-y-1 ">       
           <p class="lg:text-[32px] sm:text-[20px] md:text-[20px]  font-medium text-[#000000]">${title}</p>
           <p class="lg:text-[20px] sm:text-[10px] md:text-[12px]  font-medium text-[#9F9F9F]">${description}</p> 
     </div>
       `;      
       freeDeliveryData.appendChild(singleDelivery);
     }); 
