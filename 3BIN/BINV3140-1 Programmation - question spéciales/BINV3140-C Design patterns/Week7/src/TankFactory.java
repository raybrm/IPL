public class TankFactory implements RobotFactory {
    @Override
    public Robot createRobot(String name) {
        return new RobotImpl.RobotBuilder(name).puissanceCanon(5).puissanceBouclier(20).frequenceTir(100).pointDevie(500).build();
    }
}
