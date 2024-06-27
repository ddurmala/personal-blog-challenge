// targeting the form

const blogForm = document.querySelector('#blog-form');

// function that is called when the form is submitted

function getPost() {
    const rawInput = localStorage.getItem('post');
    const post = JSON.parse(rawInput) || [];

    return post;
}

// ?? do I need to make a separate function that gathers all the iputs and puts them together or should they stay separate?

function createPost(eventObj) {

    eventObj.preventDefault();

    // username infor
    const usernameInput = document.querySelector('#username');

    const usernameText = usernameInput.value;

    // title info
    const titleInput = document.querySelector('#title');

    const titleText = titleInput.value;

    // content infor
    const contentInput = document.querySelector('#content');

    const contentText = contentInput.value;

     if (!usernameText) {
        alert('Please provide your username');
        return;
    }

    if (!titleText) {
        alert('Please make a title for your post.');
        return;
    }

    if (!contentText) {
        alert('Add content to your post.');
        return;
    }

    // object value with username, title and content

    const blogObj = {
        user: usernameText,
        title: titleText,
        content: contentText
    }

    // use getInput function to retreive all input

    const post = getPost();

    // push the blogObj to the blog array

    post.push(blogObj);

    const jsonArray = JSON.stringify(post);

    // save the post array to local storage

    localStorage.setItem('post', jsonArray);

    // Clear Form fields
    usernameInput.value = '';
    titleInput.value = '';
    contentInput.value = '';

    
    // outputBlog();
   
    window.location = './blog.html';

} 


blogForm.addEventListener('submit', createPost);



/*blogForm.addEventListener('submit', function createPost(event) {
    event.preventDefault();

    perform validation
    if (validateForm()) {
        // store form data in local storage?

        storeFormData();

        // redirect to new page

        window.location.href = 'blog.html';
        // replace blog.htm w the url of new page

    }
});

function validateForm() {

}*/
