// This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;
// The constructor should accept two arguments: text and cloze.
// The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.

// The constructed object should have a partial property that contains only the partial text.

// The constructed object should have a fullText property that contains only the full text.
// The constructor should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.

var ClozeCard = function(text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
    this.partial = text.replace(cloze, '...');
    this.brokenClozeSearch = function() {
        var search = fullText.match(this.cloze);
        if (search === null) {
            console.log('that didn\'t work, silly!!');
        };
        brokenClozeSearch();
    }

}

var firstPresidentCloze = new ClozeCard('George Washington was the first president of the United States.', 'George Washington');

var brokenCloze = new ClozeCard('This doesn\'t work', 'oops');

console.log("\n\nCloze: "+ firstPresidentCloze.cloze);
console.log("\n\nPartial: "+ firstPresidentCloze.partial);
console.log("\n\nfullText: "+ firstPresidentCloze.fullText);

console.log(brokenCloze.partial);

module.exports = ClozeCard;