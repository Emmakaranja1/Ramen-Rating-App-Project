const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "https://i.pinimg.com/474x/26/f1/19/26f119326fc93d7b4a387c3b4dedb75a.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "https://i.pinimg.com/236x/10/fb/b5/10fbb5f46b9e4a6b66fd73927c700eb5.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "https://i.pinimg.com/236x/db/07/2d/db072d20bc9a2de134c1a39b52f320a3.jpg", rating: null, comment: null }
];

// Function to display ramen images with names
function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    ramenMenu.innerHTML = ''; // Clear existing images
    
    ramens.forEach(ramen => {
        const ramenContainer = document.createElement('div');
        ramenContainer.classList.add('ramen-container');
        
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.classList.add('ramen-image');
        img.addEventListener('click', () => handleClick(ramen));

        const ramenName = document.createElement('p');
        ramenName.textContent = ramen.name;
        ramenName.classList.add('ramen-name');
        
        ramenContainer.appendChild(img);
        ramenContainer.appendChild(ramenName);
        
        ramenMenu.appendChild(ramenContainer);
    });
}

// Function to handle ramen image click
function handleClick(ramen) {
    document.getElementById('ramen-name').textContent = ramen.name;
    document.getElementById('ramen-restaurant').textContent = ramen.restaurant;

    const selectedRamenImage = document.getElementById('selected-ramen-image');
    selectedRamenImage.src = ramen.image;
    selectedRamenImage.alt = ramen.name;

    document.getElementById('rating-value').textContent = ramen.rating !== null ? ramen.rating : 'N/A';
    document.getElementById('comment-value').textContent = ramen.comment !== null ? ramen.comment : 'N/A';

    document.getElementById('selected-ramen-container').style.display = 'block';
}

// Function to handle new ramen form submission
function addSubmitListener() {
    const form = document.getElementById('new-ramen-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const newRamen = {
            id: ramens.length + 1,
            name: document.getElementById('name').value,
            restaurant: document.getElementById('restaurant').value,
            image: document.getElementById('image').value,
            rating: document.getElementById('rating').value,
            comment: document.getElementById('comment').value
        };

        ramens.push(newRamen);
        displayRamens();
        form.reset();
        handleClick(newRamen);
        document.getElementById('new-ramen-form').style.display = 'none';  // Hide the form after submission
    });
}

// Function to toggle the form visibility
function toggleForm() {
    const form = document.getElementById('new-ramen-form');
    form.style.display = form.style.display === 'none' || form.style.display === '' ? 'block' : 'none';
}

// Main function to initialize the app
function main() {
    displayRamens();
    addSubmitListener();
    document.getElementById('Add-Ramen-ramen').addEventListener('click', toggleForm); // Toggle form visibility on button click
}

// Wait for the DOM content to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', main);

