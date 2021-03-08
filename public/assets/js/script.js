document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  
    // UPDATE
    const changeDevouredBtn = document.querySelectorAll('#burger-ready');
  
    // Set up the event listener for the create button
    if (changeDevouredBtn) {
      changeDevouredBtn.forEach((button) => {
          button.addEventListener('click', (e) => {
          e.preventDefault();
          // Grabs the id of the element that goes by the name, "id"
          const id = e.target.getAttribute('data-id');
        
          const newDevourState = {
            devoured: true,
          };
  
          fetch(`/api/burgers/devoured/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            // make sure to serialize the JSON body
            body: JSON.stringify(newDevourState),
          }).then((response) => {
            // Check that the response is all good
            // Reload the page so the user can see the new quote
            if (response.ok) {
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      
      })
    }
  
    // CREATE
    const createBurgerBtn = document.getElementById('add-burger');
  
    if (createBurgerBtn) {
      createBurgerBtn.addEventListener('submit', (e) => {
        e.preventDefault();
  
        // Grabs the value of the textarea that goes by the name, "quote"
        const newBurger = {
          burger_name: document.getElementById('enter-burger').value.trim(),
          devoured:false,
        };
  
        // Send POST request to create a new quote
        fetch('/api/burgers', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          // make sure to serialize the JSON body
          body: JSON.stringify(newBurger),
        }).then(() => {
          // Empty the form
          document.getElementById('enter-burger').value = '';
  
          // Reload the page so the user can see the new quote
          console.log('Created a new burger!');
          location.reload();
        });
      });
    }
  
});