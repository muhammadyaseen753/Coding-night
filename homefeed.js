let count = 0;

setInterval(() => {
    count++;
    document.querySelectorAll(".time").forEach(t => {
        t.innerText = count;
    });
}, 60000);

const feed = document.querySelector('.feed');

document.getElementById('Postify').addEventListener('click', function (e) {
    e.preventDefault();
    let count = 0;
    setInterval(() => {
    count++;
    document.querySelectorAll(".time").forEach(t => {
        t.innerText = count;
    });
}, 60000);
    const postText = document.getElementById('postText').value.trim();
    const postImg = document.getElementById('postImg').value.trim();

    if (postText === '') {
        alert('Post text cannot be empty.');
        return;
    }

    const newDiv = document.createElement('div');
    newDiv.classList.add("post");

    newDiv.innerHTML = `
        <div class="post-header">You • <span class="time">${count}</span> min ago</div>
        <div class="post-body">${postText}</div>
        ${postImg ? `<img src="${postImg}">` : ""}
        <div class="post-actions">
            <div class="delete">🗑 Delete</div>
        </div>
    `;


    feed.prepend(newDiv);

    document.getElementById('postText').value = "";
    document.getElementById('postImg').value = "";
});

feed.addEventListener('click', function(e) {
    if(e.target.classList.contains('delete')) {
        const post = e.target.closest('.post');
        if(post) post.remove();
    }
});


document.querySelector('.signout').addEventListener('click', () => {
    alert("You have been signed out!");
    location.href = "login.html"; 
    localStorage.clear();
});

 document.getElementById('anotherpostlike').addEventListener('click', function(e) {
    e.preventDefault();
    var likeDiv = document.getElementById('anotherpostlike');
    var parts = likeDiv.dataset.count; 
    var count = parseInt(parts);
    likeDiv.dataset.count = count;
    if(document.getElementById('anotherpostlike').classList.contains('liked')){
    count;
    document.getElementById('anotherpostlike').classList.remove('liked')
}
else{
    count++;
    document.getElementById('anotherpostlike').classList.add('liked')
}
    likeDiv.innerText = `❤️ ${count}`;
        feed.addEventListener('click', function(e) {
        if(e.target.classList.contains('delete')) {
        const post = e.target.closest('.post');
        if(post) post.remove();
    }
})});
 document.getElementById('like').addEventListener('click', function(e) {
    e.preventDefault();
    var likeDiv = document.getElementById('like');
    var parts = likeDiv.dataset.count; 
    var count = parseInt(parts);
    likeDiv.dataset.count = count;
    if(document.getElementById('like').classList.contains('liked')){
    count;
    document.getElementById('like').classList.remove('liked')
}
else{
    count++;
    document.getElementById('like').classList.add('liked')
}
    likeDiv.innerText = `❤️ ${count}`;
        feed.addEventListener('click', function(e) {
        if(e.target.classList.contains('delete')) {
        const post = e.target.closest('.post');
        if(post) post.remove();
    }
})});