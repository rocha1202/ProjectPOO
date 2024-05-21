
// Get data from local storage
const storedUsers = localStorage.getItem('userData');

// If data exists in local storage, parse it and use it
let users = [];
if (storedUsers) {
    users = JSON.parse(storedUsers);
}

// Function to render user rows
function renderUserList(userList) {
    const userListContainer = document.getElementById('user-list');
    userListContainer.innerHTML = ''; // Clear any existing content

    userList.forEach(user => {
        const userRow = document.createElement('div');
        userRow.classList.add('row', 'mb-1', 'rounded', 'border');

        const emailDiv = document.createElement('div');
        emailDiv.classList.add('col-md-6', 'align-self-center');
        emailDiv.textContent = user.email;

        const linkDiv = document.createElement('div');
        linkDiv.classList.add('col-md-6', 'text-right');

        const link = document.createElement('a');
        link.href = './userVer.html';

        const button = document.createElement('button');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Ver';

        link.appendChild(button);
        linkDiv.appendChild(link);

        userRow.appendChild(emailDiv);
        userRow.appendChild(linkDiv);

        userListContainer.appendChild(userRow);
    });
}

// Render the user list on page load
document.addEventListener('DOMContentLoaded', () => {
    renderUserList(users);
});