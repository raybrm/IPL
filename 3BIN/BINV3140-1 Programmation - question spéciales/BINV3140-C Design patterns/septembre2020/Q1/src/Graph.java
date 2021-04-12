import java.io.File;
import java.util.ArrayDeque;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.Map;
import java.util.Queue;
import java.util.Set;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

public abstract class Graph {

	protected Map<String, Airport> correspondanceIataAirport;

	public Graph() {
		correspondanceIataAirport = new HashMap<String, Airport>();
	}

	public void constructFromXML(String xmlFile) throws Exception {
		File xml = new File(xmlFile);
		DocumentBuilderFactory docBuildFact = DocumentBuilderFactory.newInstance();
		DocumentBuilder docBuild = docBuildFact.newDocumentBuilder();
		Document doc = docBuild.parse(xml);
		NodeList airports = doc.getElementsByTagName("airport");
		for (int i = 0; i < airports.getLength(); i++) {
			Node airport = airports.item(i);
			Element elAirport = (Element) airport;
			String iata = elAirport.getAttribute("iata");
			String name = elAirport.getAttribute("name");
			Airport a = new Airport(iata, name);
			correspondanceIataAirport.put(iata, a);
			ajouterSommet(a);
		}
		for (int i = 0; i < airports.getLength(); i++) {
			Node airport = airports.item(i);
			Element elAirport = (Element) airport;
			String iata = elAirport.getAttribute("iata");
			NodeList flights = elAirport.getElementsByTagName("flight");
			for (int j = 0; j < flights.getLength(); j++) {
				Node flight = flights.item(j);
				Element elFlight = (Element) flight;
				String dest = elFlight.getTextContent();
				String airline = elFlight.getAttribute("airline");
				Flight f = new Flight(correspondanceIataAirport.get(iata), correspondanceIataAirport.get(dest),
						airline);
				ajouterArc(f);
			}
		}
	}

	public Airport getAirport(String iata) {
		return correspondanceIataAirport.get(iata);
	}

	protected abstract void ajouterSommet(Airport a);

	protected abstract void ajouterArc(Flight f);

	public abstract Set<Flight> arcsSortants(Airport a);

	public abstract boolean sontAdjacents(Airport a1, Airport a2);

	public void bfs(String depart, String arrivee) {
		Set<Airport> visited = new HashSet<Airport>();
		Queue<Airport> queue = new LinkedList<Airport>();
		Airport departAir = correspondanceIataAirport.get(depart);
		queue.add(departAir);
		visited.add(departAir);
		Map<Airport, Flight> chemin = new HashMap<Airport, Flight>();
		while (!queue.isEmpty()) {
			Airport cur = queue.poll();
			for (Flight f : getSet(cur)) {
				if (!visited.contains(f.getDestination())) {
					queue.add(f.getDestination());
					visited.add(f.getDestination());
					chemin.put(f.getDestination(), f);
					if (f.getDestination().getIata().equals(arrivee)) {
						cur = f.getDestination();
						ArrayDeque<Flight> pile = new ArrayDeque<Flight>();
						while (!cur.equals(departAir)) {
							pile.push(chemin.get(cur));
							cur = chemin.get(cur).getSource();
						}
						while (!pile.isEmpty()) {
							System.out.println(pile.pop());
						}
					}
				}
			}
		}
	}
	
	public abstract Set<Flight> getSet(Airport current);
}
