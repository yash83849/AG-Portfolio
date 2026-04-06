import React from "react";

export default function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 px-6 py-12 text-slate-100">
      <div className="max-w-4xl mx-auto">

        <div className="text-4xl font-bold text-cyan-300 text-center mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          My Work
        </div>

        <div className="space-y-8">

          {/* Senior Engineer */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border-l-4 border-cyan-500 hover:shadow-xl transition-all animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            <div className="text-2xl font-semibold text-white">Senior Engineer</div>
            <div className="text-cyan-300 font-medium">Nagarro Software Pvt. Ltd.</div>
            <div className="text-sm text-slate-300 mb-3">07/2024 – Present</div>
            <div className="text-slate-300 leading-relaxed">
              Lead backend integration for high-profile payment and customer onboarding services. Delivered scalable microservices, improved API telemetry and reliability, and reduced deployment incidents through automation.
            </div>
          </div>

          {/* Engineer */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border-l-4 border-cyan-500 hover:shadow-xl transition-all animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
            <div className="text-2xl font-semibold text-white">Engineer</div>
            <div className="text-cyan-300 font-medium">Nagarro Software Pvt. Ltd.</div>
            <div className="text-sm text-slate-300 mb-3">10/2022 – 06/2024</div>
            <div className="text-slate-300 leading-relaxed">
              Developed scalable and secure REST APIs with Java and Spring Boot. Collaborated on automation testing for core products, microservices, and backend integration tests.
            </div>
          </div>

          {/* Associate Engineer */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border-l-4 border-cyan-500 hover:shadow-xl transition-all animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
            <div className="text-2xl font-semibold text-white">Associate Engineer</div>
            <div className="text-cyan-300 font-medium">Nagarro Software Pvt. Ltd.</div>
            <div className="text-sm text-slate-300 mb-3">09/2021 – 09/2022</div>
            <div className="text-slate-300 leading-relaxed">
              Improved backend reliability and built authentication workflows. Supported production deployments and technical documentation for APIs, Swagger, and deployment pipelines.
            </div>
          </div>

          {/* Software Engineer Trainee */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border-l-4 border-cyan-500 hover:shadow-xl transition-all animate-fade-in-up" style={{ animationDelay: '0.55s' }}>
            <div className="text-2xl font-semibold text-white">Software Engineer Trainee</div>
            <div className="text-cyan-300 font-medium">Nagarro Software Pvt. Ltd.</div>
            <div className="text-sm text-slate-300 mb-3">03/2021 – 08/2022</div>
            <div className="text-slate-300 leading-relaxed">
              Completed formal training in Java and backend technology. Delivered end-to-end project modules and gained hands-on experience with Spring Boot and microservices.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
