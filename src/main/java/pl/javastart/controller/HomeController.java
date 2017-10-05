package pl.javastart.controller;
 
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
 
@Controller
public class HomeController {
 
	
	
	
    @GetMapping("/")
    public String home(HttpServletRequest req) {    	
        return "html/index.html";
    }
    
    
    @GetMapping("/easy_words")
    public String easyWords() {
        return "html/easy_words.html";
    }
    
    @GetMapping("/medium_words")
    public String mediumWords() {
        return "html/medium_words.html";
    }
    
    @GetMapping("/height_words")
    public String heightWords() {
        return "html/height_words.html";
    }
    
    @GetMapping("/all_words")
    public String allWords() {
        return "html/all_words.html";
    }
    
    @GetMapping("/crud_words")
    public String crudWords() {
        return "html/crud_words.html";
    }
     
}