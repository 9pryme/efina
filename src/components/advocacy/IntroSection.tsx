import { BeliefCard } from './BeliefCard';

const beliefs = [
  "Financial inclusion should be a major objective of financial regulators.",
  "Regulators should establish environments that allow a diverse range of institutions to provide a variety of financial products and services.",
  "Regulators should be flexible in their approach; they must mitigate risks without limiting innovation.",
  "Regulators should ensure that they adequately supervise financial services providers, so as to maintain stability and the integrity of the financial system.",
  "Regulators should ensure that anti-money laundering and anti-terrorist financing regulations do not hinder access to financial services for poor people."
];

export const IntroSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            The capacity of financial services regulators and policy makers to develop an enabling environment for innovation and financial inclusion is an essential part of the development of the financial sector.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            EFInA works closely with regulators and policy makers in Nigeria to foster an environment that supports the growth and development of innovative inclusive financial services for the unbanked and under-banked.
          </p>
        </div>

        <div className="max-w-6xl mt-16">
          <h2 className="text-2xl font-display text-gray-900 mb-8">
            EFInA believes that
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {beliefs.map((belief, index) => (
              <BeliefCard 
                key={index}
                text={belief}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 