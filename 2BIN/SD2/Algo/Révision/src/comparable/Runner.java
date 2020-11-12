package comparable;

import java.util.Comparator;
import java.util.Iterator;
import java.util.PriorityQueue;
import java.util.Set;
import java.util.TreeSet;


/**
 * Comparable vs Comparator
 * @author rayan
 * https://www.javatpoint.com/difference-between-comparable-and-comparator
 */
public class Runner {
	
	/**
	 * Comparator permet de trier en rempla�ant l'ordre naturel; on peut d�finir plusieurs comparator tandis que qu'avec Comparable on ne peut pas
	 * Comparator est un bon moyen quand on ne veut ou peut pas toucher au code source de la classe qu'on veut comparer.
	 * Avec Comparable on modifie directement la classe
	 * @param args
	 */
	public static void main(String[] args) {
		
		/*
		List <Laptop> laptops = new ArrayList<>();
		laptops.add(new Laptop("Dell", 16, 800));
		laptops.add(new Laptop("Apple", 8, 1200));
		laptops.add(new Laptop("Acer", 12, 700));
		
		Collections.sort(laptops); // la m�thode sort prend un Type qui implements l'interface comparable
		
		for (Laptop laptop : laptops) {
			System.out.println(laptop);
		}
		
		List <String> fruits = new ArrayList<>();
		fruits.add("banane");
		fruits.add("fraise");
		fruits.add("pomme");
		
		Collections.sort(fruits);
		*/
		
		Comparator<Laptop> monComparatorSurRam = new Comparator<Laptop>() { // classe anonyme
			
			/**
			 * Ascendant : du plus petit au plus grand
			 */
			@Override
			public int compare(Laptop lap1, Laptop lap2) {

				if (lap1.getRam() > lap2.getRam()) {
					return 1;
				} else if(lap1.getRam() == lap2.getRam()) {
					return 0;
				} else {
					return -1;
				}
			}
			
		};
		
		// donne sur quoi comparer et compartor.comparing extrait un objet comparator comme si nous l'avions cr�er nous m�me
		// gr�ce � une classe anonyme (voir plus haut) ou bien avec une lambda expression. 
		Set<Laptop> laptops = new TreeSet<Laptop>(Comparator.comparing((Laptop l1) -> l1.getRam()) 
										.thenComparing(Laptop::getPrice)
										.thenComparing(Laptop::getBrand));
		// m�me chose
		//Set<Laptop> laptps = new TreeSet<Laptop>(monComparatorSurRam);
		
		Laptop a = new Laptop("Apple", 8, 1200);
		laptops.add(new Laptop("Dell", 16, 800));
		laptops.add(a);
		laptops.add(new Laptop("Acer", 12, 700));
		laptops.add(new Laptop("HP", 12, 500));
		
	
		for (Laptop laptop : laptops) {
			System.out.println(laptop);
		}
	
	
		/*
		PriorityQueue<Laptop> laps = new PriorityQueue<>(); // Compare gr�ce au comparable
		laps.add(new Laptop("Dell", 16, 800));
		laps.add(a);
		laps.add(new Laptop("Acer", 12, 700));
		laps.add(new Laptop("HP", 12, 500));
		
		for (Laptop laptop : laps) {
			System.out.println(laptop);
		}
		*/
		a.setRam(20);
		
		Iterator<Laptop> itr = laptops.iterator();

		while(itr.hasNext()){
		  System.out.println(itr.next());
		}
		
		
	}
	
}
