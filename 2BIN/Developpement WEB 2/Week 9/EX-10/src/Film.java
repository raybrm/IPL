class Film {
		public int id;
		public String title;
		public int duration;
		public String producer;
		public long budget;

		// There shall be a constructor with no parameters to set the collection !
		public Film() {
		};

		public Film(int id, String title, int duration, String producer, long budget) {
			this.id = id;
			this.title = title;
			this.duration = duration;
			this.producer = producer;
			this.budget = budget;
		}
	}