
    document.addEventListener("DOMContentLoaded", function() {
        // Function to toggle full article visibility
        function toggleFullArticle(postId) {
            var fullArticle = document.getElementById("full-article-" + postId);
            if (fullArticle.style.display === "none") {
                fullArticle.style.display = "block";
            } else {
                fullArticle.style.display = "none";
            }
        }

        // Event listeners for "Read more" links
        document.getElementById("read-more-1").addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            toggleFullArticle(1); // Show/hide full article for post 1
        });

        document.getElementById("read-more-2").addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            toggleFullArticle(2); // Show/hide full article for post 2
        });

        document.getElementById("read-more-3").addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            toggleFullArticle(3); // Show/hide full article for post 3
        });
    });

