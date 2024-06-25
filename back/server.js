const express = require("express");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const cors = require("cors");
const app = express();
const port = 3001;

const { NodeAdapter } = require("ef-keycloak-connect");
const config = {
  "realm": "js-realm",
  "auth-server-url": "http://localhost:8080/",
  "ssl-required": "external",
  "resource": "node-client",
  "public-client": true,
  "use-resource-role-mappings": true,
  "confidential-port": 0,
};
const keycloak = new NodeAdapter(config);

app.use(
  session({
    secret: "qFYU5RaeLOWwZd50qMyE2mf9MF4SUWmY",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(cors({ credentials: true }));
app.use(keycloak.middleware());

app.get("/", keycloak.protect(), (req, res) => {
  const token = req.kauth.grant.access_token.token;
  const decodedToken = jwt.decode(token, { complete: true });

  if (decodedToken) {
    const roles = decodedToken.payload.realm_access.roles || [];
    const response = roles.includes("admin")
      ? {
          text: "You're the admin, there's our best coffee for you!",
          src: "https://img.freepik.com/free-photo/delivery-man-employee-black-cap-blank-tshirt-uniform-holding-coffee-cups-food-containers-looking-camera-happy-positive-smiling-friendly-standing-orange-background_141793-137066.jpg?t=st=1717517497~exp=1717521097~hmac=2b7967171871b3254f979bf5927ce11ad063fa0aa80e8aa7a32d7067115c0588&w=740",
        }
      : {
          text: "Coffee as usual for our user!",
          src: "https://img.freepik.com/free-vector/coffee-cup-cute-trendy-retro-cartoon-vector-hand-drawn_179234-577.jpg?t=st=1717517556~exp=1717521156~hmac=a6ce9e8f2b8233ab23c15ee9bcc4eb54cc45203cd525fdd03858b6ff40646ca0&w=740",
        };

    res.json(response);
  } else {
    res.status(401).json({ error: "Invalid token" });
  }
    // res.json("Hello")
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
