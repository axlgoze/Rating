const raitingContainer = document.querySelector(".rating-card__items");
let currentValue = 0;
let limit = 5;

const html = Array.from(Array(limit)).map((_,i) =>{
    return `
        <div class="item item-${i}" data-pos="${i}"></div>
    `;
});

raitingContainer.innerHTML = html.join('');

document.querySelectorAll('.item').forEach((item) => {
    item.addEventListener('mouseover', (e) => {
        
        const position = item.getAttribute('data-pos');

        if (currentValue === parseInt(position) + 1) {
            return;
        }

        document.querySelectorAll('.item').forEach((item) => {
            if (item.classList.contains('item--active')) {
                item.classList.remove('item--active');
            }
        });

        for (let i = 0; i <= position; i++) {
            const active = document.querySelector(`.item-${i}`);
            if (!active.classList.contains('item--active')) {
                active.classList.add('item--active');
            }
        }

        currentValue = parseInt(position) + 1;

        // Update the displayed selected rating
        document.getElementById('selected-rating').textContent = currentValue;
    });
});

// Reset button functionality
const resetButton = document.getElementById('reset-rating');
resetButton.addEventListener('click', () => {
    document.querySelectorAll('.item').forEach((item) => {
        item.classList.remove('item--active');
    });
    currentValue = 0;
    document.getElementById('selected-rating').textContent = 'None';
});

// Submit button functionality
const submitButton = document.getElementById('submit-rating');
submitButton.addEventListener('click', () => {
    if (currentValue === 0) {
        alert('Please select a rating before submitting.');
    } else {
        alert(`You submitted a rating of ${currentValue}.`);
    }
});


