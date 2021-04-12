
public class Main {
	public static void main(String[] args) throws Exception {
		Graph g= new ListeDAdjacence();		
		g.constructFromXML("flight.xml");
		g.bfs("LAX","IST");
		System.out.println("---------------------");
		Graph g2= new ListeDArc();		
		g2.constructFromXML("flight.xml");
		g2.bfs("LAX","IST");
		System.out.println("---------------------");
		Graph g3= new MatriceDAdjacence();		
		g3.constructFromXML("flight.xml");
		g3.bfs("LAX","IST");
		System.out.println("---------------------");
	}
}
