var  mediumWords = angular.module('mediumWords', []);

mediumWords.service('MediumWord', function(){
	
	var mediumWordsList = new Array();
	
	this.getWordsList = function()
	{
		return mediumWordsList;
	}
	
	this.addObjectToWordsList = function(word)
	{
		mediumWordsList.push(word);
	}
	
});


mediumWords.controller('mediumWordsCtrl', ['$scope','$http','MediumWord', function($scope,$http,MediumWord) {
	

	
	
	 $scope.getDataFromDataBase = function ()
	 {
		 $http({
	         url : 'api/words/difficulty_level/medium',
	         method : 'GET',
	         contentType: 'application/json'
	         
	     }).then(function success(response) {
	         var words = response.data;
	         
	         console.log('word: '+words);
	         
	         for(i=0; i<words.length; i++)
	         {
	        	 var mediumWord = new Word(i,words[i].engWord,words[i].plWord);
	        	 MediumWord.addObjectToWordsList(mediumWord);
	         }
	         
	         var abc = MediumWord.getWordsList();
	         
	         
	         for(i=0; i<abc.length; i++)
	         {
	        	 console.log(abc[i].showWordParameters());
	         }
	         
	         
	         $scope.allWords = MediumWord.getWordsList();
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

