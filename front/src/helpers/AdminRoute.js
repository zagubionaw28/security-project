import { useKeycloak } from "@react-keycloak/web";
import NotLogged from "../pages/NotLogged";

const AdminRoute = ({ children }) => {
 const { keycloak } = useKeycloak();

 const isAdmin = keycloak.authenticated && keycloak.hasRealmRole("admin");

 return isAdmin ? children : <NotLogged />;
};

export default AdminRoute;