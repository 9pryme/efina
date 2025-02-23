import Image from 'next/image';

export const MissionSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-display-sm mb-6">Our Mission</h2>
            <p className="text-body-lg text-gray-600 mb-4">
              To promote financial inclusion and create a more equitable financial
              system that works for all Africans.
            </p>
            <ul className="space-y-4 text-body-md">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Conducting groundbreaking research</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Advocating for policy changes</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Supporting innovation in financial services</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/images/mission.jpg" // Add this image to public/images/
              alt="Our mission"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}; 