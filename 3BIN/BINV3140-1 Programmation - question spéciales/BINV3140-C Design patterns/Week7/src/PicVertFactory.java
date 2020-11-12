public class PicVertFactory implements RobotFactory {

    @Override
    public Robot createRobot(String name) {
        return new RobotImpl.RobotBuilder(name).puissanceCanon(5).puissanceBouclier(2).frequenceTir(100).build();
    }
}
