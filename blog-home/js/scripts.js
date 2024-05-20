/*!
* Start Bootstrap - Blog Post v5.0.9 (https://startbootstrap.com/template/blog-post)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-post/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


document.getElementById('button-search').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const blogPosts = document.querySelectorAll('#blog-posts .card');
    
    blogPosts.forEach(function(post) {
        const title = post.getAttribute('data-title').toLowerCase();
        if (title.includes(searchTerm)) {
            post.style.display = '';
        } else {
            post.style.display = 'none';
        }
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