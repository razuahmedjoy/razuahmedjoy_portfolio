import React, { useEffect, useState } from 'react';
import ProjectItem from './ProjectItem';
import propertyImg from '../public/assets/projects/property.jpg';
import { FaProductHunt } from 'react-icons/fa';

const Projects = () => {
    const [projects,setProjects] = useState([])
    
    useEffect(() => {
        fetch("data.json")
        .then(res => res.json())
        .then((data) =>setProjects(data))
    },[])
    console.log(projects)
    return (
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p>Projects</p>
                <h2>{`What I've Built`}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {   
                        projects ?
                        projects.map(project=>
                            <ProjectItem key={project.id} title={project.title} backgroundImg={project.images[0]} projectid={project.id} />
                        
                       
                        )
                        :
                        "Loading"
                    }
                </div>

            </div>
        </div>
    );
};

export default Projects;