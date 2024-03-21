


function showImgFn(headshots){
   
    const imageContainer = 
        document.getElementById("headshots");
    imageContainer.innerHTML = "";
    images.forEach(image => {
        const card = 
            document.createElement("div");
        card.classList.add("card");
        const img = 
            document.createElement("ul li a img");
        img.src = image.urls.regular;
        img.alt = "ul li a img";
        img.onclick = function () { 
            preImgFn(image.urls.full); 
        };
 
        card.appendChild(img);
        imageContainer.appendChild(card);
    });
  }

