import { motion } from 'framer-motion';

export const StatsSection = () => {
  const stats = [
    {
      value: '3.7',
      startValue: '2.7',
      unit: 'M',
      prefix: '$',
      label: 'Technical Assistance Grants',
      size: 'normal'
    },
    {
      value: '18.4',
      startValue: '17.4',
      unit: 'M',
      prefix: '',
      label: 'Innovation Grants',
      size: 'normal',
      suffix: '+'
    },
    {
      value: '2',
      startValue: '1',
      unit: 'M',
      prefix: '$',
      label: 'Fintech Challenge Grants',
      size: 'normal',
      suffix: '+'
    },
    {
      value: '4.7',
      startValue: '3.7',
      unit: 'M',
      label: 'Nigerians financially included (2M women)',
      size: 'normal'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl text-center mb-16 text-gray-900 font-bold">
          EFInA&apos;s Impact
        </h2>

        <div className="grid grid-cols-4 gap-6 items-center">
          <motion.div
            key={stats[0].label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center h-[364px] hover:bg-gray-200 transition-colors duration-300"
          >
            <div className="font-display text-4xl mb-3 flex items-baseline text-gray-900 font-bold">
              {stats[0].prefix && (
                <span className="text-2xl mr-1 font-bold">{stats[0].prefix}</span>
              )}
              <span className="text-5xl font-bold">{stats[0].value}</span>
              <span className="text-5xl font-bold">{stats[0].unit}</span>
              {stats[0].suffix && (
                <span className="font-bold">{stats[0].suffix}</span>
              )}
            </div>
            <p className="text-sm text-gray-700">
              {stats[0].label}
            </p>
          </motion.div>

          <div className="col-span-2 space-y-6">
            {[stats[1], stats[2]].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center h-[200px] hover:bg-gray-200 transition-colors duration-300"
              >
                <div className="font-display text-4xl mb-3 flex items-baseline text-gray-900 font-bold">
                  {stat.prefix && (
                    <span className="text-2xl mr-1 font-bold">{stat.prefix}</span>
                  )}
                  <span className="text-5xl font-bold">{stat.value}</span>
                  <span className="text-5xl font-bold">{stat.unit}</span>
                  {stat.suffix && (
                    <span className="font-bold">{stat.suffix}</span>
                  )}
                </div>
                <p className="text-sm text-gray-700">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            key={stats[3].label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center h-[364px] hover:bg-gray-200 transition-colors duration-300"
          >
            <div className="font-display text-4xl mb-3 flex items-baseline text-gray-900 font-bold">
              {stats[3].prefix && (
                <span className="text-2xl mr-1 font-bold">{stats[3].prefix}</span>
              )}
              <span className="text-5xl font-bold">{stats[3].value}</span>
              <span className="text-5xl font-bold">{stats[3].unit}</span>
              {stats[3].suffix && (
                <span className="font-bold">{stats[3].suffix}</span>
              )}
            </div>
            <p className="text-sm text-gray-700">
              {stats[3].label}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};