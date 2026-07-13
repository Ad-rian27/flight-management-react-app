import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavigationBar = () => {
    const location = useLocation();

    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark fixed-top py-3"
            style={{
                background: 'rgba(2, 10, 18, 0.6)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderBottom: '1px solid rgba(56, 189, 248, 0.1)',
                zIndex: 1100 
            }}
        >
            <div className="container">
                <Link className="navbar-brand fw-bold fs-4 d-flex align-items-center text-white" to="/">
                    <span style={{ color: '#38bdf8' }} className="me-2">✈</span>
                    <span style={{ letterSpacing: '1px', fontFamily: 'system-ui' }}>AeroVantage</span>
                </Link>

                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    {/* Sky-blue text hover interaction styles */}
                    <style>{`
                        .custom-nav-link {
                            color: #cbd5e1 !important;
                            transition: all 0.3s ease;
                        }
                        .custom-nav-link:hover, .custom-nav-link.active-link {
                            color: #7dd3fc !important;
                            text-shadow: 0 0 10px rgba(56, 189, 248, 0.4);
                        }
                    `}</style>
                    <ul className="navbar-nav ms-auto gap-3 text-center text-lg-start pt-3 pt-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link custom-nav-link fw-medium px-3 ${location.pathname === '/' ? 'active-link' : ''}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link custom-nav-link fw-medium px-3 ${location.pathname === '/add' ? 'active-link' : ''}`} to="/add">Add Flight</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link custom-nav-link fw-medium px-3 ${location.pathname === '/view' ? 'active-link' : ''}`} to="/view">View Flights</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar;