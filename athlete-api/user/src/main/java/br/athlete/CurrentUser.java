package br.athlete;

import io.quarkus.amazon.lambda.http.CognitoPrincipal;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.core.SecurityContext;

import java.util.Optional;

@ApplicationScoped
public class CurrentUser {

  @Inject
  SecurityContext securityContext;


  private Optional<CognitoPrincipal> getPrincipal() {
    CognitoPrincipal principal = (CognitoPrincipal) securityContext.getUserPrincipal();

    System.out.println("CurrentUser.getPrincipal: principal=" + principal.getSubject());
    System.out.println("CurrentUser.getPrincipal: claims=" + principal.getClaims());

    return Optional.ofNullable(principal);
  }

  public Optional<String> email() {
    return getAttribute("email");
  }

  public Optional<String> username() {
    return getPrincipal().map(CognitoPrincipal::getName);
  }


  public Optional<String> getAttribute(String attributeName) {
    return getPrincipal().flatMap(p -> p.getClaim(attributeName));
  }
}
