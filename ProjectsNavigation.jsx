// Modern Projects Navigation Component for React Integration
// Copy this into your React app's component structure

import React from 'react';

const ProjectsNavigation = () => {
  const projects = [
    {
      id: 'ballerina-lint',
      title: 'Ballerina Lint',
      description: 'Static analysis and linting tool for Ballerina language',
      icon: '🔍',
      category: 'Developer Tools',
      tech: ['Ballerina', 'Static Analysis', 'Code Quality'],
      link: '/ballerina-lint/',
      github: 'https://github.com/PramithaMJ/ballerina-lint',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'cpu-scheduler',
      title: 'CPU Scheduling Visualizer',
      description: 'Interactive visualization of CPU scheduling algorithms',
      icon: '⚙️',
      category: 'Educational Tool',
      tech: ['JavaScript', 'Canvas API', 'Data Visualization'],
      link: '/cpu-scheduling-visualizer/',
      github: 'https://github.com/PramithaMJ/cpu-scheduling-visualizer',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'ms-petclinic',
      title: 'MS Pet Clinic',
      description: 'Microservices-based Pet Clinic with Spring Boot',
      icon: '🏥',
      category: 'Microservices',
      tech: ['Spring Boot', 'Docker', 'Cloud Native'],
      link: '/ms-petclinic/',
      github: 'https://github.com/PramithaMJ/ms-petclinic',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'gonexus',
      title: 'GoNexus Extension',
      description: 'Enhanced Go development for VS Code',
      icon: '📦',
      category: 'VS Code Extension',
      tech: ['TypeScript', 'VS Code API', 'Go'],
      link: '/gonexus/',
      marketplace: 'https://marketplace.visualstudio.com/items?itemName=Pramitha.gonexus',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'image-segmentation',
      title: 'Image Segmentation Demo',
      description: 'Computer vision algorithms demonstration',
      icon: '🖼️',
      category: 'Computer Vision',
      tech: ['JavaScript', 'Image Processing', 'Algorithms'],
      link: '/image-segmantion/',
      github: 'https://github.com/PramithaMJ/EC-7212-Take-Home-Assignment-02',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                PramithaMJ
              </a>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</a>
              <a href="/projects.html" className="text-indigo-600 font-medium">Projects</a>
              <a href="https://github.com/PramithaMJ" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore my latest work in software development, from developer tools to educational applications
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Border */}
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-8">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center text-2xl shadow-lg`}>
                    {project.icon}
                  </div>
                  <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
                    href={project.link}
                    className={`flex-1 bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-lg font-medium text-center hover:opacity-90 transition-opacity`}
                  >
                    View Project
                  </a>
                  <a 
                    href={project.github || project.marketplace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {project.marketplace ? 'Install' : 'Code'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore More?</h2>
          <p className="text-xl mb-8 text-indigo-100">
            Check out my GitHub for more projects and contributions
          </p>
          <a 
            href="https://github.com/PramithaMJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Visit GitHub Profile
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsNavigation;
