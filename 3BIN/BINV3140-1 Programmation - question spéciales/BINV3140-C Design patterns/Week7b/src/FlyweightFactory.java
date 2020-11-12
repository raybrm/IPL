import java.util.HashMap;
import java.util.Map;

public class FlyweightFactory {

    private Map<String, Robot> robots ;

    public FlyweightFactory() {
        robots = new HashMap<>();
    }

    // rajoute les robots
    public void ajoutePreconfig(String name, Robot robot) {
        if (!robots.containsKey(name)){
            robots.put(name, robot);
        }
    }

    public Robot creerRobot(String name) {

        return (Robot) robots.get(name).clone();
    }
}
