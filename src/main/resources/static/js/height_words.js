var  heightWords = angular.module('heightWords', []);

heightWords.service('HeightWord', function(){
	
	var heightWordsList = new Array();
	
	this.getWordsList = function()
	{
		return heightWordsList;
	}
	
	this.addObjectToWordsList = function(word)
	{
		heightWordsList.push(word);
	}
	
});


heightWords.controller('heightWordsCtrl', ['$scope','$http','HeightWord', function($scope,$http,HeightWord) {
	

	
	
	 $scope.getDataFromDataBase = function ()
	 {
		 $http({
	         url : 'api/words/difficulty_level/height',
	         method : 'GET',
	         contentType: 'application/json'
	         
	     }).then(function success(response) {
	         var words = response.data;
	         
	         console.log('word: '+words);
	         
	         for(i=0; i<words.length; i++)
	         {
	        	 var heightWord = new Word(i,words[i].engWord,words[i].plWord);
	        	 HeightWord.addObjectToWordsList(heightWord);
	         }
	         
	         var abc = HeightWord.getWordsList();
	         
	         
	         for(i=0; i<abc.length; i++)
	         {
	        	 console.log(abc[i].showWordParameters());
	         }
	         
	         
	         $scope.allWords = HeightWord.getWordsList();
	         console.log('Data saved');
	         
	     }, function error(response) {
	         console.log('Data not saved ');
	     });
		 
	 }
	
}]);  


function Word(idWord, engWord, plWord)
{
	this.idWord = idWord;
    this.engWord = engWord;
    this.plWord = plWord;
    
    this.setWordParameters = function(idWord, engWord, plWord)
	{
    	this.idWord = idWord;
	    this.engWord = engWord;
        this.plWord = plWord;
	}
    
    this.showWordParameters = function()
    {
        return 'Object: [id: '+idWord+', english word: '+engWord+', polish word: '+plWord+']';
    }
}

