document.querySelector(".get-jokes")
        .addEventListener("click", getJokes);

function getJokes(e){
  let number = document.getElementById("number").value;
    console.log(number);

  const xhr = new XMLHttpRequest();
  xhr.open("GET",`http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if(this.status === 200) {
      const response = this.responseText;
      let jokes = JSON.parse(response);
      let output = "";
      if(jokes.type === "success"){
        jokes.value.forEach(function(joke){
          output += `
          <li>${joke.joke}</li>
          `
        
      })
      }
      else {
        output += `<li>Something went wrong</li>`;
      }
      document.querySelector(".jokes").innerHTML = output;
      }

    }
  
  
  
  xhr.send();

  e.preventDefault();
}