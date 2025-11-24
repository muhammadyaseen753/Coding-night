document.addEventListener('DOMContentLoaded', () => {
    const feed = document.querySelector('.feed');
    if(feed){
        feed.addEventListener('click', function(e){
            if(e.target.classList.contains('join')){
                e.preventDefault();
                alert('You have joined the challenge!');
                const post = e.target.closest('.post');
                if(post){
                    const counter = post.querySelector('.people-joined');
                    if(counter){
                        const current = parseInt(counter.innerText) || 0;
                        counter.innerText = current + 1;
                    }
                }
            }
        });
    }

    
    // Join button functionality
    if(feed){
        feed.addEventListener('click', function(e){
            if(e.target.classList.contains('join')){
                e.preventDefault();
                alert('You have joined the challenge!');
                const post = e.target.closest('.post');
                if(post){
                    const counter = post.querySelector('.people-joined');
                    if(counter){
                        const current = parseInt(counter.innerText) || 0;
                        counter.innerText = current + 1;
                    }
                }
            }
        });
    }

    // Post creation functionality
    document.getElementById('Postify').addEventListener('click', function(e) {
        e.preventDefault();
        
        const postText = document.getElementById('postText').value.trim();
        const postImg = document.getElementById('postImg').value.trim();
        const selectedRadio = document.querySelector('input[name="postDifficulty"]:checked');

        // Validation
        if (postText === '') {
            alert('Post text cannot be empty.');
            return;
        }
        
        if(!selectedRadio){
            alert('Please select a difficulty level.');
            return;
        }

        // Determine difficulty
        let difficultyClass, innerValue;
        const difficulty = selectedRadio.value;
        
        if(difficulty === 'easy'){
            difficultyClass = 'ez-button';
            innerValue = 'Easy';
        }
        else if(difficulty === 'medium'){
            difficultyClass = 'medium-button';
            innerValue = 'Medium';
        }
        else if(difficulty === 'hard'){
            difficultyClass = 'hard-button';
            innerValue = 'Hard';
        }

        // Create new post
        const newDiv = document.createElement('div');
        newDiv.classList.add("post");

        newDiv.innerHTML = `
            <div class="post-header">You • just now</div>
            <a href="#" class="${difficultyClass}" style="text-decoration: none; color: white;">${innerValue}</a>
            <br><br>
            <div class="post-body">${postText} • by you • <span class="people-joined">0</span> people joined</div>
            <div class="post-actions">
                <div class="join">join</div>
            </div>
            ${postImg ? `<img src="${postImg}" alt="" style="max-width: 100%;">` : ''}
        `;

        // Add to feed
        feed.prepend(newDiv);

        // Clear form
        document.getElementById('postText').value = "";
        document.getElementById('postImg').value = "";
        
        // Uncheck radio buttons
        document.querySelectorAll('input[name="postDifficulty"]').forEach(radio => {
            radio.checked = false;
        });
    });
    });
