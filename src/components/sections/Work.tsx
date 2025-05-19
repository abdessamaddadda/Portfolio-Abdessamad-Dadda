import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const Work: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'ECO SAGE',
      category: 'Application Web',
      description: 'Application de gestion budgétaire développée avec Django permettant aux utilisateurs de suivre leurs revenus et dépenses.',
      image: 'https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      tags: ['Python', 'Django', 'SQLite', 'Bootstrap'],
    },
    {
      id: 2,
      title: 'MIELLA BAGS',
      category: 'E-commerce',
      description: 'Plateforme en ligne pour une marque marocaine des bags. Gestion des commandes, gestion des produits, création des annonces, et gestion réseaux sociaux.',
      image: 'https://images.pexels.com/photos/5705492/pexels-photo-5705492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      tags: ['REACT JS', 'Marketing', 'Design Produit', 'Réseaux sociaux'],
    },
    {
      id: 3,
      title: 'DA SHOP',
      category: 'Boutique en ligne',
      description: 'Développement d’une boutique de mode en ligne avec interface utilisateur personnalisée et options de panier.',
      image: 'https://images.pexels.com/photos/5632392/pexels-photo-5632392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      tags: ['React', 'CSS', 'EmailJS', 'WhatsApp'],
    },
    {
      id: 4,
      title: 'NTIC RABAT - Emploi du Temps',
      category: 'Plateforme Éducative',
      description: 'Application web permettant aux étudiants et enseignants de consulter les emplois du temps de façon dynamique.',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      tags: ['React', 'Firebase', 'Material UI'],
    },
  ];

  return (
    <section id="work" className="py-20 bg-black dark:bg-black">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <SectionTitle>Mes Projets</SectionTitle>

        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-gray-900 rounded-lg shadow-md dark:bg-gray-900 hover:shadow-lg">
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute px-2 py-1 text-xs text-white bg-blue-600 rounded top-4 left-4">
          {project.category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white dark:text-white">{project.title}</h3>
        <p className="mt-2 text-gray-300 dark:text-gray-300">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs text-gray-300 bg-gray-800 rounded-full dark:bg-gray-800 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
