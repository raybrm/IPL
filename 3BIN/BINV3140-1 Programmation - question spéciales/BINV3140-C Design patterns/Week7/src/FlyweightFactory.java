import java.util.HashMap;
import java.util.Map;

public class FlyweightFactory {

    private Map<String, RobotFactory> robotsPreconfigurer; //contient juste les "configurations"

    public FlyweightFactory() {
        robotsPreconfigurer = new HashMap<>();
    }

    // rajoute les robots préconfigurer
    public void ajoutePreconfig(String name, RobotFactory robotFactory) {
        if (!robotsPreconfigurer.containsKey(name)){
            robotsPreconfigurer.put(name, robotFactory);
        }
    }

    public Robot creerRobot(String name) {
        return robotsPreconfigurer.get(name).createRobot(name);
    }
}
