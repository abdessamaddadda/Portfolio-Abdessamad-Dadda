import React from 'react';
import { FileDown } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const CV: React.FC = () => {
  const handleDownloadCV = () => {
    const element = document.createElement('a');
    const file = new Blob(
      [
        'CV Abdessamad Dadda\n\nPROFIL\nStagiaire en développement digital avec expérience en développement web full stack. Compétent en React, Python, PHP, et base de données. Passionné, autonome et rigoureux.\n\nEXPÉRIENCE\nDéveloppeur - Laboratoire National des Ressources Numériques (Projet Génie) - 2024\nDéveloppement d’une plateforme éducative interactive (cours, quiz, jeux).\n\nCréation et gestion d’une boutique e-commerce – Blackshoop – Sala Al Jadida – 2022-2024\n\nEmployé en magasin de vêtements – Commerce Sala Al Jadida – 2018-2020\n\nPROJETS\nApplication de Gestion Budgétaire – Python Django\nApplication de Consultation des Emplois du Temps – ISTA NTIC Rabat\n\nFORMATION\nCertificat en Innovation Entrepreneuriale – ISTA NTIC Rabat – 2022-2024\nDEUG Développement Full Stack – ISTA NTIC Rabat – 2022-2024\nBaccalauréat SVT – Lycée Hassan II – 2021-2022\n\nCOMPÉTENCES\nFront-End: HTML, CSS, JavaScript, React.js, Bootstrap\nBack-End: PHP, Python, .NET Core\nBase de Données: MySQL, Oracle, SQL Server\nDevOps: Git/GitHub, UML, Merise, Agile\nSystèmes: Linux\n\nLANGUES\nArabe: Langue maternelle\nFrançais: Opérationnel\nAnglais: Opérationnel\n\nCONTACT\nTéléphone: +212 775-205928\nEmail: daddaabdessamad1@gmail.com\nAdresse: Sala Al Jadida, Maroc'
      ],
      { type: 'text/plain' }
    );
    element.href = URL.createObjectURL(file);
    element.download = 'CV_Abdessamad_Dadda.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="cv" className="py-20 bg-black">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <SectionTitle>Curriculum Vitae</SectionTitle>

        <div className="flex justify-center mt-12">
          <div className="w-full max-w-4xl overflow-hidden bg-gray-900 rounded-lg shadow-md">
            <div className="p-8">
              <div className="flex flex-wrap items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">Abdessamad Dadda</h3>
                  <p className="mt-1 text-blue-400">Développeur Full Stack</p>
                </div>
                <Button onClick={handleDownloadCV} className="mt-4 sm:mt-0">
                  <FileDown size={16} className="mr-2" />
                  Télécharger le CV
                </Button>
              </div>

              <div className="mt-8 space-y-10">
                <div>
                  <h4 className="mb-4 text-xl font-semibold text-gray-200">Expérience</h4>
                  <ExperienceItem
                    title="Développeur Web"
                    company="Laboratoire National des Ressources Numériques"
                    period="2024"
                    description="Développement d’une plateforme éducative (cours, quiz, jeux interactifs) pour l’institut Akabar."
                  />
                  <ExperienceItem
                    title="Gestionnaire e-commerce"
                    company="Blackshoop, Sala Al Jadida"
                    period="2022 - 2024"
                    description="Création et gestion d’une boutique en ligne via YOUCAN, gestion des produits et réseaux sociaux."
                  />
                  <ExperienceItem
                    title="Employé de vente"
                    company="Commerce, Sala Al Jadida"
                    period="2018 - 2020"
                    description="Responsable de vente et conseil clientèle dans un magasin de vêtements."
                  />
                </div>

                <div>
                  <h4 className="mb-4 text-xl font-semibold text-gray-200">Formation</h4>
                  <ExperienceItem
  title="Licence en Développement Web et Mobile"
  company="ISMAGI, Rabat"
  period="2024 - Présent"
  description="Actuellement en 3ᵉ année de licence, approfondissant les compétences en développement d'applications web et mobiles."
/>
                  <ExperienceItem
                    title="Certificat en Innovation Entrepreneuriale"
                    company="ISTA NTIC Rabat"
                    period="2022 - 2024"
                    description=""
                  />
                  <ExperienceItem
                    title="DTS En Développement Full Stack"
                    company="ISTA NTIC Rabat"
                    period="2022 - 2024"
                    description="Formation approfondie en développement web front-end et back-end."
                  />
                  <ExperienceItem
                    title="Baccalauréat Sciences de la Vie et de la Terre"
                    company="Lycée Hassan II, Sala Al Jadida"
                    period="2021 - 2022"
                    description=""
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, period, description }) => (
  <div className="py-1 pl-4 border-l-2 border-blue-500">
    <h5 className="text-lg font-medium text-gray-200">{title}</h5>
    <div className="flex items-center justify-between mt-1">
      <span className="text-gray-400">{company}</span>
      <span className="text-sm text-gray-500">{period}</span>
    </div>
    {description && <p className="mt-2 text-gray-300">{description}</p>}
  </div>
);

export default CV;
