
document.querySelectorAll('.sidebar .item').forEach(item => {
    item.addEventListener('click', () => {
        console.log("Sidebar item clicked:", item.innerText);
    });
});

document.querySelector('.signout').addEventListener('click', () => {
    alert("You have been signed out!");
    location.href = "login.html"; 
    localStorage.clear();
});

document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('click', () => {
        alert(card.querySelector('h3').innerText + " selected");
    });
});

document.querySelectorAll('.github-card li').forEach(item => {
    item.addEventListener('click', () => {
        alert("GitHub item: " + item.innerText);
    });
});

document.querySelectorAll('.business-card').forEach(card => {
    card.addEventListener('click', () => {
        alert("Business section: " + card.querySelector('h3').innerText);
    });
});
