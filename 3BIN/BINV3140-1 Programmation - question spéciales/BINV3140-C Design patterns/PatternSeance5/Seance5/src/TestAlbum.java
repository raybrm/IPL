
public class TestAlbum {

	public static void main(String[] args) {
	
		Album lonerism = new Album.AlbumBuilder("Lonerism",
				"Tame Impala").paysDeLArtiste("Australie").dateSortie(2012).genre("indie rock").build(); 
		Album orange = new Album.AlbumBuilder("channel ORANGE",
				"Frank Ocean").dateSortie(2012).genre("R&B").build();
		Album visions = new Album.AlbumBuilder("Visions",
				"Grimes").dateSortie(2012).label("4AD").genre("Electronic").build();
		System.out.println(lonerism);
	
	}
}


