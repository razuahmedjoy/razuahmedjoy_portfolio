import React from 'react';
import ProjectItem from './ProjectItem';
import propertyImg from '../public/assets/projects/property.jpg';

const Projects = () => {
    return (
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p>Projects</p>
                <h2>{`What I've Built`}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem title="Property Finder" backgroundImg={propertyImg} projecturl="/property" />
                    <ProjectItem title="Property Finder" backgroundImg={propertyImg} projecturl="/property" />
                    <ProjectItem title="Property Finder" backgroundImg={propertyImg} projecturl="/property" />
                    <ProjectItem title="Property Finder" backgroundImg={propertyImg} projecturl="/property" />
                </div>

            </div>
        </div>
    );
};

export default Projects;