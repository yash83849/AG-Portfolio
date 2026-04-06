import React from "react";

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 px-6 py-12 flex items-center justify-center">
      <div className="max-w-5xl w-full">

        <div className="text-4xl text-cyan-300 font-bold text-center mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          My Services
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 justify-center">

          {/* Java Backend Development Card */}
          <div className="bg-slate-800 text-slate-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-l-4 border-cyan-500 animate-fade-in-left" style={{ animationDelay: '0.25s' }}>
            <div className="text-2xl font-semibold mb-2">Java Backend Development</div>
            <div className="text-slate-300 leading-relaxed">
              Backend Development (Java, Spring Boot) | REST API Development & Integration | Microservices Architecture | Database Management (MySQL, PostgreSQL, Redis, Couchbase) | Payment & UPI Integration | Cloud Deployment (Azure) | Performance Optimization & Debugging | API Security (OAuth) | Logging & Monitoring (Sentry) | API Documentation (Swagger).
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
