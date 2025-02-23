import Image from 'next/image';

export const MissionSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-display-sm mb-6">Our Vision</h2>
            <p className="text-body-lg text-gray-600 mb-4">
              All Nigerians are financially included and economically empowered.
            </p>

            <h2 className="font-display text-display-sm mb-6 mt-8">Our Mission</h2>
            <p className="text-body-lg text-gray-600 mb-4">
              Facilitate a market where diverse, affordable and secure digital financial services drive economic growth and make a difference in the lives of EVERY Nigerian.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/images/mission.jpg"
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