package pl.javastart.repository;
 
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
 
import pl.javastart.model.Word;
 
public interface VocabularyRepository extends JpaRepository<Word, Long> {

	Word getByEngWord(String engWord);
	Word getByPlWord(String plWord);
	List<Word> getByDifficultyLevel(String difficultyLevel);

}