'use client';

import { CloudinaryImage } from '@/src/components/ui/CloudinaryImage';

const partners = [
  {
    name: "Partner 1",
    logo: "partners/logo1",  // Instead of /images/partners/logo1.png
  },
  // ... update other partner logos similarly
];

export const Partners = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div key={partner.name} className="relative w-full h-16">
              <CloudinaryImage
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 