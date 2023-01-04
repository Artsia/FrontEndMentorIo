let ratings = document.querySelectorAll('.btn_round');
let submit_container = document.querySelector('.submit_container');
let returned_info_container = document.querySelector('.returned_info_container');
let btn = document.getElementById('btn');
let span = document.getElementById('rating');


ratings.forEach(rating => {
    rating.addEventListener('click', () => {
      ratings.forEach(rating => rating.classList.remove('selected'));
      rating.classList.add('selected');
    });
  });
  
  btn.addEventListener('click', () => {
    submit_container.style.display = 'none';
    returned_info_container.style.display = 'block';
    span.innerHTML = document.querySelector('.selected').innerHTML;
  });

/**To FUTURE SELF
 * This code is defining several variables that refer to elements in the DOM (the structure of a web page). 
 * It is then setting up an event listener on each of the elements with the class btn_round. 
 * When one of those elements is clicked, the code loops through all of the elements with the class btn_round and removes the selected class from them. 
 * It then adds the selected class to the element that was clicked.

The code is also setting up an event listener on the element with the id of btn.(IGNORE) 
When that element is clicked, the code hides the element with the class submit_container and shows the element with the class returned_info_container.
 It also sets the innerHTML of the element with the id of rating to the value of the clicked element.
 **/

/**OR */

/*
 When the user clicks on one of the elements with the class btn_round, that element becomes highlighted to indicate that it has been selected. 
 The user can then click the button with the id of btn to submit their rating. 
 When the button is clicked, the current rating selection is displayed in the span element and the current rating selection and the button are hidden.
 * 
 */