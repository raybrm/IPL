import java.util.ArrayDeque;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.Map;
import java.util.Queue;
import java.util.Set;

public class ListeDAdjacence extends Graph{
	
	private Map<Airport,Set<Flight>> outputFlights;

	public ListeDAdjacence(){
		super();
		outputFlights=new HashMap<Airport,Set<Flight>>();

	}

	@Override
	protected void ajouterSommet(Airport a) {	
		outputFlights.put(a, new HashSet<Flight>());

	}

	@Override
	protected void ajouterArc(Flight f) {
		outputFlights.get(f.getSource()).add(f);
	}

	@Override
	public Set<Flight> arcsSortants(Airport a) {
		return outputFlights.get(a);
	}

	@Override
	public boolean sontAdjacents(Airport a1, Airport a2) {
		Set<Flight> flights= outputFlights.get(a1);
		for (Flight f: flights) {
			if(f.getDestination().equals(a2)) return true;
		}
		flights= outputFlights.get(a2);
		for (Flight f: flights) {
			if(f.getDestination().equals(a1)) return true;
		}
		return false;
	}
	

	@Override
	public Set<Flight> getSet(Airport current) {
		return outputFlights.get(current);
	}


	
	
	
	

}



