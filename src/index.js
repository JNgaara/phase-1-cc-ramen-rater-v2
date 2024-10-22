// index.js

// Callbacks
const handleClick = (ramen) => {
  // Add code
};

const addSubmitListener = () => {
  // Add code
  function saveNewRamen(){(id, newName, newRestaurant, newImage, newRating, newComment) => {

    const newRamen = {
      name: newName,
      restaurant: newRestaurant,
      image : newImage,
      rating: parseFloat(newRating), // Ensure amount is numeric
      comment: newComment
    };

    fetch(`${'http://localhost: 3000URL'}/${id}`, {
      method: "PATCH", // Using PATCH for partial updates
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newRamen)
    })
      .then(response => response.json())
      .then(NewRamen => {
        console.log("Ramen added:", newRamen);
        location.reload(); // Refresh the page to reflect the changes (optional)
      })
      .catch(error => console.error("Error updating transaction:", error));
  };


  }
  /*"id": 1,
        "name": "Shoyu Ramen",
        "restaurant": "Nonono",
        "image": "./assets/ramen/shoyu.jpg",
        "rating": 7,
        "comment": "Delish. Can't go wrong with a classic!"*/
}

const displayRamens = () => {
  // Add code
};

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
