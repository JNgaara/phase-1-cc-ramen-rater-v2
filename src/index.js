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
      method: "Put", // use put to add new ramen
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newRamen)
    })
      .then(response => response.json())
      .then(NewRamen => {
        console.log("Ramen added:", newRamen);
        location.reload(); 
      })
      .catch(error => console.error("Error adding Ramen s:", error));
  };

  // Event Listener for Add new Ramen from form
  transactionForm.addEventListener("submit", function (event) {
    event.preventDefault();

  })

  // Create new Ramen object
  const newRamenObj = { id, name, restaurant, image,  ratingcomment, amount };

    // Add a new ramen to the db
      fetch("http://localhost:3000/Ramen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newRamen)
      })

      .then(newRamen => {
        console.log(newRamen);// Add a new Ramen to the Ramen list in the DOM
      addRamen(newRamen);
    })
    .catch(error => console.error("Error adding Ramen:", error));

    this.reset();
    };
    //End of adding ramen to db

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
