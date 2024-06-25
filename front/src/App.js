// React Router
import { Route, Routes } from 'react-router-dom';

// Keycloak
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";

// Components
import Header from './components/header.js';
import MainSite from './containers/main-site/main.js';

// Styles
import './styleSheet/main/app.css';
import './styleSheet/main/main-site/main-site.css';
import './styleSheet/main/components/header/header.css';

function App() {
  return (
    <div className="App">
      <ReactKeycloakProvider authClient={keycloak}>
        <Header />
        <Routes>
          <Route path="/" element={<MainSite />} />
        </Routes>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
