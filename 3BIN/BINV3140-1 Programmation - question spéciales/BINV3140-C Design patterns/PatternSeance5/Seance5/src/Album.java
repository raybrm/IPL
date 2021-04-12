/**
 * Classe immuable -> tous les attributs sont final
 * @author rayan
 *
 */
public class Album {
	private final String titre;
	private final String artiste;
	private final String label;
	private final String producteur;
	private final String paysDeLArtiste;
	private final String version;
	private final String genre;
	private final int dateSortie;
	private final int dateSortieOriginal;
	private final int debitStandard;
	private final int debitPremium;
	
	private Album (AlbumBuilder albumBuilder) {
		this.titre = albumBuilder.titre;
		this.artiste = albumBuilder.artiste;
		this.label = albumBuilder.label;
		this.producteur = albumBuilder.producteur;
		this.paysDeLArtiste = albumBuilder.paysDeLArtiste;
		this.version = albumBuilder.version;
		this.genre = albumBuilder.genre;
		this.dateSortie= albumBuilder.dateSortie;
		this.dateSortieOriginal = albumBuilder.dateSortieOriginal;
		this.debitStandard = albumBuilder.debitStandard;
		this.debitPremium = albumBuilder.debitPremium;
	}
	
	public String getTitre() {
		return titre;
	}

	public String getArtiste() {
		return artiste;
	}

	public String getLabel() {
		return label;
	}

	public String getProducteur() {
		return producteur;
	}

	public String getPaysDeLArtiste() {
		return paysDeLArtiste;
	}

	public String getVersion() {
		return version;
	}

	public String getGenre() {
		return genre;
	}

	public int getDateSortie() {
		return dateSortie;
	}

	public int getDateSortieOriginal() {
		return dateSortieOriginal;
	}

	public int getDebitStandard() {
		return debitStandard;
	}

	public int getDebitPremium() {
		return debitPremium;
	}
	
	
	
	public static class AlbumBuilder {
		private final String titre;
		private final String artiste;
		private String label;
		private String producteur;
		private String paysDeLArtiste;
		private String version;
		private String genre;
		private int dateSortie;
		private int dateSortieOriginal;
		private int debitStandard;
		private int debitPremium;
		
		public AlbumBuilder(String titre, String artiste) {
			this.titre = titre;
			this.artiste = artiste;
		}
		
		public AlbumBuilder label(String label) {
			this.label = label;
			return this;
		}
		
		public AlbumBuilder producteur(String producteur) {
			this.producteur = producteur;
			return this;
		}
		
		public AlbumBuilder paysDeLArtiste(String paysDeLArtiste) {
			this.paysDeLArtiste = paysDeLArtiste;
			return this;
		}
		
		public AlbumBuilder version(String version) {
			this.version = version;
			return this;
		}
		
		public AlbumBuilder genre(String genre) {
			this.genre = genre;
			return this;
		}
		
		public AlbumBuilder dateSortie(int dateSortie) {
			this.dateSortie = dateSortie;
			return this;
		}
		
		public AlbumBuilder dateSortieOriginal(int dateSortieOriginal) {
			this.dateSortieOriginal = dateSortieOriginal;
			return this;
		}
		
		public AlbumBuilder debitStandard(int debitStandard) {
			this.debitStandard = debitStandard;
			return this;
		}
		
		public AlbumBuilder debitPremium(int debitPremium) {
			this.debitPremium = debitPremium;
			return this;
		}
		
		public Album build() { // Contruit l'album sur base du builder
			return new Album(this);
		}
	}	
}
