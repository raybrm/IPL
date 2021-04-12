package DecoratorPattern;

import BuilderPattern.Robot;

public class RobotAmerliorationCanon extends RobotAmelioration{

	public RobotAmerliorationCanon(Robot robot) {
		super(robot);
	}
	
	@Override
	public int getCanon() {
		return super.getCanon()*2;
	}
	
	
}	
