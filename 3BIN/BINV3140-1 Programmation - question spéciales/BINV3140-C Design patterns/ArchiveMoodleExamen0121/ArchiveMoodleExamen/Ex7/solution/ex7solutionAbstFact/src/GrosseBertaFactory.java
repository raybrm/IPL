public class GrosseBertaFactory implements AbstractFactory {
	@Override
	public Robot createRobot(String name) {
		return new RobotImpl.RobotBuilder(name).canon(100).build();
	}
}