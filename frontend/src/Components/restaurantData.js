// const API_KEY = 'NFObK7SDG3Ydps6H3FWcww0uarQlzVqnY_osBgmG4wg-9K2v7bVsu5fachNVIxtuxL6Eknh0Su4EnukxiVVGlxaSF_U0a444-gqV0vnTjvs7w4C-1rYr68jKgn8OY3Yx'

// const restaurantData = {
//     async search(id) {
//     const res = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}`, {
//             headers: {
//                 Authorization: `Bearer ${API_KEY}`
//             }
//         });
//         const jsonRes = await res.json();
//         if (jsonRes.businesses) {
//             return jsonRes.businesses.map(info => ({
//                 id: info.id,
          
//             }));
//         }
//   }
// };

// export default restaurantData;