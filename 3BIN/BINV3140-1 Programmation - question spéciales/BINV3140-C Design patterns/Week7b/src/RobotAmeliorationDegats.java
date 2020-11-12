public class RobotAmeliorationDegats extends RobotAmerlioration {

    public RobotAmeliorationDegats(Robot robot) {
        super(robot);
    }

    @Override
    public int getCanon() {
        return super.getCanon()*2;
    }

}
