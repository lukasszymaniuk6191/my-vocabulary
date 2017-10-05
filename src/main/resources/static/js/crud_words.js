var  crudWords = angular.module('crudWords', []);

crudWords.controller('crudWordsCtrl', ['$scope','$http', function($scope,$http) {
	
	$scope.addWordToVocabulary = function ()
    {

        //Pobiera dane wprowadzone przez użytkownika
        var word = getDataFromFieldsAdd();

        
        var wordJSON = JSON.stringify(word);
        console.log('wordJSON: '+wordJSON);

      
        
        $http({
            url : 'http://localhost:8080/my-vocabulary/api/words',
            method : 'POST',
            contentType: 'application/json',
            data : wordJSON
        }).then(function success(response) {
           
          
            
            alert('Data saved: '+response)
            
        }, function error(response) {
            

            
            alert('Data not saved '+response);
        });
        
           
    }
	
	
	function getDataFromFieldsAdd()
    {
       var eng_word = document.getElementById("add_eng_word").value; 
       var pl_word = document.getElementById("add_pl_word").value; 
       var difficulty_level = getRadioValue('add_difficulty_level');

       var word = new Word(eng_word,pl_word,difficulty_level);    

       return word;
    }
	
	
	$scope.updateWordInVocabulary = function ()
    {

        //Pobiera dane wprowadzone przez użytkownika
        var word = getDataFromFieldsUpdate();

        
        var wordJSON = JSON.stringify(word);
        console.log('wordJSON: '+wordJSON);

      
        
        $http({
            url : 'http://localhost:8080/my-vocabulary/api/words/update',
            method : 'POST',
            contentType: 'application/json',
            data : wordJSON
        }).then(function success(response) {
            alert('Data saved: '+response)
            
        }, function error(response) {
            alert('Data not saved '+response);
        });
        
           
    }
	
	function getDataFromFieldsUpdate()
    {
       var eng_word = document.getElementById("update_eng_word").value; 
       var pl_word = document.getElementById("update_pl_word").value; 

       var word = new Word(eng_word,pl_word,null);   
       
       console.log('word: '+word.showWordParameters());

       return word;
    }
	
	$scope.removeWordFromVocabulary = function ()
    {

        //Pobiera dane wprowadzone przez użytkownika
        var word = getDataFromFieldsRemove();

        
        var wordJSON = JSON.stringify(word);
        console.log('wordJSON: '+wordJSON);

      
        
        $http({
            url : 'http://localhost:8080/my-vocabulary/api/words/remove',
            method : 'POST',
            contentType: 'application/json',
            data : wordJSON
        }).then(function success(response) {
            alert('Data saved: '+response)
            
        }, function error(response) {
            alert('Data not saved '+response);
        });
        
           
    }
	
	function getDataFromFieldsRemove()
    {
       var eng_word = document.getElementById("remove_eng_word").value; 

       var word = new Word(eng_word,null,null);   
       
       console.log('word: '+word.showWordParameters());

       return word;
    }
	
	



    function getRadioValue(theRadioGroup)
    {
        var elements = document.getElementsByName(theRadioGroup);
        for (var i = 0, l = elements.length; i < l; i++)
        {
            if (elements[i].checked)
            {
                return elements[i].value;
            }
        }
    }
	
	
}]);




function Word(engWord, plWord,difficultyLevel)
{
    this.engWord = engWord;
    this.plWord = plWord;
    this.difficultyLevel = difficultyLevel;
    
    this.setWordParameters = function(engWord, plWord, difficultyLevel)
	{
	    this.engWord = engWord;
        this.plWord = plWord;
        this.difficultyLevel = difficultyLevel;
	}
    
    this.showWordParameters = function()
    {
        return 'Object: [english word: '+engWord+', polish word: '+plWord+', difficulty level: ' + difficultyLevel+ ']';
    }
}