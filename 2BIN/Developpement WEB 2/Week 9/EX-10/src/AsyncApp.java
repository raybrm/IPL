
import javax.servlet.http.HttpServlet;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.DefaultServlet;
import org.eclipse.jetty.servlet.ServletHolder;
import org.eclipse.jetty.webapp.WebAppContext;

public class AsyncApp {

	public static void main(String[] args) throws Exception {
		// server to listen on specific port 8080
		Server server = new Server(8080); 
		// create the object to configure the web application
		WebAppContext context = new WebAppContext(); 
		
		System.out.println(context.getContextPath());
		context.setContextPath("/") ;
		
		// this is to be able to make changes to .js files without having to restart everything
		context.setInitParameter("cacheControl","no-store,no-cache,must-revalidate");
		
			
		HttpServlet filmServlet =new FilmsServlet();
		// the user servlet deals with the users GET, POST, DELETE API functions 
		context.addServlet(new ServletHolder(filmServlet), "/films/*");
		
		HttpServlet loginServlet =new LoginServlet();
		// the servlet deals with the login POST API function 
		context.addServlet(new ServletHolder(loginServlet), "/login");
		
		// DefaultServlet : handling static content = publish all your files in a smart way 
		HttpServlet statiContentServlet = new DefaultServlet(); // 
		// set the router by providing the root of the project "/"
		// statiContentServlet will publish files that are given in the ressource base (public) for all requests
		context.addServlet(new ServletHolder(statiContentServlet), "/");

		
		// handling static content : create the shared folder of your web app
		context.setResourceBase("public"); 
	
		// provide the configuration object to the server
		server.setHandler(context); 
		server.start(); 
	}

}