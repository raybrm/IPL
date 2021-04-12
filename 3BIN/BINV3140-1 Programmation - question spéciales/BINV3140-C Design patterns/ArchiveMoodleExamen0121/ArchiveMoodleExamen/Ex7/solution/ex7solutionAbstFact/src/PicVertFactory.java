
public class PicVertFactory implements AbstractFactory {
	@Override
	public Robot createRobot(String name) {
		return new RobotImpl.RobotBuilder(name).freq(100).build();
	}

}
