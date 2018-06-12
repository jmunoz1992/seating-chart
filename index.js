const students =
  `Brandon Yee
  Chris Lusk
  Jehoshuah Knapp

  Michael Bush
  Nick Bohannan

  Diego Andres Hernandorena
  Kevin Lim

  Jerry Wu
  Matthew Noesen

  Jan Gierlach
  Patrick Kilgore

  Bradley Schwartz
  Jessica Smith

  Jacoby Kang
  Raymond Chao

  Matt Ehlinger
  Richard Hui

  Evelyn LaTour
  Hollie Lambert

  Brad Smith
  Eliot Davis

  Jeff Hauser
  Kayleen Offringa

  Brendan Meyer
  Zohaib Farooqi`;

console.log('students split ', students.split('\n'));

document.getElementById('randomize-btn').addEventListener("click", function() {
  const newStudents = students.split('\n');
  let index = 1;
  newStudents.map(student => {
    if (student !== "") {
      const getTable = document.getElementById(`seat${index}`);
      if (getTable.childNodes.length) {
        getTable.removeChild(getTable.childNodes[0]);
      }
      const nameTag = document.createElement('p');
      const name = document.createTextNode(student);
      nameTag.appendChild(name);
      getTable.appendChild(nameTag);
      index++;
    }
  });
});

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
