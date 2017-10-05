package pl.javastart.controller;
 
import java.net.URI;
import java.util.List;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import pl.javastart.model.Word;
import pl.javastart.repository.VocabularyRepository;
 
@RestController
@RequestMapping("/api")
public class VocabularyController {
 
    private VocabularyRepository vocabularyRepository;
 
    @Autowired
    public VocabularyController(VocabularyRepository vocabularyRepository) {
        this.vocabularyRepository = vocabularyRepository;
    }
    
     
    @GetMapping(path="/words",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Word>> allProducts() {
        List<Word> allWords = vocabularyRepository.findAll();
        return ResponseEntity.ok(allWords);
    }
 
    @GetMapping(path = "/words/english/{eng_word}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Word> getWordByEnglishName(@PathVariable String eng_word) {
    	Word word = vocabularyRepository.getByEngWord(eng_word);
        return ResponseEntity.ok(word);
    }
    
    @GetMapping(path = "/words/polish/{pl_word}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Word> getWordByPolishName(@PathVariable String pl_word) {
    	Word word = vocabularyRepository.getByPlWord(pl_word);
        return ResponseEntity.ok(word);
    }
    
    @GetMapping(path = "/words/difficulty_level/{difficulty_level}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Word>> getWordsByDifficultyLevel(@PathVariable String difficulty_level) {
    	List<Word> words = vocabularyRepository.getByDifficultyLevel(difficulty_level);
        return ResponseEntity.ok(words);
    }
    
    int i=0;
    
    @PostMapping(path="/words" , consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> saveWord(@RequestBody Word word) {
        
    	System.out.println("i="+i+":  "+word);
    	i++;
    	
    	Word save = vocabularyRepository.save(word);
    	URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/english/{eng_word}")
                .buildAndExpand(save.getId())
        .toUri();
    	return ResponseEntity.created(location).body(save);
    }
    
    
    
    @PostMapping(path="/words/update" , consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateWord(@RequestBody Word word) {
        
    
    	Word oldWord = vocabularyRepository.getByEngWord(word.getEngWord());
    	
    	System.out.println("old word: "+oldWord.toString());
    	
    	oldWord.setPlWord(word.getPlWord());
    
    	System.out.println("new word: "+oldWord.toString());
    	
    	vocabularyRepository.save(oldWord);
    

    	return ResponseEntity.ok(oldWord);
    }
    
    
    @PostMapping(path="/words/remove" , consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> removeWord(@RequestBody Word word) {
        
    
    	Word wordToRemove = vocabularyRepository.getByEngWord(word.getEngWord());
    	
        System.out.println("wordToRemove: "+wordToRemove);
        
        vocabularyRepository.delete(wordToRemove.getId());
    	 

    	return ResponseEntity.ok(null);
    }
    
    
    
}