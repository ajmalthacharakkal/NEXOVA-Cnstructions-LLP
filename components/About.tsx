'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-blue-500/10 text-blue-600 rounded-full text-sm font-medium mb-6"
          >
            About NEXOVA
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-nexova-dark mb-6"
          >
            Building Excellence in Commercial Construction
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            NEXOVA Constructions LLP is a newly established premier construction company specializing exclusively in 
            commercial and industrial projects. We deliver premium construction solutions with unwavering commitment 
            to quality, precision, and integrity.
          </motion.p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-nexova-gray rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-nexova-dark mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver exceptional commercial construction solutions that exceed client expectations through 
              innovative engineering, sustainable practices, and unwavering commitment to quality.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-nexova-gray rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-nexova-dark mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the most trusted and innovative commercial construction partner, recognized for 
              engineering excellence, sustainable building practices, and transformative project delivery.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-nexova-gray rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-nexova-dark mb-4">Core Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Integrity, excellence, innovation, and customer satisfaction form the foundation of every 
              project we undertake, ensuring lasting relationships and exceptional results.
            </p>
          </motion.div>
        </div>

        {/* Core Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 to-sky-500 rounded-3xl p-8 sm:p-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Our Core Principles
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: 'Engineering Excellence', icon: '⚙️' },
              { title: 'Safety First', icon: '🛡️' },
              { title: 'Innovation', icon: '💡' },
              { title: 'Quality', icon: '✨' },
              { title: 'Customer Satisfaction', icon: '🤝' },
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index + 0.5 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h4 className="text-white font-semibold mb-2">{principle.title}</h4>
                <p className="text-white/90 text-sm">
                  {index === 0 && 'Precision engineering in every project'}
                  {index === 1 && 'Uncompromising safety standards'}
                  {index === 2 && 'Cutting-edge construction methods'}
                  {index === 3 && 'Superior quality materials & workmanship'}
                  {index === 4 && 'Client-focused approach always'}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
