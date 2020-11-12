import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.io.BufferedReader;
import java.io.IOException;
//import java.nio.file.Files;
//import java.nio.file.Paths;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.auth0.jwt.JWTVerifier;
import com.owlike.genson.Context;
import com.owlike.genson.Converter;
import com.owlike.genson.GenericType;
import com.owlike.genson.Genson;
import com.owlike.genson.GensonBuilder;
import com.owlike.genson.stream.ObjectReader;
import com.owlike.genson.stream.ObjectWriter;

@SuppressWarnings("serial")
public class FilmsServlet extends HttpServlet {
	// this is our GET /fims API providing all the films as a JSON object
	private static final String JWTSECRET = "mybigsecrete123";

	// the route has been secured by a token that shall be provided in order to get
	// some results
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// super.doGet(req, resp);
		try {
			// System.out.println("USERS GET CALL TO GET THE FILM LIST");

			// check if a valid token is provided in the API call
			String token = req.getHeader("Authorization");
			if (token != null) {
				//token = token.replace("Bearer ", "");
				Object userID = null;
				Object ip = null;				
				Map<String, Object> decodedPayload = new JWTVerifier(JWTSECRET).verify(token);
				userID = decodedPayload.get("id");
				ip = decodedPayload.get("ip");
				if (userID != null) {
					//System.out.println("Valid token provided in cookie.");
					// the users DB is a json file

					String json = "{\"success\":\"true\", \"data\":";
					Path path = Paths.get("./data/films.json");
					if (Files.exists(path))
						// get the content of the file to be sent back to the client
						json += new String(Files.readAllBytes(Paths.get("./data/films.json")));
					else
						json += "\"\"";
					json += "}";
					resp.setContentType("application/json");
					resp.setCharacterEncoding("UTF-8");
					resp.setStatus(HttpServletResponse.SC_OK);
					resp.getWriter().write(json);
				}
			} else {
				System.out.println("Unvalid or no token provided.");
				String json = "{\"success\":\"false\", \"error\":\"Unauthorized: this ressource can only be accessed with a valid token.\"";
				resp.setContentType("application/json");
				resp.setCharacterEncoding("UTF-8");
				resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
				resp.getWriter().write(json);
			}
		}

		catch (Exception e) {
			e.printStackTrace();
			// resp.setStatus(500);
			String json = "{\"success\":\"false\", \"error\":";
			json += e.getMessage();
			json += "}";
			resp.setContentType("application/json");
			resp.setCharacterEncoding("UTF-8");
			resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			resp.getWriter().write(json);
		}
	}

	// this is our POST /films API providing all the films as a JSON object
	// the route has been secured by a token that shall be provided in order to get
	// some results
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		try {
			// System.out.println("USERS POST CALL TO ADD A USER");
			// check if a valid token is provided in the API call
			String token = req.getHeader("Authorization");

			if (token != null) {
				//token = token.replace("Bearer ", "");
				Object userID = null;
				Object ip = null;
				Map<String, Object> decodedPayload = new JWTVerifier(JWTSECRET).verify(token);
				userID = decodedPayload.get("id");
				ip = decodedPayload.get("ip");
				if (userID != null) {
					System.out.println("POST " + req.getRequestURI() + ": valid token provided in cookie.");
					// get the parameters sent by the POST form
					// Get the POST parameters sent as JSON
					// NB : req.getParameter(...) can only be used if the data was sent
					// as 'application/x-www-form-urlencoded; charset=UTF-8'

				

					// deserialize the data
					Genson genson2 = new Genson();
					
					Map<String, Object> map = genson2.deserialize(req.getReader(), Map.class);
					String title = map.get("title").toString();
					int duration = Integer.parseInt((String) map.get("duration"));
					String producer = map.get("producer").toString();
					long budget = Long.parseLong((String) map.get("budget"));

					Path path = Paths.get("./data/films.json");
					Genson genson = new Genson();
					// Genson genson = new Genson();
					// since the serialization is made by alphabetic ordre (default behaviour)
					// we need to create a custom converter
					Genson specialGenson = new GensonBuilder().withConverters(new FilmConverter()).create();

					int id;
					List<Film> films;
					String json;

					if (Files.exists(path)) {
						// read the json file (the "DB")
						json = new String(Files.readAllBytes(Paths.get("./data/films.json")));
						// get the JSON object from the string (content of the file): deserialized to a
						// list of map
						films = genson.deserialize(json, new GenericType<List<Film>>() {
						});

						// create the id for the current film based on the last film added
						id = films.get(films.size() - 1).id + 1;
					} else {
						// the json file does not exist, it is the first object to be added in the JSON
						films = new ArrayList<Film>();
						id = 1;
					}

					films.add(new Film(id, title, duration, producer, budget));

					// write or rewrite the ./data/users.json file from the List
					// serialize the collection
					// json = genson.serialize(films);
					// use the special converter in order not to write parameters per alphabetical
					// order
					json = specialGenson.serialize(films);
					System.out.println(json);
					// write the file (even if it exists)
					Files.write(path, json.getBytes());

					// send simply a success info
					json = "{\"success\":\"true\"}";
					resp.setContentType("application/json");
					resp.setCharacterEncoding("UTF-8");
					resp.setStatus(HttpServletResponse.SC_OK);
					resp.getWriter().write(json);
				}
			} else {
				System.out.println("Unvalid or no token provided.");
				String json = "{\"success\":\"false\", \"error\":\"Unauthorized: this ressource can only be accessed with a valid token.\"";
				resp.setContentType("application/json");
				resp.setCharacterEncoding("UTF-8");
				resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
				resp.getWriter().write(json);
			}
		}

		catch (Exception e) {
			e.printStackTrace();
			String json = "{\"success\":\"false\", \"error\":";
			json += e.getMessage();
			json += "}";
			resp.setContentType("application/json");
			resp.setCharacterEncoding("UTF-8");
			resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			resp.getWriter().write(json);
		}
	}

