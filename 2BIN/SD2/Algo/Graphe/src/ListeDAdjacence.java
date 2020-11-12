import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class ListeDAdjacence extends Graph{
	
	private Map<Airport,Set<Flight>> outputFlights;

	public ListeDAdjacence(){
		super();
		outputFlights=new HashMap<Airport,Set<Flight>>();

	}

	@Override
	// Complexit�: O(1)
	protected void ajouterSommet(Airport a) {	
		
		//O(1)
		if (!outputFlights.containsKey(a)) {
			
			outputFlights.put(a, new HashSet<Flight>());
		}

	}

	@Override
	// Complexit�: O(1)
	protected void ajouterArc(Flight f) {
		
		this.ajouterSommet(f.getSource());
		outputFlights.get(f.getSource()).add(f);
	}

	@Override
	// Complexit�: ?
	public Set<Flight> arcsSortants(Airport a) {
		//� compl�ter
		return null;
	}

	@Override
	// Complexit�: ?
	public boolean sontAdjacents(Airport a1, Airport a2) {
		// � compl�ter
		return false;
	}

}
