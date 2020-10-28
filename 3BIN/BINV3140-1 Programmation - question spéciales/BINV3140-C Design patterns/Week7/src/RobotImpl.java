public class RobotImpl implements Robot {

    private int pointDeVie;
    private final String nom;
    private final int puissanceCanon;
    private final int puissanceBouclier;
    private final int frequenceTir;

    private RobotImpl(RobotBuilder robotBuilder){
        this.pointDeVie = robotBuilder.pointDeVie;
        this.nom = robotBuilder.nom;
        this.puissanceCanon = robotBuilder.puissanceCanon;
        this.puissanceBouclier = robotBuilder.puissanceBouclier;
        this.frequenceTir = robotBuilder.frequenceTir;
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
        return this.nom;
    }

    @Override
    public int diffLife(int i) {
        this.pointDeVie = this.pointDeVie + i;
        return this.pointDeVie;
    }

    public static class RobotBuilder {
        private int pointDeVie = 100;
        private final String nom; // final car obligatoire
        private int puissanceCanon = 1;
        private int puissanceBouclier = 1;
        private int frequenceTir = 100;

        public RobotBuilder(String nom) {
            this.nom = nom;
        }

        public RobotBuilder pointDevie(int pointDeVie) {
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
