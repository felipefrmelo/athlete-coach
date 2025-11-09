package br.athlete;

import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/hello")
public class GreetingResource {

  @Inject
  CurrentUser currentUser;

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public Hello hello() {

    var username = currentUser.username().orElse("anonymous");

    return new Hello(username);
  }

  @GET
  @Path("/email")
  @Produces(MediaType.APPLICATION_JSON)
  public Hello helloEmail() {

    var email = currentUser.email().orElse("no-email");

    return new Hello(email);
  }

  public record Hello(String Hello) {
  }
}
