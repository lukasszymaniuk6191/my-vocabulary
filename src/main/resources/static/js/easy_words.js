var  easyWords = angular.module('easyWords', []);

easyWords.service('EasyWord', function(){
	
	var easyWordsList = new Array();
	
	this.getWordsList = function()
	{
		return easyWordsList;
	}
	
	this.addObjectToWordsList = function(word)
	{
		easyWordsList.push(word);
	}
	
});


easyWords.controller('easyWordsCtrl', ['$scope','$http','EasyWord', function($scope,$http,EasyWord) {
	

	
	
	 $scope.getDataFromDataBase = function ()
	 {
		 $http({
	         url : 'api/words/difficulty_level/easy',
	         method : 'GET',
	         contentType: 'application/json'
	         
	     }).then(function success(response) {
	         var words = response.data;
	         
	         for(i=0; i<words.length; i++)
	         {
	        	 var easyWord = new Word(i,words[i].engWord,words[i].plWord);
	        	 EasyWord.addObjectToWordsList(easyWord);
	         }
	         
	         var abc = EasyWord.getWordsList();
	         
	         for(i=0; i<abc.length; i++)
	         {
	        	 console.log(abc[i].showWordParameters());
	         }
	         
	         $scope.allWords = EasyWord.getWordsList();
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

