
function variationOne(sentence) {
  let output = document.querySelector('#variation-one');
  let newSentence = sentence;

  newSentence = newSentence.replace(' babies ', ' dogs');
  newSentence = newSentence.replace(' Laughing ', "<span style='font-size: 5em;'> Laughing </span>");
  newSentence = newSentence.replace(' bath ', "<span style='color: light blue;'>, bath </span>");

  output.innerHTML = newSentence;
}


let input = document.querySelector('#sentence');

// recomput when the input text changes
input.addEventListener('input', function () {
  let sentence = input.value;
  variationOne(sentence);

});

// also comput when the page loads

variationOne(input.value);

