package pl.javastart.model;
 
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
 
@Entity
@Table(name = "vocabulary")
@NamedQueries({
    @NamedQuery(name = "Word.findAll", query = "SELECT w FROM Word w"),
    @NamedQuery(name = "Word.findAllOrderByPrice", 
        query = "SELECT w FROM Word w ORDER BY w.engWord"),
    @NamedQuery(name = "Word.findWordByEnglishName", 
    query = "SELECT w FROM Word w WHERE w.engWord = :engWord"),
    @NamedQuery(name = "Word.findByPolishWord", query = "SELECT w FROM Word w WHERE w.plWord = :plWord")
})
public class Word {
     
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "word_id")
    private Long id;
    @Column(name = "english_word",unique = true,nullable = false)
    private String engWord;
    @Column(name = "polsih_word",nullable = false)
    private String plWord;
    @Column(name = "difficulty_level",nullable = false)
    private String difficultyLevel;
	
    public Word() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Word(String engWord, String plWord, String difficultyLevel) {
		super();
		this.engWord = engWord;
		this.plWord = plWord;
		this.difficultyLevel = difficultyLevel;
	}

	
	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEngWord() {
		return engWord;
	}

	public void setEngWord(String engWord) {
		this.engWord = engWord;
	}

	public String getPlWord() {
		return plWord;
	}

	public void setPlWord(String plWord) {
		this.plWord = plWord;
	}

	public String getDifficultyLevel() {
		return difficultyLevel;
	}

	public void setDifficultyLevel(String difficultyLevel) {
		this.difficultyLevel = difficultyLevel;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((difficultyLevel == null) ? 0 : difficultyLevel.hashCode());
		result = prime * result + ((engWord == null) ? 0 : engWord.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((plWord == null) ? 0 : plWord.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Word other = (Word) obj;
		if (difficultyLevel == null) {
			if (other.difficultyLevel != null)
				return false;
		} else if (!difficultyLevel.equals(other.difficultyLevel))
			return false;
		if (engWord == null) {
			if (other.engWord != null)
				return false;
		} else if (!engWord.equals(other.engWord))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (plWord == null) {
			if (other.plWord != null)
				return false;
		} else if (!plWord.equals(other.plWord))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Word [id=" + id + ", engWord=" + engWord + ", plWord=" + plWord + ", difficultyLevel=" + difficultyLevel
				+ "]";
	}
 
}