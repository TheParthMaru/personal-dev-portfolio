import React from "react";

function Experience() {
  return (
    <section id="experience" className="mt-20 scroll-mt-24">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">WORK EXPERIENCE</h2>
      <div className="relative pl-8 md:pl-12">
        {/* Vertical timeline line, close to cards */}
        <div className="absolute left-2 md:left-5 top-2 bottom-2 w-1 bg-blue-300 rounded z-0"></div>
        {/* Timeline items */}
        <div className="space-y-16">
          {/* Team Lead – 834 Mapper */}
          <div className="relative flex items-start z-10">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm w-full ml-6 border-b border-dotted border-gray-300">
              <h3 className="text-xl font-bold text-black mb-1">Team Lead – 834 Mapper</h3>
              <div className="font-semibold text-black mb-1">
                <span>Javelina – </span>
                <span className="text-blue-700">Mphasis Healthcare Solutions</span>
              </div>
              <div className="text-sm text-gray-700 mb-2">Mar 2024 – Aug 2024</div>
              <ul className="list-disc ml-5 text-gray-700 mb-2">
                <li>Led a team to optimize client data migration, improving performance by 56%.</li>
              </ul>
              <div className="font-semibold text-black">Skills: <span className="font-normal text-gray-700">Java, PostgreSQL, Apache Ant, SVN, Linux, Design Patterns, SOLID Principles</span></div>
            </div>
          </div>
          {/* Maintenance Engineer */}
          <div className="relative flex items-start z-10">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm w-full ml-6 border-b border-dotted border-gray-300">
              <h3 className="text-xl font-bold text-black mb-1">Maintenance Engineer</h3>
              <div className="font-semibold text-black mb-1">
                <span>Javelina – </span>
                <span className="text-blue-700">Mphasis Healthcare Solutions</span>
              </div>
              <div className="text-sm text-gray-700 mb-2">Sept 2022 – Mar 2024</div>
              <ul className="list-disc ml-5 text-gray-700 mb-2">
                <li>Resolved software bugs, documented fixes, and collaborated with analysts.</li>
              </ul>
              <div className="font-semibold text-black">Skills: <span className="font-normal text-gray-700">Java, PostgreSQL, JDBC, Apache Ant, SVN, Linux</span></div>
            </div>
          </div>
          {/* Production Support Engineer */}
          <div className="relative flex items-start z-10">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm w-full ml-6">
              <h3 className="text-xl font-bold text-black mb-1">Production Support Engineer</h3>
              <div className="font-semibold text-black mb-1">
                <span>Javelina – </span>
                <span className="text-blue-700">Mphasis Healthcare Solutions</span>
              </div>
              <div className="text-sm text-gray-700 mb-2">Oct 2021 – Sept 2022</div>
              <ul className="list-disc ml-5 text-gray-700 mb-2">
                <li>Conducted Root Cause Analysis (RCA) and implemented SQL-based solutions.</li>
              </ul>
              <div className="font-semibold text-black">Skills: <span className="font-normal text-gray-700">Java, PostgreSQL, JIRA</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience; 