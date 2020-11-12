public class Tree {
  
  int value;
  
  Tree parent;
  
  Tree[] children;
  
  //*******************************************************
  //CONSTRUCTEURS
  //*******************************************************
  public Tree(int v, Tree[] chd) {
    value = v;
    children = chd;
   
    int i = 0;
    while(i != chd.length) {
      chd[i].parent = this;
      i++;
    }
  }

  public Tree(int v) {
    this(v, new Tree[0]);
  }  
  
  //calcule le nombre de noeuds internes
  public int nbNoeudInterne() {
	  int r;
	  if (this.children.length == 0) { // feuille
		  r = 0;
	  } else {
		  r = 1;
		  for (Tree t : children) {
			  r += t.nbNoeudInterne(); // ajoute � r la r�ponse de tout le sous arbre du fils.
		  }
	  }
	  return r; // retourne r � celui qui � appel� le noeud courrant
  }
  
 
  public static void main(String[] args) {
	  	Tree l1 = new Tree(1);
	    Tree l3 = new Tree(3);
	    Tree l5 = new Tree(5);
	    Tree l7 = new Tree(7);
	    
	    Tree t2 = new Tree(2, new Tree[]{l1});
	    Tree t6 = new Tree(6, new Tree[]{l3, l5, l7});
	    
	    Tree t4 = new Tree(4, new Tree[]{t2, t6});
	    System.out.println(t4.nbNoeudInterne());
}
}
