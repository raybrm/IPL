package DecoratorPattern;

import BuilderPattern.Robot;

public class RobotAmeliorationResistance extends RobotAmelioration{

	public RobotAmeliorationResistance(Robot robot) {
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
