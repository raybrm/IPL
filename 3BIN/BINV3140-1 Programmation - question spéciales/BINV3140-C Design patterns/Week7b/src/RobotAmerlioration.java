public abstract class RobotAmerlioration implements Robot {

    private Robot robot;

    public RobotAmerlioration(Robot robot) {
        this.robot = robot;
    }

    @Override
    public int getCanon() {
        return robot.getCanon();
    }

    @Override
    public int getShield() {
        return robot.getShield();
    }

    @Override
    public int getFreq() {
        return robot.getFreq();
    }

    @Override
    public String getName() {
        return robot.getName();
    }

    @Override
    public int diffLife(int i) {
        return robot.diffLife(i);
    }

    @Override
    public Object clone() {
        RobotAmerlioration clone = null;
        try {
            clone = (RobotAmerlioration) super.clone();
            clone.robot = (Robot) robot.clone();
        } catch (CloneNotSupportedException e) {
            e.printStackTrace();
        }
        return clone();
    }
}
