const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const sidebar = document.querySelector('.nav-list');

const showMenu = () => {
    line1.classList.toggle('active');
    line2.classList.toggle('active');
    line3.classList.toggle('active');
    sidebar.classList.toggle("active");
};

const handleSearch = (event) => {
    event.preventDefault();
    const searchInput = document.getElementById('ai-search-input').value;
    if (searchInput) {
        window.location.href = `search.html?query=${encodeURIComponent(searchInput)}`;
    }
};

const displaySearchResults = () => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('query');
    if (query) {
        const searchResultsContent = document.querySelector('.search-results-content');
        searchResultsContent.innerHTML = `<p>Results for: ${query}</p>`;
        
        // Updated dummy search results with correct mapping for title, location, beds, area, and price
        const results = [
            { title: 'Beautiful Family House', location: 'New York', price: '$1,200,000', beds: 4, area: '3500 sqft', image: './images/house1.png' },
            { title: 'Modern Apartment', location: 'San Francisco', price: '$850,000', beds: 3, area: '2000 sqft', image: './images/house2.png' },
            { title: 'Cozy Cottage', location: 'Austin', price: '$450,000', beds: 2, area: '1500 sqft', image: './images/house3.png' }
        ];

        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('product-card');
            resultItem.innerHTML = `
                <img src="${result.image}" alt="${result.title}" class="product-img">
                <div class="card-info">
                    <h2 class="product-title">${result.title}</h2>
                    <div class="card-info-content">
                        <img src="./images/location.svg" alt="Location">
                        <p class="location-name">${result.location}</p>
                    </div>
                    <div class="card-info-content">
                        <div class="content">
                            <img src="./images/bed.svg" alt="Beds">
                            <p>${result.beds} Beds</p>
                        </div>
                        <div class="content">
                            <img src="./images/size.svg" alt="Area">
                            <p>${result.area}</p>
                        </div>
                    </div>
                    <div class="price">
                        <p>${result.price}</p>
                        <a href="#" class="booking-btn">Book Now</a>
                    </div>
                </div>
            `;
            searchResultsContent.appendChild(resultItem);
        });
    }
};

if (window.location.pathname.endsWith('search.html')) {
    displaySearchResults();
}

TweenMax.from('.navbar', 1, {
    delay: 0.3,
    x: -40,
    opacity: 0,
    ease: Expo.easeInOut
});
TweenMax.from('.header-headline', 2, {
    delay: 0.5,
    y: 80,
    opacity: 0,
    ease: Expo.easeInOut
});
TweenMax.from('.header-subtitle', 3, {
    delay: 0.5,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
});
TweenMax.from('.cta', 4, {
    delay: 0.5,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
});
TweenMax.from('form', 5, {
    delay: 0.3,
    y: 80,
    opacity: 0,
    ease: Expo.easeInOut
});
TweenMax.from('.product-info', 6, {
    delay: 0.5,
    x: -100,
    opacity: 0,
    ease: Expo.easeInOut
});
TweenMax.from('.product-card', 7, {
    delay: 0.5,
    y: 200,
    opacity: 0,
    ease: Expo.easeInOut
});
