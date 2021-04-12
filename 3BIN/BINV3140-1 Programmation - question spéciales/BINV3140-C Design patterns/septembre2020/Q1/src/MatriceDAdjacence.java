import java.util.ArrayDeque;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.Map;
import java.util.Queue;
import java.util.Set;

public class MatriceDAdjacence extends Graph{
	
	private Map<Integer, Airport>  correspondanceIndiceAirport;
	private Map<Airport, Integer>  correspondanceAirportIndice;
	private Flight[][] matrice= new Flight[0][0];
	private int nbAirport=0;

	public MatriceDAdjacence() {
		super();
		correspondanceAirportIndice= new HashMap<Airport,Integer>();
		correspondanceIndiceAirport= new HashMap<Integer,Airport>();
	}

	@Override
	protected void ajouterSommet(Airport a) {
		correspondanceIndiceAirport.put(nbAirport,a);
		correspondanceAirportIndice.put(a, nbAirport);
		nbAirport++;
		Flight[][] matrice2= new Flight[nbAirport][nbAirport]; 
		for (int i=0;i<matrice.length;i++) {
			for (int j=0;i<matrice.length;i++) {
				matrice2[i][j]=matrice[i][j];
			}
		}
		matrice=matrice2;
	}

	@Override
	protected void ajouterArc(Flight f) {
		matrice[correspondanceAirportIndice.get(f.getSource())][correspondanceAirportIndice.get(f.getDestination())]=f;
		
	}

	@Override
	public Set<Flight> arcsSortants(Airport a) {
		Flight[] list= matrice[correspondanceAirportIndice.get(a)];
		Set<Flight> toReturn= new HashSet<Flight>();
		for (Flight f:list) {
			if(f!=null) toReturn.add(f);
		}
		return toReturn;
	}
	

	public void affiche() {
		for (int i=0;i<matrice.length;i++) {
			for(int j=0;j<matrice.length;j++) {
				System.out.print(matrice[i][j]+" "+"\t");
			}
			System.out.println();
		}
	}

	@Override
	public boolean sontAdjacents(Airport a1, Airport a2) {
		int i= correspondanceAirportIndice.get(a1);
		int j= correspondanceAirportIndice.get(a2);
		return !(matrice[i][j]==null && matrice[j][i]==null);
	}
	

	@Override
	public Set<Flight> getSet(Airport current) {
		Flight[] list = matrice[correspondanceAirportIndice.get(current)];
		Set<Flight> set = new HashSet<Flight>();
		for (Flight f : list) {
			if (f != null)
				set.add(f);
		}
		return set;
	}

}
