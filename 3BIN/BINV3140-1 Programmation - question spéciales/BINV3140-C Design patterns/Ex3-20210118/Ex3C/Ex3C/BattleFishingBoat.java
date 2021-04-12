

public class BattleFishingBoat implements BattleShip {

  private FishingBoat boat; // Adaptee 

  public BattleFishingBoat() {
    boat = new FishingBoat();
  }

  @Override
  public void fire() {
    boat.fish();
  }

  @Override
  public void move(Distance distance) {
    boat.sail(distance);
  }
}
