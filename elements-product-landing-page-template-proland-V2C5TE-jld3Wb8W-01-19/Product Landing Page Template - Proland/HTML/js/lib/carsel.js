// JavaScript source code

let selectElement = document.querySelector('.selectpicker');
let price=document.querySelector('.pain')
let more=document.getElementById('more')
let Tiger=document.getElementById('tiger')
let Rabbit=document.getElementById('rabbit')
let Pig=document.getElementById('pig')
let Dog=document.getElementById('dog')
let pinkpig=document.getElementById('pinkpig')
let minipig=document.getElementById('minipig')
let pug=document.getElementById('pug')
let bear=document.getElementById('bear')
let Basket=document.getElementById('basket')
let element = document.getElementById("product-imgs");
 
selectElement.addEventListener('change', (event) => {
if(selectElement.value=="Tiger"){
Tiger.className="item active";
Rabbit.className="item";
Pig.className="item";
Dog.className="item";
pug.className="item"
pinkpig.className="item"
minipig.className="item"
bear.className="item"
Basket.className="item";
price.innerText="14.99";
element.scrollIntoView();

}else{
	Tiger.className="item";
}
if(selectElement.value=="Dog"){
Tiger.className="item";
Rabbit.className="item";
Pig.className="item";
Dog.className="item active";
pug.className="item"
pinkpig.className="item"
minipig.className="item"
bear.className="item"
Basket.className="item";
price.innerText="14.99";
element.scrollIntoView();
}else{
	Dog.className="item";
}
if(selectElement.value=="Rabbit"){

Tiger.className="item";
Rabbit.className="item active";
Pig.className="item";
Dog.className="item";
pug.className="item"
pinkpig.className="item"
minipig.className="item"
bear.className="item"
Basket.className="item";
price.innerText="14.99";
element.scrollIntoView();
}else{
	Rabbit.className="item";
}
if(selectElement.value=="Purple Pig"){
Tiger.className="item";
Rabbit.className="item";
Pig.className="item active";
Dog.className="item";
pug.className="item";
pinkpig.className="item";
minipig.className="item";
bear.className="item";
Basket.className="item";
price.innerText="14.99";
element.scrollIntoView();
}else{
	Pig.className="item";
}

if(selectElement.value=="Pink Pig"){
Tiger.className="item";
Rabbit.className="item";
Pig.className="item";
Dog.className="item";
pug.className="item";
pinkpig.className="item active";
minipig.className="item";
bear.className="item";
Basket.className="item";
price.innerText="14.99";
element.scrollIntoView();
}else{
	pinkpig.className="item";
}

if(selectElement.value=="Bear"){
Tiger.className="item";
Rabbit.className="item";
Pig.className="item";
Dog.className="item";
pug.className="item";
pinkpig.className="item";
minipig.className="item";
bear.className="item active";
Basket.className="item";
element.scrollIntoView();
price.innerText="14.99";
}else{
	bear.className="item";
}

if(selectElement.value=="Mini Pig"){
Tiger.className="item";
Rabbit.className="item";
Pig.className="item";
Dog.className="item";
pug.className="item"
pinkpig.className="item";
minipig.className="item active";
bear.className="item";
Basket.className="item";
price.innerText="10.00";
element.scrollIntoView();
}else{
	minipig.className="item";
}
if(selectElement.value=="Pug"){
Tiger.className="item";
Rabbit.className="item";
Pig.className="item";
Dog.className="item";
pug.className="item active"
pinkpig.className="item";
minipig.className="item";
bear.className="item";
Basket.className="item";
price.innerText="15.99";
element.scrollIntoView();
}else{
	pug.className="item";

}


});