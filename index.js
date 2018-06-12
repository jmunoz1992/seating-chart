const students = [
  'Andrew Wenman',
  'Caitlin Trussell',
  'Chris Jones',
  'Chris Miller',
  'Cody Fayolle',
  'Dan Feeney',
  'Daniel Simandl',
  'David Fudacz',
  'David Lu',
  'Jaime Syvino',
  'Joey Deeds',
  'John Walsh',
  'Josh Remaley',
  'Mary Warrick',
  'Matthew Chan',
  'Nick Angelos',
  'Olivia Lam',
  'Rashaun Warner',
  'Richard Liang',
  'Ricky Li',
  'Roman Zalov',
  'Samson Fanuel',
  'Samuel Kogan',
  'Vi Tran',
  'Victor Barrancos',
  'Jasmine Munoz',
];

document.getElementById('randomize-btn').addEventListener("click", function() {
  const newStudents = shuffle(students);
  let index = 1;
  newStudents.map(student => {
    const getTable = document.getElementById(`seat${index}`);
    if (getTable.childNodes.length) {
      getTable.removeChild(getTable.childNodes[0]);
    }
    const nameTag = document.createElement('p');
    const name = document.createTextNode(student);
    nameTag.appendChild(name);
    getTable.appendChild(nameTag);
    index++;
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
