
public class BouclierMultipliePar2 extends Decorator{

	public BouclierMultipliePar2(Robot r) {
		super(r);
	}

	@Override
	public int getShield() {
		return 2*super.getShield();
	}


}
