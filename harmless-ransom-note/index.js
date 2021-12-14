const harmlessRansomNote = (noteText, magazineText) => {
  const noteArr = noteText.split(' ');
  const magazineArr = magazineText.split(' ');

  const magazineObj = {};
  magazineArr.forEach(word => {
    if(!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  console.log(magazineObj)

  let noteIsPossible = true;
  noteArr.forEach(word => {
    if(magazineObj[word]) {
      magazineObj[word]--;
      if(magazineObj[word] < 0) noteIsPossible = false;
    }
    else noteIsPossible = false;
  });

  return noteIsPossible;
}

console.log(harmlessRansomNote('This is all about magazine text', 'This is all about the magazine text in this magazine'))