//}

//this is our DELETE /films/:id API deleting a film from a given id
	// the route has been secured by a token that shall be provided in order to get
	// some results
	@Override
	protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		try {
			// System.out.println("USERS POST CALL TO ADD A USER");
			// check if a valid token is provided in the API call
			String token = req.getHeader("Authorization");

			if (token != null) {
				//token = token.replace("Bearer ", "");
				Object userID = null;
				Map<String, Object> decodedPayload = new JWTVerifier(JWTSECRET).verify(token);
				userID = decodedPayload.get("id");
				if (userID != null) {
					System.out.println("DELETE " + req.getRequestURI() + ": valid token provided in cookie.");
					String pathInfo = req.getRequestURI(); // /films/:id
					String[] pathParts = pathInfo.split("/");
					String idToBeDeleted="";
					if (pathInfo.length() > 2) {
						idToBeDeleted = pathParts[2]; // :id
					}

					Path path = Paths.get("./data/films.json");
					Genson genson = new Genson();
					// since the serialization is made by alphabetic ordre (default behaviour)
					// we need to create a custom converter
					Genson specialGenson = new GensonBuilder().withConverters(new FilmConverter()).create();

					int id = Integer.parseInt(idToBeDeleted);
					List<Film> films;
					String json;

					if (Files.exists(path)) {
						// read the json file (the "DB")
						json = new String(Files.readAllBytes(Paths.get("./data/films.json")));
						// get the JSON object from the string (content of the file): deserialized to a
						// list of map
						films = genson.deserialize(json, new GenericType<List<Film>>() {
						});

						// find the film with given id and delete it
						
						for (Film film : films) {
							if (film.id == id) {
								System.out.println("Removed film:" + film.id);
								films.remove(film);
								// rewrite the ./data/users.json file from the List
								// serialize the collection
								// use the special converter in order not to write parameters per alphabetical
								// order
								json = specialGenson.serialize(films);
								System.out.println("before rewrite after delete:" + json);
								// write the file (even if it exists)
								Files.write(path, json.getBytes());

								// send simply a success info
								json = "{\"success\":\"true\"}";
								resp.setContentType("application/json");
								resp.setCharacterEncoding("UTF-8");
								resp.setStatus(HttpServletResponse.SC_OK);
								resp.getWriter().write(json);
								break;

							}
						}

					} else {
						System.out.println("Nothing to be deleted.");
						json = "{\"success\":\"false\", \"error\":\"No data on server could be found.\"";
						resp.setContentType("application/json");
						resp.setCharacterEncoding("UTF-8");
						resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
						resp.getWriter().write(json);
					}

				}
			} else {
				System.out.println("Unvalid or no token provided.");
				String json = "{\"success\":\"false\", \"error\":\"Unauthorized: this ressource can only be accessed with a valid token.\"";
				resp.setContentType("application/json");
				resp.setCharacterEncoding("UTF-8");
				resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
				resp.getWriter().write(json);
			}
		}

		catch (Exception e) {
			e.printStackTrace();
			String json = "{\"success\":\"false\", \"error\":";
			json += e.getMessage();
			json += "}";
			resp.setContentType("application/json");
			resp.setCharacterEncoding("UTF-8");
			resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			resp.getWriter().write(json);
		}
	}	
	
	//this is our PUT /films/:id API updating a film for a given id
		// the route has been secured by a token that shall be provided in order to get
		// some results
		@Override
		protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
			try {
				// System.out.println("USERS POST CALL TO ADD A USER");
				// check if a valid token is provided in the API call
				String token = req.getHeader("Authorization");

				if (token != null) {
					//token = token.replace("Bearer ", "");
					Object userID = null;
					Map<String, Object> decodedPayload = new JWTVerifier(JWTSECRET).verify(token);
					userID = decodedPayload.get("id");
					if (userID != null) {
						System.out.println("UPDATE " + req.getRequestURI() + ": valid token provided in cookie.");
						String pathInfo = req.getRequestURI(); // /films/:id
						String[] pathParts = pathInfo.split("/");
						String idToBeUpdated="";
						if (pathInfo.length() > 2) {
							idToBeUpdated= pathParts[2]; // :id
						}

						Path path = Paths.get("./data/films.json");
						Genson genson = new Genson();
						// since the serialization is made by alphabetic ordre (default behaviour)
						// we need to create a custom converter
						Genson specialGenson = new GensonBuilder().withConverters(new FilmConverter()).create();

						int id = Integer.parseInt(idToBeUpdated);
						List<Film> films;
						String json;

						if (Files.exists(path)) {
							// read the json file (the "DB")
							json = new String(Files.readAllBytes(Paths.get("./data/films.json")));
							// get the JSON object from the string (content of the file): deserialized to a
							// list of map
							films = genson.deserialize(json, new GenericType<List<Film>>() {
							});

							// find the film with given id and update it
							
							for (Film film : films) {
								if (film.id == id) {
									System.out.println("Update film:" + film.id);
									//In order to update all object properties but not the id
									//a) read the JSON data (sent in the body of the PUT request)
									StringBuffer jb = new StringBuffer();
									String line = null;
									try {
										BufferedReader reader = req.getReader();
										while ((line = reader.readLine()) != null)
											jb.append(line);
										System.out.println("READER:" + jb.toString());
									} catch (Exception e) {
										e.printStackTrace();
									}

									// b) deserialize the JSON data (sent in the request body)
									Genson genson2 = new Genson();
									Map<String, Object> map = genson2.deserialize(jb.toString(), Map.class);
									String title = map.get("title").toString();
									int duration = Integer.parseInt((String) map.get("duration"));
									String producer = map.get("producer").toString();
									long budget = Long.parseLong((String) map.get("budget"));
									
									// c) allocate the data to the film found
									film.title = title;
									film.duration = duration;
									film.producer = producer ;
									film.budget = budget;
									
									// rewrite the ./data/users.json file from the List
									// serialize the collection
									// use the special converter in order not to write parameters per alphabetical
									// order
									json = specialGenson.serialize(films);
									System.out.println("before rewrite after update:" + json);
									// write the file (even if it exists)
									Files.write(path, json.getBytes());

									// send simply a success info
									json = "{\"success\":\"true\"}";
									resp.setContentType("application/json");
									resp.setCharacterEncoding("UTF-8");
									resp.setStatus(HttpServletResponse.SC_OK);
									resp.getWriter().write(json);
									break;

								}
							}

						} else {
							System.out.println("Nothing to be deleted.");
							json = "{\"success\":\"false\", \"error\":\"No data on server could be found.\"";
							resp.setContentType("application/json");
							resp.setCharacterEncoding("UTF-8");
							resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
							resp.getWriter().write(json);
						}

					}
				} else {
					System.out.println("Unvalid or no token provided.");
					String json = "{\"success\":\"false\", \"error\":\"Unauthorized: this ressource can only be accessed with a valid token.\"";
					resp.setContentType("application/json");
					resp.setCharacterEncoding("UTF-8");
					resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
					resp.getWriter().write(json);
				}
			}

			catch (Exception e) {
				e.printStackTrace();
				String json = "{\"success\":\"false\", \"error\":";
				json += e.getMessage();
				json += "}";
				resp.setContentType("application/json");
				resp.setCharacterEncoding("UTF-8");
				resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
				resp.getWriter().write(json);
			}
		}
	
}
