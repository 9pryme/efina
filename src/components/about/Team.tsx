'use client';

import { motion } from 'framer-motion';
import { TeamCard } from './TeamCard';

const pastelColors = [
  'bg-[#FFB3BA]', // Pastel Pink
  'bg-[#BAFFC9]', // Pastel Green  
  'bg-[#BAE1FF]', // Pastel Blue
  'bg-[#FFFFBA]', // Pastel Yellow
  'bg-[#FFB3F7]', // Pastel Purple
  'bg-[#B3FFF7]', // Pastel Turquoise
  'bg-[#FFC9BA]', // Pastel Orange
  'bg-[#E5BAFF]'  // Pastel Lavender
];

const team = [
  {
    name: "Chioma Nwaiwu",
    position: "Researcher",
    image: "/images/team/Chioma Nwaiwu Bio.jpg",
    fallbackColor: pastelColors[0],
    bio: "An experienced research and program management specialist with over nine years in research, project implementation, and evidence-based decision-making across international development, public health, financial inclusion, and youth development sectors."
  },
  {
    name: "Emezino Afiegbe",
    position: "Financial Inclusion & Gender Specialist",
    image: "/images/team/Emezino_Afiegbe_Profile_Picture.jpg", 
    fallbackColor: pastelColors[1],
    bio: "Emezino \"Zino\" Daniel Afiegbe is an experienced financial inclusion, gender specialist, business development and relationship management executive, hands-on digital payments practitioner and motivational educator."
  },
  {
    name: "Immanuel Umukoro",
    position: "",
    image: "/images/team/Immanuel Umukoro.jpg",
    fallbackColor: pastelColors[2]
  },
  {
    name: "Oluwatomi Eromosele",
    position: "Research Lead",
    image: "/images/team/Oluwatomi Eromosele.jpg",
    fallbackColor: pastelColors[3],
    bio: "Oluwatomi Eromosele is a development economist with over 15years of experience in research and consulting, focusing on economic development, financial inclusion, and employment creation. She leads EFInA's research initiatives"
  },
  {
    name: "Uche Enyioha",
    position: "",
    image: "/images/team/Uche Enyioha.jpg",
    fallbackColor: pastelColors[4]
  }
];

export const Team = () => {
  return (
    <section className="py-16 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-[32px] md:text-[56px] leading-[1.2] text-left mb-10 md:mb-20 text-gray-900 font-bold"
        >
          Meet the people who <br /> drive our initiatives forward
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
          {team.map((member, index) => (
            <TeamCard
              key={index}
              {...member}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 