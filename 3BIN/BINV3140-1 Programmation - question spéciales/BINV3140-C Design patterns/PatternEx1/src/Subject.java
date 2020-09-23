import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Array;
import java.util.ArrayList;

public class Subject {
	
	private ArrayList<Observer> observerCollection = new ArrayList<>();
	private String fileName;
	
	public Subject(String fileName) {
		this.fileName = fileName;
	} 
	
	public void analyserTexte() throws IOException {
		BufferedReader lecteurAvecBuffer = null;
		String ligne;

		try {
			lecteurAvecBuffer = new BufferedReader(new FileReader(this.fileName));
		} catch (FileNotFoundException e) {
			System.out.println("Erreur d'ouverture");
		}
		
		while ((ligne = lecteurAvecBuffer.readLine()) != null) {
			notifyObservers(ligne);	
		}
		
		lecteurAvecBuffer.close();
		endNotifyObservers();
	}
	
	public void registerObserver(Observer observer) {
		observerCollection.add(observer);
	}
	
	public void unregisterObserver(Observer observer) {
		observerCollection.remove(observer);
	}
	
	public void notifyObservers(String ligne) {
		for (Observer observer : observerCollection) {
			observer.update(ligne);
		}
	}
	
	public void endNotifyObservers() {
		for (Observer observer : observerCollection) {
			observer.update();
		}
	}
	
	
}
