// public/js/upload.js
dbButton.addEventListener('click', function(event) { // Dashboard button
    event.preventDefault();
    window.location.href = '/dashboard';
});

const darkModeToggle = document.getElementById('dark-mode-toggle'); // Dark mode button
const body = document.body;
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});

// Meant to show list of files uplaoded. Doesnt work, but doesnt break anything either, so I'm keeping it.
fetch('/files')
    .then(response => response.json())
    .then(fileData => {
        const fileContainer = document.getElementById('fileContainer');
        fileData.forEach(singleFile => {
            const fileElement = document.createElement('li');
            const fileAnchor = document.createElement('a');
            fileAnchor.href = `/files/${singleFile._id}`;
            fileAnchor.textContent = singleFile.name;
            fileElement.appendChild(fileAnchor);
            fileContainer.appendChild(fileElement);
        });
    })
    .catch(fetchError => {
        console.error('Error fetching file list:', fetchError);
    });
