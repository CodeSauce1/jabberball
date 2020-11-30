// JavaScript source code

let selectElement = document.querySelector('.selectpicker');

let Tiger=document.getElementById('tiger')
let Rabbit=document.getElementById('rabbit')
let Pig=document.getElementById('pig')
let Dog=document.getElementById('dog')
let Basket=document.getElementById('basket')
let element = document.getElementById("product-imgs");

selectElement.addEventListener('change', (event) => {
if(selectElement.value=="Tiger"){
Tiger.className="item active";
Rabbit.className="item";
Pig.className="item";
Dog.className="item";
Basket.className="item";
element.scrollIntoView();

}else{
	Tiger.className="item"
}
if(selectElement.value=="Dog"){
Tiger.className="item";
Rabbit.className="item";
Pig.className="item";
Dog.className="item active";
Basket.className="item";
element.scrollIntoView();
}else{
	Dog.className="item"
}
if(selectElement.value=="Rabbit"){

Tiger.className="item";
Rabbit.className="item active";
Pig.className="item";
Dog.className="item";
Basket.className="item";
element.scrollIntoView();
}else{
	Rabbit.className="item"
}
if(selectElement.value=="Pig"){
Tiger.className="item";
Rabbit.className="item";
Pig.className="item active";
Dog.className="item";
Basket.className="item";
element.scrollIntoView();
}else{
	Pig.className="item"
}

});