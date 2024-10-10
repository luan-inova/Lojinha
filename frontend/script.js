function loadPage(page) {
    const content = document.getElementById('content');
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(html => {
            content.innerHTML = html;
        });
}