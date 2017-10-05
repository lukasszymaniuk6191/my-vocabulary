var  allWords = angular.module('allWords', []);

allWords.service('AllWord', function(){
	
	var allWordsList = new Array();
	
	this.getWordsList = function()
	{
		return allWordsList;
	}
	
	this.addObjectToWordsList = function(word)
	{
		allWordsList.push(word);
	}
	
});


allWords.controller('allWordsCtrl', ['$scope','$http','AllWord', function($scope,$http,AllWord) {
	

	
	
	 $scope.getDataFromDataBase = function ()
	 {
		 $http({
	         url : 'api/words',
	         method : 'GET',
	         contentType: 'application/json'
	         
	     }).then(function success(response) {
	         var words = response.data;
	         
	         for(i=0; i<words.length; i++)
	         {
	        	 var allWords = new Word(i,words[i].engWord,words[i].plWord);
	        	 AllWord.addObjectToWordsList(allWords);
	         }
	         
	         var abc = AllWord.getWordsList();
	         
	         for(i=0; i<abc.length; i++)
	         {
	        	 console.log(abc[i].showWordParameters());
	         }
	         
	         $scope.allWords = AllWord.getWordsList();
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

