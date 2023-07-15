import {KeycloakConfig} from "keycloak-js";

const keycloakConfig:KeycloakConfig={
  url:'http://localhost:8080/auth',
  realm:'keycloakdemo',
  clientId:'angular-app'
}

export default keycloakConfig;
