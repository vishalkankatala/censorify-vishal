var censored_words = ["sad","bad","mad"];
var custom_censored_words = [];
function censor(intStr) {
 	for (idx in censored_rods){
		inStr = inStr.replace(censoredWords[idx], "****");
		}
	for(idx in customCensoredWords)	{
		inStr = inStr.replace(customCensoredWords[idx], "****")
		}
		return inStr;}

function addCensoredWord(word){
	customCensoredWords.push(word);
}

function getCensoredWords(){
	return censoredWords.concat(customCensoredWords);
}
export.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCesnoredWords = getCensoredWords;





		
