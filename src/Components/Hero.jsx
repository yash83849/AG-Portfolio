import React from "react";
import passportSizePhoto from "../assets/passportSizePhoto.jpg";


export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 px-6 py-20 text-slate-100">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        
        <div className="text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Hi, I'm <span className="text-cyan-300">Aditya Gupta</span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
            Senior Backend Engineer
          </h2>

          <p className="text-lg md:text-xl leading-relaxed opacity-90 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Senior Engineer at Nagarro with 4+ years in building robust, secure microservices and REST APIs using Java/Spring Boot.
            Proven expertise in high-performance backend architecture, distributed systems, SQL/NoSQL databases, and cloud-native deployment.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white/20 backdrop-blur-md">
            
            <img
              src={passportSizePhoto}
              alt="Aditya Gupta"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        
        

      </div>
    </section>
  );
}
