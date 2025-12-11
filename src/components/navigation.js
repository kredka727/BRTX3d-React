import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-link::after, .navigation-logo, .navigation-close, .navigation-mobile-link, .navigation-toggle {
  transition: none;
}
.navigation-mobile-item {
  animation: none;
  opacity: 1;
  transform: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <nav className="navigation">
        <div className="navigation-container">
          <Link to="/">
            <div
              aria-label="BRTX - Strona główna"
              className="navigation-thq-navigation-logo-elm navigation-logo"
            >
              <span className="navigation-logo-text">BRTX</span>
              <span className="navigation-logo-accent">3D</span>
            </div>
          </Link>
          <ul className="navigation-links">
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <button
            aria-label="Otwórz menu"
            aria-expanded="false"
            className="navigation-toggle"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 5h16M4 12h16M4 19h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <a
            href="#Contact1"
            className="navigation-thq-btn-elm1 btn-lg btn-primary btn"
          >
            <span>
              {props.btn1 ?? (
                <Fragment>
                  <span className="navigation-text8">Wycena 🚀</span>
                </Fragment>
              )}
            </span>
          </a>
        </div>
        <div className="navigation-mobile-overlay">
          <div className="navigation-mobile-header">
            <a href="#">
              <div
                aria-label="BRTX - Strona główna"
                className="navigation-mobile-logo"
              >
                <span className="navigation-logo-text">BRTX</span>
                <span className="navigation-logo-accent">3D</span>
              </div>
            </a>
            <button aria-label="Zamknij menu" className="navigation-close">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="navigation-mobile-links">
            <li className="navigation-mobile-item">
              <a href="#">
                <div className="navigation-mobile-link">
                  <span>Usługi</span>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="#">
                <div className="navigation-mobile-link">
                  <span>Technologia</span>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="#">
                <div className="navigation-mobile-link">
                  <span>Portfolio</span>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="#">
                <div className="navigation-mobile-link">
                  <span>O nas</span>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="#">
                <div className="navigation-mobile-link">
                  <span>Kontakt</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="navigation-mobile-cta">
            <a href="#">
              <div className="btn-lg btn-primary btn">
                <span>Wycena projektu</span>
              </div>
            </a>
          </div>
        </div>
      </nav>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<style>
        @keyframes slideInLeft {to {opacity: 1;
transform: translateX(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container6">
        <div className="navigation-container7">
          <Script
            html={`<script defer data-name="navigation-mobile-toggle">
(function(){
  const navigationToggle = document.querySelector(".navigation-toggle")
  const navigationClose = document.querySelector(".navigation-close")
  const navigationOverlay = document.querySelector(".navigation-mobile-overlay")
  const navigationMobileLinks = document.querySelectorAll(".navigation-mobile-link")

  function openMobileMenu() {
    navigationOverlay.classList.add("is-open")
    navigationToggle.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden"
  }

  function closeMobileMenu() {
    navigationOverlay.classList.remove("is-open")
    navigationToggle.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
  }

  navigationToggle.addEventListener("click", openMobileMenu)
  navigationClose.addEventListener("click", closeMobileMenu)

  navigationMobileLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu)
  })

  navigationOverlay.addEventListener("click", (e) => {
    if (e.target === navigationOverlay) {
      closeMobileMenu()
    }
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navigationOverlay.classList.contains("is-open")) {
      closeMobileMenu()
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Navigation.defaultProps = {
  btn1: undefined,
}

Navigation.propTypes = {
  btn1: PropTypes.element,
}

export default Navigation
