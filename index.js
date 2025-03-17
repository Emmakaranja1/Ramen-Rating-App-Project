const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "https://i.pinimg.com/474x/26/f1/19/26f119326fc93d7b4a387c3b4dedb75a.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "https://i.pinimg.com/236x/10/fb/b5/10fbb5f46b9e4a6b66fd73927c700eb5.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "https://i.pinimg.com/236x/db/07/2d/db072d20bc9a2de134c1a39b52f320a3.jpg", rating: null, comment: null }
];

// Function to display ramen images
function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    ramenMenu.innerHTML = ''; // Clear existing images
    
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.classList.add('ramen-image');
        img.addEventListener('click', () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}

// Function to handle ramen image click
function handleClick(ramen) {
    document.getElementById('ramen-name').textContent = ramen.name;

    const selectedRamenImage = document.getElementById('selected-ramen-image');
    selectedRamenImage.src = ramen.image; // Set the click image to show below
    selectedRamenImage.alt = ramen.name;

    document.getElementById('ramen-restaurant').textContent = `Restaurant: ${ramen.restaurant}`;
    document.getElementById('rating-value').textContent = ramen.rating !== null ? ramen.rating : 'N/A';
    document.getElementById('comment-value').textContent = ramen.comment !== null ? ramen.comment : 'N/A';

    document.getElementById('selected-ramen-container').style.display = 'block'; // Show selected ramen details
    document.getElementById('delete-ramen').onclick = () => deleteRamen(ramen.id);
}

// Function to handle new ramen form submission
function addSubmitListener() {
    const form = document.getElementById('new-ramen-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting normally
        
        const newRamen = {
            id: ramens.length + 1,
            name: document.getElementById('name').value,
            restaurant: document.getElementById('restaurant').value,
            image: document.getElementById('image').value,
            rating: document.getElementById('rating').value,
            comment: document.getElementById('comment').value
        };

        // Add the new ramen to the menu and display it
        ramens.push(newRamen);
        displayRamens(); // Refresh the ramen images to include the new entry
        form.reset(); // Reset form fields
        handleClick(newRamen); // Show details for new ramen
    });
}

// Function to delete ramen
function deleteRamen(id) {
    const indexToDelete = ramens.findIndex(ramen => ramen.id === id);
    if (indexToDelete !== -1) {
        ramens.splice(indexToDelete, 1);
        displayRamens();
        document.getElementById('selected-ramen-container').style.display = 'none'; // Hide details after deletion
    }
}

// Main function to initialize the app
function main() {
    displayRamens();
    addSubmitListener();
}

// Wait for the DOM content to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', main);