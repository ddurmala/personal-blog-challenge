
function goBack() {
    window.history.back();
}

function getPost() {
    const rawInput = localStorage.getItem('post');
    const post = JSON.parse(rawInput) || [];

    return post;
}

const posts = getPost();

console.log(posts);

const blogPosts = document.querySelector('.blog-posts');

function createBlogPost(postObj) {
    const template = `
    <div class="post">
        <h3>${postObj.title}</h3>
        <hr>
        <p>${postObj.content}</p>
        <hr>
        <p>${postObj.user}</p>
    </div>
    `
    blogPosts.innerHTML += template;
}

// make a for loop

for (let i = 0; i < posts.length; i++) {
    const eachPost = posts[i];
  createBlogPost(eachPost);  
}

