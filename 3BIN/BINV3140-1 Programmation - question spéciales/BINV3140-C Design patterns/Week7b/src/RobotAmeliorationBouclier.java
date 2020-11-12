public class RobotAmeliorationBouclier extends RobotAmerlioration{

    public RobotAmeliorationBouclier(Robot robot) {
        super(robot);
    }

    @Override
    public int getShield() {
        return super.getShield()*2;
    }
}
