// Example blog posts stored in a JSON object
let posts = [
    {
        "title": "First Post",
        "content": "This is the content of the first post."
    },
    {
        "title": "Second Post",
        "content": "This is the content of the second post."
    }
];

// Function to render blog posts
function renderPosts() {
    const blogPostsSection = document.getElementById('blog-posts');
    blogPostsSection.innerHTML = ''; // Clear previous content

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        
        const postTitle = document.createElement('h3');
        postTitle.textContent = post.title;
        
        const postContent = document.createElement('p');
        postContent.textContent = post.content;

        postElement.appendChild(postTitle);
        postElement.appendChild(postContent);
        blogPostsSection.appendChild(postElement);
    });
}

// Function to add a new post
function addPost(event) {
    event.preventDefault();
    
    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');

    const newPost = {
        title: titleInput.value,
        content: contentInput.value
    };

    posts.push(newPost); // Add new post to the posts array
    renderPosts(); // Re-render posts

    titleInput.value = ''; // Clear input fields
    contentInput.value = '';
}

// Add event listener to the form
document.getElementById('post-form').addEventListener('submit', addPost);

// Initial render of blog posts
renderPosts();