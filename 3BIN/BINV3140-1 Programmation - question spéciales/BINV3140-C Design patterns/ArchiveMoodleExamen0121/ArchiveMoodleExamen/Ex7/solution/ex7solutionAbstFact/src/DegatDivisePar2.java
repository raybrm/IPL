
public class DegatDivisePar2 extends Decorator {
	
	public DegatDivisePar2(Robot r) {
		super(r);
	}


	@Override
	public int diffLife(int i) {
		if(i<0)
		return super.diffLife(i/2);
		else return super.diffLife(i);
	}

}
