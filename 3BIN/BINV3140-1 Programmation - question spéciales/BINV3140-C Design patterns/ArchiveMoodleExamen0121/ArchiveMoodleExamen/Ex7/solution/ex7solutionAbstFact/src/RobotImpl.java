
public class RobotImpl implements Robot {
	private int life;
	private final int canon;
	private final int shield;
	private final int freq;
	private final String name;

	private RobotImpl(RobotBuilder builder) {
	        this.life = builder.life;
	        this.canon = builder.canon;
	        this.shield = builder.shield;
	        this.freq = builder.freq;
	        this.name = builder.name;
	    }

	@Override
	public int getCanon() {
		return canon;
	}

	@Override
	public int getShield() {
		return shield;
	}

	@Override
	public int getFreq() {
		return freq;
	}

	@Override
	public String getName() {
		return name;
	}

	@Override
	public int diffLife(int i) {
		life += i;
		return life;
	}
	
	public static class RobotBuilder {
        private final String name;
        private int canon=1;
        private int shield=1;
        private int freq=100;
        private int life=100;
 
        public RobotBuilder(String name) {
            this.name=name;
        }
 
        public RobotBuilder canon(int canon) {
            this.canon = canon;
            return this;
        }
 
        public RobotBuilder shield(int shield) {
            this.shield = shield;
            return this;
        }
 
        public RobotBuilder freq(int freq) {
            this.freq = freq;
            return this;
        }
        
        public RobotBuilder life(int life) {
            this.life = life;
            return this;
        }
 
        public Robot build() {
            return new RobotImpl(this);
        }
 
    }

}
