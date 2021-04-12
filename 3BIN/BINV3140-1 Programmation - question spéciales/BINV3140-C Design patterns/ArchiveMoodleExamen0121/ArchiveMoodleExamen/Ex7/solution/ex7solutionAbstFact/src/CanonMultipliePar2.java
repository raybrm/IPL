public class CanonMultipliePar2 extends Decorator {

	public CanonMultipliePar2(Robot r) {
		super(r);
	}

	@Override
	public int getCanon() {
		return 2 * super.getCanon();
	}


}