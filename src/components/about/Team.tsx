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
    name: "Name goes here",
    position: "Position goes here",
    image: "/images/team/member1.jpg",
    fallbackColor: pastelColors[0],
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    name: "Name goes here",
    position: "Position goes here",
    image: "/images/team/member2.jpg",
    fallbackColor: pastelColors[1],
    // No bio - will have simple hover effect
  },
  {
    name: "Name goes here",
    position: "Position goes here", 
    image: "/images/team/member3.jpg",
    fallbackColor: pastelColors[2]
  },
  {
    name: "Name goes here",
    position: "Position goes here",
    image: "/images/team/member4.jpg",
    fallbackColor: pastelColors[3]
  },
  {
    name: "Name goes here",
    position: "Position goes here",
    image: "/images/team/member5.jpg",
    fallbackColor: pastelColors[4]
  },
  {
    name: "Name goes here",
    position: "Position goes here",
    image: "/images/team/member6.jpg",
    fallbackColor: pastelColors[5]
  },
  {
    name: "Name goes here",
    position: "Position goes here",
    image: "/images/team/member7.jpg",
    fallbackColor: pastelColors[6]
  },
  {
    name: "Name goes here",
    position: "Position goes here",
    image: "/images/team/member8.jpg",
    fallbackColor: pastelColors[7]
  }
];

export const Team = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-[56px] leading-[1.2] text-left mb-20 text-gray-900"
        >
          Meet the people who <br /> drive our initiatives forward
        </motion.h2>

        <div className="grid grid-cols-4 gap-8">
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