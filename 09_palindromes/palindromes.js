const palindromes = function (phrase) {
    phrase = phrase.toLowerCase();
    const punctuation = /[.,?! ]/g;
    phrase = phrase.replace(punctuation, '');
    const arrayPhrase = phrase.split('');
    const arrayPhraseReverse = arrayPhrase.reverse();
    const reversePhrase = arrayPhraseReverse.join('');
    return phrase === reversePhrase;
};

// Do not edit below this line
module.exports = palindromes;
