function countWords(text){
	//text = " " + text + " ";
var totalWords = 0;
var bool = true;
for(var i = 0; i < text.length; i++){
	if(text.charAt(i) === " "){

	}
	else{
		bool = false
	}
}

if(bool){
	return totalWords;
}

	for(var i = 1; i <= text.length; i++){
		if(text.charAt(i) === " " && text.charAt(i+1) != " "){
			totalWords++;
		}
	}

	totalWords++;
	return totalWords;
}

function uniqueWords(text){
	var arr = [];
	var tmp = "";
	text = text + " ";

for(var i = 0; i <= text.length; i++){
	if (text.charAt(i) != " ") {
		tmp = tmp + text.charAt(i);
	}
	else if (tmp === ""){}

		else{
			if(isInArr(tmp, arr)){
				tmp = "";
			}
			else{

			arr.push(tmp);
			tmp = "";
		}
		}
}

 return arr.length;
}

function isInArr(word, arr){
	for(var i = 0; i < arr.length; i++){
		if (word == arr[i]) {
			return true;
		}
	}
	return false;
}

function averageLength(text){
var totalCharacters = 0;

for(var i = 0; i < text.length; i++){
	if (text.charAt(i) != " ") {
		totalCharacters++;
	}
}
return (totalCharacters / countWords(text));
}

function change(){



	 $("#js-textarea").submit(function(event){
    
    event.preventDefault();
    var string = document.getElementById("user-text").value;

    var textReport = $(".js-text-report");


    var average = averageLength(string);
    var total = countWords(string);
    var unique = uniqueWords(string);

     textReport.find('.js-word-count').text(total);
 	 textReport.find('.js-unique-word-count').text(unique);
  	textReport.find('.js-average-length').text(
    average + " characters");
  	textReport.removeClass('hidden');

    console.log(string);
   	
   	console.log(countWords(string));
    
   	console.log(averageLength(string));

   	console.log(uniqueWords(string));

  });
}

$(function(){
change();
});