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
    const contentInput = document.querySelector('#username');

    const contentText = contentInput.value;

    // ?Q? can I add content this way? by putting a <div> around the all inputs and getting their data?
    // const userInput = document.querySelector('.allUserInput');

    // object value with username, title and content

    const blogObj = {
        user: usernameText,
        title: titleText,
        content: contentText
    }

    // use getInput function to retreive all input???

    const post = getPost();

    // push the blogObj to the blog array??

    post.push(blogObj);

    const jsonArray = JSON.stringify(post);

    // save the post array to local storage

    localStorage.setItem('post', jsonArray);

    // clear any text that was previously entered in the input field.

    usernameInput = '';
    titleInput = '';
    contentInput = '';

    outputBlog();

}

blogForm.addEventListener('submit', createPost);