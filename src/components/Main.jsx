import React from "react";
import Introduction from "./Introduction";
import GradientLine from "./GradientLine";
import Subheading from "./Subheading";
import Project from "./Project";
import projectDetails from "../project-details";
import Skills from "./Skills";

function createProject(project) {
    return (
        <Project 
            key={project.id}
            link={project.link}
            name={project.name}
            techStack={project.techStack}
            content={project.content}
        />
    )
}

function Main() {
    return (
        <div>
            <GradientLine />

            <Introduction />

            <GradientLine />

            <Subheading text="My Projects"/>
            
            {projectDetails.map(createProject)}

            <GradientLine />

            <Subheading text="My Skills"/>

            <Skills />
        </div>
    )
};

export default Main;