import React from "react";
import { motion } from "framer-motion";

// Keycloak
import { useKeycloak } from "@react-keycloak/web";

// React Router
import { Outlet, Link } from "react-router-dom";

// database
import database from "../../main.json";


function MainSite() {
    const { keycloak } = useKeycloak();
    return (
    <div className="content">
        <div className="box">
            <div className="title">
                <span>UG website for administrations</span>
            </div>
            <div className="subject-descrition">
                {/* <span>{database["main"]["subject-description"]}</span> */}
                <img src="/forUG.png" alt="home" />
                
            </div>
            {/* <div className="overview">
                <div className="content-header">Program Overview:</div>
                <span>{database["main"]["program-overview"]}</span>
            </div>
            <div className="skills">
                <div className="content-header">Skills:</div>
                <div className="skill-button-box">
                    {database["main"]["skills"].map(content => <button className="skill-button" key={`main-site-button-${content}`}>{content}</button>
                    )}
                </div>
                
            </div>
            <div className="career">
                <div className="content-header">Career Prospects:</div>
                <span>{database["main"]["career-prospects"]}</span>
            </div> */}
            <motion.div
                className="content-button-box-login"
                whileHover={{ scale: 1.1 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                >
                <div className="keycloack-button">
                    {!keycloak.authenticated && (
                    <button
                        type="button"
                        onClick={() => keycloak.login()}
                    >
                        Log in as admin or user
                    </button>
                    )}

                    {!!keycloak.authenticated && (
                    <button
                        type="button"
                        onClick={() => keycloak.logout()}
                    >
                        Logout as admin or user ({keycloak.tokenParsed.preferred_username})
                    </button>
                    )}
                </div>
            </motion.div>
            <motion.div
                className="content-button-box"
                whileHover={{ scale: 1.1 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                >
                <Link to="http://52.91.184.182/" className="roadmap-button">Roadmap of the subject</Link>
            </motion.div>
        </div>
        
        <Outlet />
    </div>
    );
}

export default MainSite;