let list = [];
let input = document.querySelector(".title");
let add = document.querySelector(".add");
let id = 0;
let ToDoListContainer = document.querySelector(".toDoListContainer");
let editItem;
add.addEventListener("click",function(){
	
	if(!editItem){
		id +=1;
		list.push({
			title:input.value,
			id:id,
			isCompleted:false,
		});
		
	} else {
		list = list.map(function(item) {
			if (item.id === editItem.id) {
					item.title = input.value;
			}
		  	return item;
		});
		add.innerHTML = "add";
	}
	draw();
	input.value = "";
	editItem = undefined;
})

function draw(){
	ToDoListContainer.innerHTML = "";
	for(let item of list){
		let htmlContent = "<div class = 'toDoListTitle "+((item.isCompleted)? " completed ": "")+"' > <div class = 'itemTitle'>  "+item.title+" </div> <div> <button data-id =  '"+item.id+"' class = 'edit'> Edit </button> <button data-id =  '"+item.id+"' class = 'remove'> Remove </button> <button data-id =  '"+item.id+"' class = 'done'> Done </button> </div> </div>";
		ToDoListContainer.innerHTML += htmlContent;
	}

	
	
}

ToDoListContainer.addEventListener("click", function(event){
  	if(event.target.classList.contains("remove")){
  		let toDoId = event.target.dataset.id;
  		list = list.filter(function(item) {
		  return item.id !== +toDoId;
		});
		draw();
		
  	}


  })

ToDoListContainer.addEventListener("click", function(event){
  	if(event.target.classList.contains("edit")){
  		let toDoId = event.target.dataset.id;
  		editItem = list.find(function(item) {
		  return item.id == +toDoId;
		});
		input.value = editItem.title;
  		add.innerHTML = "save";
		
  	}
  })


	ToDoListContainer.addEventListener("click", function(event){
  	if(event.target.classList.contains("done")){
  		let toDoId = event.target.dataset.id;
  		
  		list = list.map(function(item) {
			if (item.id === +toDoId) {
					if(item.isCompleted == false){
						item.isCompleted = true;
					} else {
						item.isCompleted = false;
					}
			}
		  	return item;
		});
		draw();
  	}
  })