// Fetch posts from JSON file
function fetchPosts() {
    var url = '/static/posts.json';  // Example file path
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(post => {
                addPostToUI(post);
            });
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });
}

// Function to add a single post to the UI
// Function to add a single post to the UI
function addPostToUI(post) {
    var postListDiv = document.getElementById("postList");
    var postDiv = document.createElement("div");
    postDiv.classList.add("post-item");
    
    // Ensure tags is an array and join its elements
    var tagsString = Array.isArray(post.tags) ? post.tags.join(", ") : "";
    
    
    var y = `
        <h3 class = "post-content viewTitle" >${post.title}</h3>
        <p  class = "post-content viewDate" >Date: ${post.date}</p>
        <p  class = "post-content viewTags" >Tags: ${tagsString}</p>
    `;
   var x = `
        <h3 class = "post-content viewTitle" >${post.title}</h3>
        <p  class = "post-content viewDate" >Date: ${post.date}</p>
    `;
    
    postDiv.innerHTML = tagsString ? y : x;



    // Add click event listener to show post details
    postDiv.addEventListener("click", function() {
        var postContent = postDiv.querySelector(".post-content").textContent;
        displayPostDetails(post.title, post.date, post.tags, post.content);
    });

    postListDiv.appendChild(postDiv);
}


// Function to display post details in #postDisplay
function displayPostDetails(title, date, tags, content) {
    var postDisplayDiv = document.getElementById("postDisplay");
    var tagsString = Array.isArray(tags) ? tags.join(", ") : "";
    // <p class = "postStyles postTags">Tags: ${tagsString}</p>

    postDisplayDiv.innerHTML = `
        <h2 class ="postStyles postTitle">${title}</h2>
        <p class = "postStyles postDate" >${date}</p>
        <p class = "postStyles postContent">${content}</p>
    `;
}

// Event listener to fetch posts and populate UI when the page loads
window.addEventListener('load', function() {
    fetchPosts();
});
