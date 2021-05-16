var input=document.querySelector("input[type='text']")
var ul =document.querySelector("ul")
var btns = document.getElementsByClassName("trash")
var saveBtn=document.querySelector(".save")
var clearBtn=document.querySelector(".clear")


function deleteTodo(){
	for (let button of btns){
		button.addEventListener('click',function(){
			button.parentElement.remove()
		})
	}
}

input.addEventListener('keypress',function(keyPressed){
	if (keyPressed.which === 13){
		var li = document.createElement('li')
		var but = document.createElement('button')
		but.setAttribute('class', 'trash')
		but.innerHTML='X'

		var newTodo = input.value
		input.value = ' '

		ul.appendChild(li).append(but,newTodo)

		deleteTodo()
	}
})
function LoadTodo() {
	if(localStorage.getItem('todoList')){
		ul.innerHTML = localStorage.getItem('todoList')
	}
	deleteTodo()
}



saveBtn.addEventListener('click',function () {
	localStorage.setItem('todoList',ul.innerHTML)
})

clearBtn.addEventListener('click',function () {
	ul.innerHTML=''
	localStorage.removeItem('todoList',ul.innerHTML)
})

ul.addEventListener('click',function (event) {
	if(event.target.tagName==='LI'){
		event.target.classList.toggle('checked')
	}
})

LoadTodo()