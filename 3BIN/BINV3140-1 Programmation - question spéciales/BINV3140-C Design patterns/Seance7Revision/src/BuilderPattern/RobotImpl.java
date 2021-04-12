package BuilderPattern;

public class RobotImpl implements Robot {
	
	private int pointDeVie; // pas final car on doit pouvoir changer les PV
	private final String name;
	private final int puissanceCanon;
	private final int puissanceBouclier;
	private final int frequenceTir;
	
	private RobotImpl(RobotBuilder builder) {
		pointDeVie = builder.pointDeVie;
		puissanceCanon = builder.puissanceCanon;
		puissanceBouclier = builder.puissanceBouclier;
		frequenceTir = builder.frequenceTir;
		name = builder.name;
	}
	
	@Override
	public int getCanon() {
		return this.puissanceCanon;
	}

	@Override
	public int getShield() {
		return this.puissanceBouclier;
	}

	@Override
	public int getFreq() {
		return this.frequenceTir;
	}

	@Override
	public String getName() {
		return this.name;
	}

	@Override
	public int diffLife(int i) {
		this.pointDeVie = this.pointDeVie + i;
		return this.pointDeVie;
	}
	
	public static class RobotBuilder{
		private final String name;
		private int pointDeVie = 100;
		private int puissanceCanon = 1;
		private int puissanceBouclier = 1;
		private int frequenceTir = 100;
		
		public RobotBuilder(String name) {
			this.name = name;
		}
		
		public RobotBuilder pointDeVie(int pointDeVie) {
			this.pointDeVie = pointDeVie;
			return this;
		}
		
		public RobotBuilder puissanceCanon(int puissanceCanon) {
			this.puissanceCanon = puissanceCanon;
			return this;
		}
		
		public RobotBuilder puissanceBouclier(int puissanceBouclier) {
			this.puissanceBouclier = puissanceBouclier;
			return this;
		}
		
		public RobotBuilder frequenceTir(int frequenceTir) {
			this.frequenceTir = frequenceTir;
			return this;
		}
		
		public Robot build() {
			return new RobotImpl(this);
		}
		
		
		
	}

}
