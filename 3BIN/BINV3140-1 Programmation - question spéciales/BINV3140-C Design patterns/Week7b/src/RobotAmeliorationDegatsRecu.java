public class RobotAmeliorationDegatsRecu extends RobotAmerlioration{

    public RobotAmeliorationDegatsRecu(Robot robot) {
        super(robot);
    }

    @Override
    public int diffLife(int i) {
        if (i < 0) {
            return super.diffLife(i/2);
        }
        return super.diffLife(i);
    }
}
