import React from 'react'
import NavigationBar from './NavigationBar'

function Home() {
  return (
    <>
      {/* Navigation bar placed safely on its own global layer */}
      <NavigationBar />

      <div 
        className="text-light d-flex flex-column align-items-center justify-content-center" 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'linear-gradient(135deg, rgba(8, 28, 44, 0.8) 0%, rgba(2, 10, 18, 0.95) 100%), url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1920") no-repeat center center/cover',
          zIndex: 1000,
          overflow: 'hidden',
          paddingTop: '80px', // Prevents navbar from clipping over the text box
          animation: 'fadeIn 1.5s ease-in-out'
        }}
      >
        {/* CSS Entry Animations */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(1.02); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-up {
            animation: slideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        {/* Glassmorphism Text Panel */}
        <div 
          className="text-center p-5 mx-3 animate-up" 
          style={{ 
            maxWidth: '800px', 
            background: 'rgba(14, 165, 233, 0.02)',
            backdropFilter: 'blur(20px)', 
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1px solid rgba(56, 189, 248, 0.12)',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* Context Header */}
          <span 
            className="text-uppercase fw-bold mb-3 d-inline-block"
            style={{ 
              fontSize: '0.8rem',
              letterSpacing: '5px',
              color: '#7dd3fc',
              textShadow: '0 0 20px rgba(56, 189, 248, 0.5)'
            }}
          >
            Flight Management System
          </span>

          {/* System Title */}
          <h1 
            className="display-3 fw-bold mb-4" 
            style={{ 
              fontFamily: "system-ui, -apple-system, sans-serif", 
              letterSpacing: '-1px',
              background: 'linear-gradient(180deg, #ffffff 50%, #bae6fd 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.2'
            }}
          >
            AeroVantage Control
          </h1>

          {/* Divider */}
          <div 
            className="mx-auto my-4" 
            style={{ 
              width: '80px', 
              height: '1px', 
              background: 'linear-gradient(to right, transparent, #38bdf8, transparent)' 
            }}
          ></div>

          {/* Purposeful, Meaningful Text */}
          <p 
            className="fs-5 fw-light mx-auto" 
            style={{ 
              color: '#cbd5e1', 
              lineHeight: '1.8', 
              maxWidth: '640px',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            Welcome to the central flight operations console. This portal allows operators to register incoming commercial flights, track route assignments, monitor active air fleets, and maintain data accuracy across scheduled logistics. 
          </p>

          {/* Minimalist Subtext instruction */}
          <p 
            className="small text-uppercase mt-5 mb-0" 
            style={{ color: '#64748b', letterSpacing: '2px', fontSize: '0.7rem' }}
          >
            Use the top navigation bar to manage flights or view the directory.
          </p>
        </div>
      </div>
    </>
  )
}

export default Home