'use client';

import { motion } from 'framer-motion';
import { LeadershipCard } from './LeadershipCard';

const leaders = [
  {
    name: "HRH Sanusi Lamido Sanusi CON",
    title: "Board Member", 
    bio: "HRH Sanusi Lamido Sanusi, Emir of Kano, is a renowned economist, banker, and thought leader in financial inclusion and economic development. As a former Governor of the Central Bank of Nigeria, he spearheaded critical banking reforms that strengthened Nigeria's financial system. He is a strong advocate for inclusive finance, economic policy reforms, and social equity. HRH Sanusi's extensive experience in governance, risk management, and regulatory affairs continues to shape financial sector transformation across Africa.",
    image: "/images/team/sanusi.jpg",
    linkedIn: "https://linkedin.com/in/sanusi-lamido-sanusi"
  },
  {
    name: "Mr. M.K. Ahmad OON",
    title: "Board Member",
    bio: "Mr. M.K. Ahmad is a seasoned financial services expert with over three decades of experience in banking, regulation, and public sector governance. He served as the pioneer Director General of the National Pension Commission (PenCom), leading landmark pension reforms in Nigeria. Mr. Ahmad has held leadership roles across financial institutions and regulatory bodies, contributing to economic policy, financial inclusion, and corporate governance. His expertise in institutional development and financial sector strategy is instrumental in shaping Nigeria's financial inclusion landscape.",
    image: "/images/team/ahmad.jpg",
    linkedIn: "https://linkedin.com/in/mk-ahmad"
  },
  {
    name: "Ms. Arunma Oteh OON",
    title: "Board Member",
    bio: "Ms. Arunma Oteh is a distinguished finance and capital markets expert with a track record of driving economic development and financial market reforms. As the former Director-General of the Securities and Exchange Commission (SEC) Nigeria, she led transformational reforms to enhance investor confidence and market transparency. She also served as Treasurer and Vice President at the World Bank, where she championed sustainable finance and economic inclusion. Ms. Oteh remains a global advocate for financial sector resilience, governance, and innovation.",
    image: "/images/team/oteh.jpg",
    linkedIn: "https://linkedin.com/in/arunma-oteh"
  },
  {
    name: "Mrs. Nimi Akinkugbe",
    title: "Board Member",
    bio: "Mrs. Opunimi Akinkugbe is a financial literacy advocate, banker, and entrepreneur committed to empowering individuals and businesses through financial education. With over two decades of experience in banking and wealth management, she has held leadership roles in leading financial institutions, including Ecobank and Barclays Bank. The one time ambassador of Nigeria to Greece is the founder of Bestman Games, where she pioneers financial literacy initiatives across Africa. Mrs. Akinkugbe's expertise in personal finance, entrepreneurship, and economic empowerment drives her passion for inclusive financial systems.",
    image: "/images/team/nimi.jpg",
    linkedIn: "https://linkedin.com/in/nimi-akinkugbe"
  },
  {
    name: "Dr. Agnes Olarokunbo Martins",
    title: "Board Member",
    bio: "Dr. Agnes Olaro-nbo Martins is a distinguished financial expert and visionary leader with over 15 years of experience shaping and advancing the Nigerian financial sector. Her extensive career at the Central Bank of Nigeria includes pivotal roles in banking and other financial institution supervision, where she implemented critical regulatory policies, fostered collaboration with stakeholders, and demonstrated her exceptional ability to manage financial crises.",
    image: "/images/team/agnes.jpg",
    linkedIn: "https://linkedin.com/in/agnes-martins"
  },
  {
    name: "Olu Akanmu",
    title: "Board Member",
    bio: "Olu Akanmu was, until recently, President and Co-CEO of OPay-Nigeria, one of Nigeria's largest fintech platforms with Unicorn valuation. He has an unusual, diverse C-level strategic leadership experience across several industries, including healthcare (HMO), telecommunications, banking, retail, and non-profit sectors, with a track record of growing and scaling businesses successfully across these industries.",
    image: "/images/team/olu.jpg",
    linkedIn: "https://linkedin.com/in/olu-akanmu"
  },
  {
    name: "Prof. Janice Olawoye",
    title: "Board Member",
    bio: "Prof Olawoye is a Professor of Rural Sociology, with extensive experience in research in rural development particularly in gender issues. She has over 70 publications in journals, chapters of books, and other professional outlets, and she has carried out well over 60 research assignments for several national and international development organizations, including the World Bank, FAO, and IFAD.  She has supervised many undergraduate and postgraduate students, including 30 Ph.D. students.   Janice Olawoye has also served on the boards of several NGOs, including charitable organizations.",
    image: "/images/team/janice.jpg",
    linkedIn: "https://linkedin.com/in/janice-olawoye"
  },
  {
    name: "Mrs. Saude Atoyebi",
    title: "Board Member",
    bio: "Saude Amina Atoyebi is a public sector consultant focused on public policy, social protection, and financial inclusion, currently supporting the Gates Foundation's Inclusive Financial Systems team to expand and consolidate their work in Nigeria. She previously held different positions in the Kaduna State Government and concluded her tenure with two capstone roles: Deputy Chief of Staff and pioneer Head of the Kaduna State Social Investment Office, where she led the transformation of the Social Protection sector.",
    image: "/images/team/saude.jpg",
    linkedIn: "https://linkedin.com/in/saude-atoyebi"
  },
  {
    name: "Mr. Kola Aina",
    title: "Board Member",
    bio: "Kola is an established investor, insightful non-Executive director, and company chair passionate about seeing start-ups grow and improving the lives of ordinary Africans by democratising prosperity. He brings demonstrable success from leading investment in over 70 companies in Africa, India, and the US, including payments companies such as Paystack. He has established networks across the private sector, development partners, financiers, governments, and regulators.",
    image: "/images/team/kola.jpg",
    linkedIn: "https://linkedin.com/in/kola-aina"
  },
  {
    name: "Foyinsolami Akinjayeju",
    title: "Chief Executive Officer",
    bio: 'Foyin Akinjayeju serves as the CEO at EFInA. She is an accomplished business leader with over two decades of experience in strategy, financial management, and operational transformation across corporate and non-profit sectors. She has a proven track record of driving growth, fostering innovation, and delivering impactful results in financial inclusion. Prior to joining EFInA as CEO, she led a network of 45 schools in low-income communities, achieving significant enrolment and revenue growth. A chartered accountant with an MBA from the Lagos Business School, she previously held senior leadership roles at PricewaterhouseCoopers (PwC) and Phillips Consulting, where she led high-impact projects, including the establishment of a Development Finance Institution in Nigeria. While at PwC, she managed the Africa Desk in Japan, promoting \'Into-Africa\' investments.',
    image: "/images/team/foyin.jpg",
    linkedIn: "https://linkedin.com/in/foyinsolami-akinjayeju"
  }
];

export const Leadership = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-[56px] leading-[1.2] mb-8 md:mb-16 text-gray-900 font-bold"
        >
          Our Leadership
        </motion.h2>

        <div className="grid grid-cols-1 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <LeadershipCard {...leader} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};