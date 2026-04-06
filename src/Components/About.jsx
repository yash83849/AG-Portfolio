import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 min-h-screen flex items-center justify-center py-16 px-6 text-slate-100">
      <div className="max-w-5xl w-full bg-slate-800 shadow-xl rounded-2xl p-10 border border-slate-700 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>

       
        <h1 className="text-5xl font-bold text-center mb-8 text-cyan-300">
          About 
        </h1>

        
        <div className="text-lg leading-relaxed space-y-4">
          <p>
            Hi! I'm <span className="font-semibold text-cyan-300">Aditya Gupta</span>, a seasoned
            <span className="font-semibold text-white"> Java Backend Engineer</span> with experience delivering
            highly reliable RESTful APIs and microservices for enterprise domains.
          </p>

          <p>
            Expertise includes Java, Spring Boot, Spring Cloud, OAuth2, JWT authentication, MySQL, Couchbase,
            PostgreSQL, Redis, and containerized cloud deployments. I write clean architecture, robust test suites,
            and maintainable backend services.
          </p>

          <p>
            Passionate about optimizing performance, enabling secure integration, and mentoring teams on best practices.
          </p>

          <p>
            Outside of coding, I am interested in UI/UX design and exploring tools that improve user experience.
          </p>
        </div>

       
        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-6 text-cyan-300">Skills</h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Java",
              "Spring Boot",
              "Microservices",
              "REST APIs",
              "MySQL",
              "PostgreSQL",
              "Couchbase",
              "Redis",
              "Docker",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 bg-cyan-100 text-slate-900 rounded-full font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
