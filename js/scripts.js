
function getCelebrity(gender, hobbies, genre) {
  let celebrity = ''

  if (gender === "female") {
    celebrity = "Scarlett Johansson"
  } else if (gender === "male") {
    celebrity = "Robert Downey Jr."
  } else if (gender === "they") {
    celebrity = "Liv Hewson"
  }
  if (genre === "sci-fi") {
    celebrity = celebrity + " or Chris Hemsworth"
  } else if (genre === "fantasy") {
    celebrity = celebrity + " or Liv Tyler"
  } else if (genre === "rom-com") {
    celebrity = celebrity + " or Chris Klein"
  }

  return celebrity
}

$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();
    const hobbies = $("select#hobbies").val();
    const genre = $("select#genre").val();

    if (age >= 18) {
      const celebrity = getCelebrity(gender, hobbies, genre)
      
      alert('your celebrity match is: ' + celebrity)
    } else {
      alert("Please check back when you're 18, kiddo");
    }
      // let quote = (`100 - age) * 3;`
      // if (gender === 'male' && age < 26) {
      //   quote += 50;
      // }

      // $("#rate").text(quote);
      // $("#quote").show();
    // } else {
    //   alert('Please enter your age.');
    // }

    event.preventDefault();
  });
});