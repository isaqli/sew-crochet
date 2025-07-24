//tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar .nav-link');
    const tabContents = document.querySelectorAll('.tab-content');
    function showTab(tabId) {
        // Hide all tab contents
        tabContents.forEach(tab => tab.classList.remove('active'));
        // Remove active class from all nav links
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Show the selected tab content
        document.getElementById(tabId).classList.add('active');
        // Add active class to the clicked nav link
        document.querySelector(`.navbar .nav-link[data-tab="${tabId}"]`).classList.add('active');
    }
    // Set default tab
    showTab('beginner');
    // Add click event listeners to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            const tabId = this.getAttribute('data-tab'); // Get the tab ID from the clicked link
            showTab(tabId); // Show the corresponding tab
        });
    });
});