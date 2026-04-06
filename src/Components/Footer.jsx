import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-8 px-4 text-center border-t border-slate-800 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <p className="text-sm">© {new Date().getFullYear()} Aditya Gupta. Built with React and Tailwind CSS.</p>
      <p className="text-xs opacity-80 mt-1">Designed for modern readability, consistency, and professional impact.</p>
    </footer>
  )
}

export default Footer