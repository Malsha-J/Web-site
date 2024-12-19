//Make the My cart appear when click on the cart icon
const cartClick = document.getElementsByClassName("Cart")[0];
const myCart = document.getElementsByClassName("addToCart")[0];
let cartVisible = false;

cartClick.addEventListener("click", function() {
    if(cartVisible){
        myCart.style.display="block";
        console.log("Clicked on add to cart btn");
    }else{
        myCart.style.display="none";
    }
    cartVisible = !cartVisible;
});

//add items to the cart
var cartList = [];
const productItem = document.querySelectorAll(".add");
var total = 0;

productItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        if(!cartList.includes(index)){
            cartList.push(index);

        const content = document.querySelector(".contents");
        const creatDiv = document.createElement("div");
        creatDiv.classList.add("cartItem"); 
        content.appendChild(creatDiv);

        //get the details of the item
        const getproduct = document.getElementsByClassName("item")[index];
        const getImg = getproduct.querySelector("img").src;
        const getItemName = getproduct.querySelector(".itemName").textContent;
        const getPrice = getproduct.querySelector(".price").textContent;

        //set a img tag
        const imgElement = document.createElement("img");
        imgElement.src = getImg; // Set the src attribute to display the image
        imgElement.alt = "item";
        creatDiv.appendChild(imgElement); 

        //set a div for product deatils
        const detailDiv = document.createElement('div');
        detailDiv.classList.add("itemDetails");
        creatDiv.appendChild(detailDiv);

        //set a div for item name
        const itemNameDiv = document.createElement('div');
        itemNameDiv.classList.add("name");
        itemNameDiv.textContent = getItemName;
        detailDiv.appendChild(itemNameDiv);

        //set a div for price and add it inside of the name div
        const itemPriceDiv = document.createElement('div');
        itemPriceDiv.classList.add("itemPrice");
        itemPriceDiv.textContent = getPrice;
        detailDiv.appendChild(itemPriceDiv);

        //set a quantity selecter
        const quantityDiv = document.createElement('div');
        quantityDiv.classList.add("quantity");
        detailDiv.appendChild(quantityDiv);

        const quantityLabel = document.createElement('label');
        quantityLabel.for = "quantity";
        quantityLabel.textContent = "Quantity : "; 
        quantityDiv.appendChild(quantityLabel);

        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.id = 'quantity';
        quantityInput.name = 'quantity';
        quantityInput.value = '1';
        quantityInput.min = '1';
        quantityInput.max = '10';
        quantityInput.step = '1';
        quantityDiv.appendChild(quantityInput);

        //get the price of the item
        var pricePart = getPrice.split('Rs '); 
        var priceValue = parseInt(pricePart[1]);
        var amountPart = document.querySelector("#quantity");
        var itemAmount = parseInt(amountPart.value);
        var itemTotal = priceValue*itemAmount;
        total += itemTotal; 
        document.querySelector(".totalPrice").innerHTML = `Total: ${total}`;
        


        }else{
            alert("Already you added this product to the cart");
        }
        
    });
});

//clear button action
const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click",()=>{
    document.querySelector(".contents").innerHTML = "";
    document.querySelector(".totalPrice").innerHTML = `Total: 0.00`;
    total = 0.00;
    cartList.length = 0;
});

//buy button action
const buyBtn = document.querySelector(".buyBtn");

buyBtn.addEventListener("click",()=>{
    // window.location.assign('checkout.html');
    const contents = document.querySelector(".contents");
    if (contents.children.length === 0) {
        alert('Your cart is empty.');
    }else{
        window.location.assign('checkout.html');
    }    
});





