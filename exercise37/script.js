

const blogpostForm = document.querySelector("#blogpost-form")
const blogInput = document.querySelector("#blogpost-input");
const blogImage = document.querySelector("#blogpost-image");
const blogText = document.querySelector("#blogpost-text");
const blogList= document.querySelector("#blog-list")

document.addEventListener("DOMContentLoaded", loadPosts)


function loadPosts(){
    const posts=getPostsFromLocalStorage();

    posts.forEach(post =>{
        addPostToDom(post) 
    })
}



blogpostForm.addEventListener("submit", addBlog);

function addBlog(e){

    e.preventDefault()
 
    

    const blogPost=blogInput.value
    const content = blogText.value;
   const image = blogImage.value;

    if(blogPost !=="" && content !== ""){

        
        const post={
            id:Date.now(),
            text:blogPost,
            content:content,
              image: image
          
         
            
        }

        addPostToDom(post)
       savePostToLocalStorage(post)
         blogInput.value = "";
        blogText.value = "";
        blogImage.value="";
    }
}







function addPostToDom(post){

    const li=document.createElement("p")
  
    li.classList=`post-item`;


    li.dataset.id=post.id
   


    li.innerHTML=`<h3 class="post-title">${post.text}</h3>
    ${post.image ? `<img src="${post.image}" class="post-image" />` : ""}
             <p class="blog-post">${post.content}</p>
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>`

 
          
            blogList.appendChild(li)

            attachEventListeners(li, post)
          
}

function attachEventListeners(li, post){

    const deleteBtn=li.querySelector(".delete-btn")
   
    const editBtn=li.querySelector(".edit-btn")

    deleteBtn.addEventListener("click", function(){
       
        handleDelete(post.id, li)
    })

    editBtn.addEventListener("click", function(){
        handleEdit(post.id, li)
    })
}



function handleEdit(postId, li){
    const titleEl = li.querySelector(".post-title");
    const content = li.querySelector(".blog-post");
    const image = li.querySelector(".post-image");


    const currentTitle = titleEl.textContent;
    const currentContent = content.textContent;
    const currentImage = image ? image.src : "";

    
    const newTitle = prompt("Edit title:", currentTitle);
    const newContent = prompt("Edit content:", currentContent);
    const newImage = prompt("Edit image URL:", currentImage);

    if(newTitle && newContent){
       
        updatePost(postId, newTitle, newContent, newImage);

        
        titleEl.textContent = newTitle;
        content.textContent = newContent;

       
        if(newImage){
            if(image){
                image.src = newImage; 
            } else {
                
                const img = document.createElement("img");
                img.src = newImage;
                img.classList.add("post-image");

                li.insertBefore(img, content);
            }
        } else {
           
            if(image){
                image.remove();
            }
        }
    }
}


function updatePost(id, newTitle, newContent, newImage){
    const posts = getPostsFromLocalStorage();

    const post = posts.find(post => post.id == id);

    if(post){
        post.text = newTitle;
        post.content = newContent;
        post.image = newImage;

        localStorage.setItem("posts", JSON.stringify(posts));
    }
}

function handleDelete(id,li){
    let posts= getPostsFromLocalStorage()

    posts=posts.filter(post=> post.id != id)
       
    localStorage.setItem('posts', JSON.stringify(posts))

    li.remove()
   
}


function savePostToLocalStorage(post){

   const oldPosts = getPostsFromLocalStorage();

   


    oldPosts.push(post)

    localStorage.setItem("posts", JSON.stringify(oldPosts));

   
}


function getPostsFromLocalStorage(){

    const posts= localStorage.getItem("posts");

    if(!posts){
        return [];
    }

    try{
        return JSON.parse(posts);
    }catch(error){
        return [];
    }
}