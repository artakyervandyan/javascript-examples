const posts = document.querySelector(".posts");
const container = document.querySelector(".container");
let htmlContnet = "";

container.addEventListener("click", function(event){
  if(event.target.classList.contains("select")){
    let userId = event.target.dataset.id;
    getPost(userId);

  }
});

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(json => {
	for(let item of json){
		htmlContnet += "<div> <div> "+item.name+" </div> <div> "+item.email+" </div> <div> "+item.address.city+" </div> <button data-id = '"+item.id+"' class = 'select'> Select </button> </div>";
	}

	container.innerHTML = htmlContnet;
});

function getPost(userId){
  fetch("https://jsonplaceholder.typicode.com/posts?userId="+userId)
  .then(response => response.json())
  .then(json =>{
      for(let item of json){
        const htmlPosts = "<div> <div>"+item.title+"</div> </div>";
        posts.innerHTML += htmlPosts;  
      }
     
  })
}

