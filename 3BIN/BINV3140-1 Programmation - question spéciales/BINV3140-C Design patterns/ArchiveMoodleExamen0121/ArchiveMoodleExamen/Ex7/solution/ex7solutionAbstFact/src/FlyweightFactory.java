import java.util.HashMap;
import java.util.Map;

public class FlyweightFactory {
	private Map<String, AbstractFactory> flyweights = new HashMap<String, AbstractFactory>();

	public AbstractFactory getFlyweight(String flyweightName) {
		return flyweights.get(flyweightName);
	}

	public void putFlyweight(String flyweightName, AbstractFactory abs) {
		flyweights.put(flyweightName, abs);
	}

	public Robot createRobot(String name) {
		return flyweights.get(name).createRobot(name);
	}
}
