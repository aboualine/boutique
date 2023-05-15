const recherche = () => {
    const rechercheinput =document.getElementById("ptpt").value.toUpperCase();
    const lesproduits =document.getElementsByClassName("produits")
    const produit =document.querySelectorAll(".grndiv")
    const produitnom =document.getElementsByTagName("p")
    for(var i=0 ; i<produitnom.length ; i++ ){
        let available = produit[i].getElementsByTagName('h3')[0];
        if(available){
            let textvalue = available.textContent || available.innerHTML
            if(textvalue.toUpperCase().indexOf(rechercheinput) > -1){
                produit[i].style.display ="";
            }
            else{
                produit[i].style.display ="none";
            }
        }
    }
}


let produits = [
	{
		nom: "Super Mario & Luiji & Croco",
		image: "1.jpg",
		prix: 35,
		discription: "product 1",
	},
	{
		nom: "Super Mario",
		image: "2.jpg",
		prix: 42,
		discription: "product 2",
	},
	{
		nom: "Hila-Hup Miniun",
		image: "3.jpg",
		prix: 15,
		discription: "product 3",
	},
	{
		nom: "Train",
		image: "4.jpg",
		prix: 25,
		discription: "product 4",
	},
	{
		nom: "car & bear & others",
		image: "5.jpg",
		prix: 35,
		discription: "product 5",
	},
	{
		nom: "Prisen Miniun",
		image: "6.jpg",
		prix: 25,
		discription: "product 6",
	},
	{
		nom: "Bear Miniun",
		image: "7.jpg",
		prix: 23,
		discription: "product 7",
	},
	{
		nom: "Karate Miniun",
		image: "8.jpg",
		prix: 22,
		discription: "product 8",
	},
	{
		nom: "Kong-Fuu Miniun",
		image: "9.jpg",
		prix: 25,
		discription: "product 9",
	},
    {
		nom: "Pooh",
		image: "10.jpg",
		prix: 25,
		discription: "product 9",
	},
    {
		nom: "Helo kity",
		image: "11.jpg",
		prix: 25,
		discription: "product 9",
	},
    {
		nom: "Baby Yoda",
		image: "12.jpg",
		prix: 25,
		discription: "product 9",
	},
    {
		nom: "Dead Pool",
		image: "13.jpg",
		prix: 25,
		discription: "product 9",
	},
    {
		nom: "Transformers",
		image: "14.jpg",
		prix: 25,
		discription: "product 9",
	},
    {
		nom: "Dorimon",
		image: "15.jpg",
		prix: 25,
		discription: "product 9",
	},
    {
		nom: "Cute Dragon",
		image: "16.jpg",
		prix: 25,
		discription: "product 9",
	},
    {
		nom: "Candam Zero",
		image: "17.jpg",
		prix: 25,
		discription: "product 9",
	},
    {
		nom: "Car",
		image: "18.jpg",
		prix: 25,
		discription: "product 9",
	},
    {
		nom: "Mac-quin",
		image: "19.jpg",
		prix: 25,
		discription: "product 9",
	},
    {
		nom: "Rorona Zoro",
		image: "20.jpg",
		prix: 25,
		discription: "product 9",
	},
    {
		nom: "Bocu No Hero Acadimia Olmaito",
		image: "21.jpg",
		prix: 25,
		discription: "product 9",
	},
    {
		nom: "Super Sayan Goku",
		image: "22.jpg",
		prix: 25,
		discription: "product 9",
	},
    {
		nom: "Kilua Zouldik",
		image: "23.jpg",
		prix: 25,
		discription: "product 9",
	},

];


article.querySelector(".cart").addEventListener("click", function (e) {
    console.log(e.target.className)
    // if (e.target.className.includes("plus")) incrementInput(article);
    if (e.target.className == "plus") incrementInput(article);

    if (e.target.className.includes("minus")) decrementInput(article);
    if (e.target.className.includes("fa-cart-plus")) addToCart(article);
});


function incrementInput(parentElement) {
	let itemCounter = parentElement.querySelector(".cmnd input");
	let addTocartBtn = parentElement.querySelector(".fa-cart-plus");
	if (parseInt(itemCounter.value) == 0) {
		addTocartBtn.classList.toggle("can-add");
	}
	itemCounter.value++;
}

function decrementInput(parentElement) {
	let itemCounter = parentElement.querySelector(".cmnd input");
	let addTocartBtn = parentElement.querySelector(".fa-cart-plus");
	if (parseInt(itemCounter.value) > 0) {
		itemCounter.value--;
		if (parseInt(itemCounter.value) == 0) addTocartBtn.classList.toggle("can-add");
	}
}

function addToCart(parentElement) {
	let itemCounter = parentElement.querySelector(".cmnd input");
	if (parseInt(itemCounter.value) <= 0) return;
	let items = document.querySelectorAll(".prd-cmnd");
	console.log(items)
	let itemsContainer = document.querySelector(".prd-cmnd");
	let productName = parentElement.querySelector(".predis");
	let productImg = parentElement.querySelector(".product-info img");
	let productPrice = parentElement.querySelector(".prix span");
	let item = document.createElement("div");
	item.className = "border item";
	let itemContent = `
			<img src="${productImg.url}" alt="" />
			<div class="item-name">${productName.textContent}</div>
			<div class="item-price">
        		<span class="items">${itemCounter.value}x</span>
        		<span class="number">${productPrice.textContent}</span>
      		</div>
			<img class="delete" src="images/poubelle.jpg" />`;
	for (const loopedItem of items) {
		console.log(loopedItem);
		let itemName = loopedItem.querySelector(".item-name");
		if (itemName.textContent == productName.textContent) {
			console.log("yos");
			let itemTimes = loopedItem.querySelector(".prd-cmnd");
			itemTimes.textContent = `${itemCounter.value}x`;
			updateTotalPrice();

			return;
		}
	}
	item.innerHTML = itemContent;
	itemsContainer.appendChild(item);
	updateTotalPrice();
	item.querySelector(".delete").addEventListener("click", deleteItem);
}

function updateTotalPrice() {
	let items = document.querySelectorAll(".prd-cmnd");
	let totalPriceElm = document.querySelector(".ttpanier span");
	let totalPrice = 0;
	items.forEach(function (item) {
		let itemPrice = item.querySelector(".number");
		let itemTimes = item.querySelector(".prd-cmnd");
		totalPrice += parseInt(itemTimes.textContent) * parseInt(itemPrice.textContent);
	});
	totalPriceElm.textContent = totalPrice;
}

function deleteItem(e) {
	e.target.parentElement.remove();
	// console.log(e.target.parentElement)
	updateTotalPrice();
}