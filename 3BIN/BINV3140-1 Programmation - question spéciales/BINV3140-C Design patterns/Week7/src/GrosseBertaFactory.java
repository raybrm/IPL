public class GrosseBertaFactory implements RobotFactory {
    @Override
    public Robot createRobot(String name) {
        return new RobotImpl.RobotBuilder(name).puissanceCanon(25).puissanceBouclier(2).frequenceTir(10).build();
    }
}
