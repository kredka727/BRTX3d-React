import React from 'react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer">
        <div className="footer-decorative-layer"></div>
        <div className="footer-thq-footer-content-elm footer-content">
          <div className="footer-container2">
            <div className="footer-logo">
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
                className="footer-logo-icon"
              >
                <path
                  d="M21 16.008V7.99a1.98 1.98 0 0 0-1-1.717l-7-4.008a2.02 2.02 0 0 0-2 0L4 6.273c-.619.355-1 1.01-1 1.718v8.018c0 .709.381 1.363 1 1.717l7 4.008a2.02 2.02 0 0 0 2 0l7-4.008c.619-.355 1-1.01 1-1.718M12 22V12m0 0l8.73-5.04m-17.46 0L12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span className="footer-brand-name">BRTX</span>
            </div>
            <div className="footer-thq-footer-main-elm footer-main">
              <div className="footer-thq-footer-brand-elm footer-brand">
                <p className="footer-brand-tagline">Technologia druku 3D FDM</p>
                <p className="footer-thq-footer-brand-description-elm footer-brand-description">
                  Szybkie prototypowanie, produkcja krótkich serii i precyzyjne
                  rozwiązania dla biznesu i użytkowników indywidualnych.
                </p>
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <div className="footer-contact-item">
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                className="footer-contact-icon"
              >
                <path
                  d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>+48 690 531 174</span>
            </div>
            <div className="footer-contact-item">
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                className="footer-contact-icon"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                </g>
              </svg>
              <span>bukjest@pm.me</span>
            </div>
            <div className="footer-contact-item">
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                className="footer-contact-icon"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468m12.356-4.842a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
                  <circle r="3" cx="10" cy="10"></circle>
                </g>
              </svg>
              <span>Lublin, Polska</span>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="footer-copyright">
                {' '}
                2025 BRTX. Wszelkie prawa zastrzeżone.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
