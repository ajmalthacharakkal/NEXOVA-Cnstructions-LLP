'use client';

import { motion } from 'framer-motion';

export default function Leadership() {
  const leadership = [
    {
      name: 'AHAMMED NIHAL MP',
      position: 'Director',
      biography: 'Director of NEXOVA Constructions LLP. Committed to delivering quality construction solutions with a focus on client satisfaction and innovative approaches.',
      phone: '+91 82813 79352',
      image: '/placeholder-director1.jpg',
      linkedin: '#',
    },
    {
      name: 'Managing Director',
      position: 'Managing Director',
      biography: 'Managing Director information will be updated soon. Leading the company with vision and commitment to excellence in construction.',
      image: '/placeholder-md.jpg',
      linkedin: '#',
    },
  ];

  return (
    <section id="leadership" className="py-20 sm:py-32 bg-nexova-gray">
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
            className="inline-block px-4 py-2 bg-nexova-royal/10 text-nexova-royal rounded-full text-sm font-medium mb-6"
          >
            Leadership Team
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-nexova-dark mb-6"
          >
            Meet Our Leadership
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Our newly established company is led by experienced professionals committed to delivering excellence in commercial construction and building lasting client relationships.
          </motion.p>
        </motion.div>

        {/* Leadership Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leadership.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index + 0.3 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Profile Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-nexova-royal to-blue-900 flex items-center justify-center">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                
                {/* LinkedIn Button */}
                <motion.a
                  href={member.linkedin}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-nexova-royal hover:bg-nexova-royal hover:text-white transition-colors duration-300 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </motion.a>
              </div>

              {/* Profile Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-nexova-dark mb-1">
                  {member.name}
                </h3>
                <p className="text-nexova-royal font-medium mb-4">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.biography}
                </p>
                {member.phone && member.phone !== 'To be updated' && (
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Phone:</span> {member.phone}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-nexova-dark rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Work With Our Expert Team
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience in commercial construction. 
              Partner with us for your next project.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-nexova-royal text-white rounded-lg font-semibold hover:bg-blue-900 transition-all duration-200 transform hover:scale-105"
            >
              Connect With Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
