package DecoratorPattern;

import BuilderPattern.Robot;

public class RobotAmerliorationBouclier extends RobotAmelioration {

	public RobotAmerliorationBouclier(Robot robot) {
		super(robot);
	}
	
	@Override
    public int getShield() {
        return super.getShield()*2; // appel la m�thode parent et fais * 2 du r�sultat renvoy�
    }
}
