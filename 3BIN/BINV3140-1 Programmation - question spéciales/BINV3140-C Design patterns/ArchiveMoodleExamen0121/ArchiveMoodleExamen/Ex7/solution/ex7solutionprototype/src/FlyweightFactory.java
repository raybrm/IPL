import java.util.HashMap;
import java.util.Map;

public class FlyweightFactory {
	private Map<String, Robot> flyweights = new HashMap<String, Robot>();

	public Robot getFlyweight(String flyweightName) {
		return flyweights.get(flyweightName);
	}

	public void putFlyweight(String flyweightName, Robot rob) {
		flyweights.put(flyweightName, rob);
	}

	public Robot createRobot(String name) throws CloneNotSupportedException {
		return (Robot) flyweights.get(name).clone();
	}
}
