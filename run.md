### 1. Uruchom keycloak
docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e
KEYCLOAK_ADMIN_PASSWORD=admin --name keycloak4
quay.io/keycloak/keycloak:21.0.2 start-dev

### 2. Stwórz 2 realm:
- 'react-realm'
- 'js-realm'

### 3. Stwórz dwóch klientów
- dla 'react-realm' stwórz klienta 'react-client'
- dla 'js-realm' stwórz klienta 'node-client'

### 4. Określ ścieżki
- dla klienta 'react-client'
    - Root URL: 'http://localhost:8080/'
    - Valid redirect URls: http://localhost:8080/*
- dla 'js-realm' stwórz klienta 'node-client'
    - Root URL: 'http://localhost:3001/'
    - Valid redirect URls: http://localhost:3001/*

### 5. Dla każdego z klientów dodaj użytkownika i przypisz hasło

### 6. (Opcjonalnie): Stworz role
Dla klienta node-client może zostać stworzona dodatkowa rola 'admin'. Przypisz ją do użytkownika a zobaczysz delikatnie inny response.