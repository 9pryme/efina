import Image from 'next/image';

export const MissionSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-display-sm mb-6">Our Mission</h2>
            <p className="text-body-lg text-gray-600 mb-8">
              To enable financial development that will benefit all Nigerians, 
              particularly the unserved and underserved.
            </p>
            <div className="space-y-4">
              {[
                'Research & Data Analysis',
                'Policy & Advocacy',
                'Innovation & Market Building',
                'Capacity Building'
              ].map((item) => (
                <div key={item} className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span className="text-body-md">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/mission.jpg"
              alt="Our mission in action"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}; 