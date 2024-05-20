/*!
* Start Bootstrap - Blog Post v5.0.9 (https://startbootstrap.com/template/blog-post)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-post/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project




//comment
document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsContainer = document.getElementById('comments-container');

    const comments = [];

    function renderComments() {
        commentsContainer.innerHTML = '';
        comments.forEach((comment, index) => {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('d-flex', 'mb-4');
            commentDiv.innerHTML = `
                <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..."></div>
                <div class="ms-3">
                    <div class="fw-bold">Commenter Name</div>
                    ${comment.text}
                </div>
            `;
            commentsContainer.appendChild(commentDiv);
        });
    }

    commentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const commentText = commentInput.value.trim();
        if (commentText !== '') {
            comments.push({ text: commentText });
            commentInput.value = '';
            renderComments();
        }
    });

    document.getElementById('submit-comment').addEventListener('click', function () {
        commentForm.dispatchEvent(new Event('submit'));
    });
});

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

