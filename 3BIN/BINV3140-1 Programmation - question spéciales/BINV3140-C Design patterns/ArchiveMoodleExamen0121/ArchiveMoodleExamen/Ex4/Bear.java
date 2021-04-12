
public class Bear {
	private String state;
	public Bear() {
		setState("not sleeping");
	}
	public void attack() {
		if (state.equals("not sleeping")) System.out.println("GroaaR");
		if (state.equals("sleeping")) System.out.println("Zzzzzz");
	}
	
	public void sleep() {
		if (state.equals("sleeping")) throw new RuntimeException("already sleeping");
		else setState("sleeping");
	}
	
	public void wakeup() {
		if (state.equals("not sleeping")) throw new RuntimeException("already not sleeping");
		else setState("not sleeping");
	}
	
	private void setState(String state) {
		this.state= state;
	}
	
	public static void main(String[] args) {
		Bear b= new Bear();
		b.attack();
		b.sleep();
		b.attack();
	}
}
