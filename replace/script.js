
$(function () {

  let txt = "Governments of the Industrial World, you weary giants of flesh and steel, I come from Cyberspace, the new home of Mind. On behalf of the future, I ask you of the past to leave us alone. You are not welcome among us. You have no sovereignty where we gather. We have no elected government, nor are we likely to have one, so I address you with no greater authority than that with which liberty itself always speaks. I declare the global social space we are building to be naturally independent of the tyrannies you seek to impose on us. You have no moral right to rule us nor do you possess any methods of enforcement we have true reason to fear.";

  $('#words').html(txt);
  setTimeout(nextWord, 1000);

  // replace one random word in the text
  function nextWord() {

    let words = RiTa.tokenize(txt); // split into words

    // loop from a random spot
    let r = Math.floor(Math.random()*words.length);
    for (let i = r; i < words.length + r; i++) {

      let idx = i % words.length;
      let word = words[idx].toLowerCase();
      if (word.length < 3) continue; // len >= 3

      // find related words
      let pos = RiTa.tagger.allTags(word)[0];
      let rhymes = RiTa.rhymes(word, { pos });
      let sounds = RiTa.soundsLike(word, { pos });
      let spells = RiTa.spellsLike(word, { pos });
      let similars = [...rhymes, ...sounds, ...spells];

      // only words with 2 or more similars
      if (similars.length < 2) {
        console.log("No sims for " + word);
        continue;
      }

      // pick a random similar
      let next = RiTa.random(similars);

      if (next.includes(word) || word.includes(next)) {
        continue;                     // skip substrings
      }
      if (/[A-Z]/.test(words[idx][0])) {
        next = RiTa.capitalize(next); // keep capitals
      }
      
      console.log("replace(" + idx + "): " + word + " -> " + next);
      words[idx] = next;             // do replacement
      break;
    }

    // recombine into string and update
    $('#words').html(txt = RiTa.untokenize(words));

    setTimeout(nextWord, 2000);
  }
});