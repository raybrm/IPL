import com.owlike.genson.Context;
import com.owlike.genson.Converter;
import com.owlike.genson.stream.ObjectReader;
import com.owlike.genson.stream.ObjectWriter;

class FilmConverter implements Converter<Film> {
	@Override
	  public void serialize(Film film, ObjectWriter writer, Context ctx) throws Exception {
	    writer.beginObject();
	    writer.writeNumber("id", film.id)
	          .writeString("title", film.title)
	          .writeNumber("duration", film.duration)
	          .writeString("producer", film.producer)
	          .writeNumber("budget", film.budget);
	    writer.endObject();
	  }

	@Override
	public Film deserialize(ObjectReader arg0, Context arg1) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	
	}
