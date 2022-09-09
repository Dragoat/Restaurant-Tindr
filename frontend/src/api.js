const API_KEY = 'NFObK7SDG3Ydps6H3FWcww0uarQlzVqnY_osBgmG4wg-9K2v7bVsu5fachNVIxtuxL6Eknh0Su4EnukxiVVGlxaSF_U0a444-gqV0vnTjvs7w4C-1rYr68jKgn8OY3Yx'

const apiData = {
    async search(term, location) {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        });
        const jsonRes = await res.json();
        if (jsonRes.businesses) {
            return jsonRes.businesses.map(business => ({
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                isClosed: business.is_closed, //not displaying anything yet
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                transactions: business.transactions, 
                latitude: business.coordinates.latitude,
                longitude: business.coordinates.longitude,
                category: business.categories[0].title,
                rating: business.rating,
                displayPhone: business.display_phone,
                reviewCount: business.review_count
            }));
        }
  }
};

export default apiData;