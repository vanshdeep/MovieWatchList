
const movieList = document.querySelector('#movie-list');

const myForm = document.querySelector('#film-form');



//Event Listener

myForm.addEventListener('submit', AddtoMovieList);



//Function

function AddtoMovieList(e){
    e.preventDefault();


    //form input values
    var titleInput =document.querySelector('#title').value;
    var YearInput =document.querySelector('#year').value;
    var ReviewInput =document.querySelector('#review').value;
    var RatingInput = document.querySelector('#rating').value;

    if(titleInput === '' || YearInput === '' || ReviewInput === '' || RatingInput === ''){
      //Add danger message
      
      const msg = document.querySelector('.msg');
  
      msg.textContent = "Please fill all fields";
      setTimeout(function(){document.querySelector('.msg').remove()},1500);
      
    }else{



      
  
    //new row
    const row = document.createElement('tr');



    row.innerHTML = `
                <td class = "table-title">${titleInput}</td>
                <td class = "table-year">${YearInput}</td>
                <td class = "table-review">${ReviewInput}</td>
                <td class = "table-rating">${RatingInput}</td>
                <td class = "btn btn-danger delete" onclick="deleteCheck(event)"><a><i class="fas fa-trash-alt"></i></a></td>
                <td class = "btn btn-success " onclick="completeCheck(event)"><a><i class="fas fa-file-video"></i></a></td>
                `;
                
                            
    row.className = 'table-row';

   

  // Append movie to row
    movieList.appendChild(row);
  

      
    
    //Clear form values

    document.querySelector('#title').value = "";
    document.querySelector('#year').value = "";
    document.querySelector('#review').value = "";
    document.querySelector('#rating').value = "";

      // Add success msg
      const msg1 = document.querySelector('.msg1');
        
      msg1.textContent = "Movie added to list";
      setTimeout(function(){document.querySelector('.msg1').remove()},1500);
    
}
}



//Delete Button

function deleteCheck(event) {
    var x = event.currentTarget;

    x.parentNode.remove();
}



//Complete Btn
  function completeCheck(event) {
    var x = event.currentTarget;
    
    x.parentNode.classList.toggle("complete");
}


