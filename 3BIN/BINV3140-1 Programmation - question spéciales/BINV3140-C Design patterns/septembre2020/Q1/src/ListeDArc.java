import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.Map;
import java.util.Queue;
import java.util.Set;

public class ListeDArc extends Graph {

	private ArrayList<Flight> flights;

	public ListeDArc() {
		super();
		flights = new ArrayList<Flight>();
	}

	@Override
	protected void ajouterSommet(Airport a) {
	}

	@Override
	protected void ajouterArc(Flight f) {
		flights.add(f);
	}

	@Override
	public Set<Flight> arcsSortants(Airport a) {
		Set<Flight> toReturn = new HashSet<Flight>();
		for (Flight f : flights) {
			if (f.getSource().equals(a)) {
				toReturn.add(f);
			}
		}
		return toReturn;
	}

	@Override
	public boolean sontAdjacents(Airport a1, Airport a2) {
		for (Flight f : flights) {
			if ((f.getDestination().equals(a1) && f.getSource().equals(a2))
					|| (f.getDestination().equals(a2) && f.getSource().equals(a1))) {
				return true;
			}
		}
		return false;
	}
	
	@Override
	public Set<Flight> getSet(Airport current) {
		
		Set<Flight> set = new HashSet<Flight>();
		for (Flight f : flights) {
			if (f.getSource().equals(current)) {
				set.add(f);
			}
		}
		
		return set;
	}

}
