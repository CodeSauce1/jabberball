
let selectElement = document.getElementById('select');
let img=document.querySelector('.anml');
let width=window.screen.availWidth;
let footer=document.querySelector('.fotr')
let body=document.querySelector('.body')
let moneh=document.querySelector('.money')

selectElement.addEventListener('change', (event) => {
if(selectElement.value=="Tiger"){
img.src="https://ae01.alicdn.com/kf/Hc8ad1335a9ff4249b7169a5ca8fd49ca1.jpg"
body.style.background="#e0c9cb"
	moneh.style.color="#b76e79"
}
if(selectElement.value=="Dog"){
img.src="https://ae01.alicdn.com/kf/H2f1a1ef0c34d49f18e8dcacf26be60158/Stress-Relieve-Toy-Kids-Toy-Talking-Animal-Jabber-Ball-Tongue-Out-Squeeze-Doll-Funny-Soft-Ball.jpg_640x640.jpg"
body.style.background="	#FFFFE0"
moneh.style.color="	CCCC00"
}
if(selectElement.value=="Rabbit"){
img.src="https://ae01.alicdn.com/kf/Ha345252171bc4dc18d36f807798d439bR.jpg"
body.style.background="skyblue"
moneh.style.color="skyblue"
}
if(selectElement.value=="Pig"){
img.src="https://ae01.alicdn.com/kf/H38aaec0f42384e39bb09afb0d052fb42w/Stress-Relieve-Toy-Kids-Toy-Talking-Animal-Jabber-Ball-Tongue-Out-Squeeze-Doll-Funny-Soft-Ball.jpg_640x640.jpg"
body.style.background="#b19cd9"
moneh.style.color="#b19cd9"
}

});




const progressDone = document.querySelectorAll('.progress-done');

progressDone.forEach(progress => {
	progress.style.width = progress.getAttribute('data-done') + '%';
});


// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});