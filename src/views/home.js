import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Contact1 from '../components/contact1'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>BRTX3d</title>
        <meta
          name="description"
          content="BRTX – profesjonalny druk 3D FDM dla firm i osób prywatnych: szybkie prototypy, krótkie serie, figurki, części zamienne i elastyczne elementy z TPU."
        />
        <meta property="og:title" content="BRTX3d" />
        <meta
          property="og:description"
          content="Profesjonalny druk 3D FDM dla firm i osób prywatnych. Szybkie prototypy, krótkie serie, figurki, części zamienne i elastyczne elementy z TPU – wyślij plik 3D i otrzymaj wycenę."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a2dff4e7-023c-4dde-8ee3-59f39e8f39f2/2aa510fa-939f-499b-ba72-5f00f462fa22?org_if_sml=1&amp;force_format=original"
        />
        <link
          rel="canonical"
          href="https://periodic-defensive-sheep-e4kd2f.teleporthq.app/"
        />
      </Helmet>
      <Navigation
        btn1={
          <Fragment>
            <span className="home-text10">Wycena 🚀</span>
          </Fragment>
        }
      ></Navigation>
      <section className="hero">
        <video
          src="https://videos.pexels.com/video-files/4198845/4198845-hd_1280_720_25fps.mp4"
          loop="true"
          muted="true"
          poster="https://images.pexels.com/videos/4198845/pictures/preview-0.jpg"
          autoPlay="true"
          playsInline="true"
          className="hero-video"
        ></video>
        <div className="hero-overlay"></div>
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <h1 className="home-hero-title hero-title">
              Druk 3D FDM dla Twojej firmy
            </h1>
            <p className="hero-subtitle home-hero-subtitle">
              Szybkie prototypowanie, krótkie serie produkcyjne i odtwarzanie
              części zamiennych bez kosztów form wtryskowych. Realizacje w
              24-72h.
            </p>
            <div className="hero-cta-group">
              <a
                href="#Contact1"
                className="home-thq-btn-elm btn-lg btn-primary btn"
              >
                Bezpłatna wycena
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="services-container">
          <div className="services-header">
            <h2 className="section-title">Nasze usługi</h2>
            <p className="section-subtitle">
              Kompleksowa obsługa druku 3D dla firm i klientów indywidualnych
            </p>
          </div>
          <div className="services-list">
            <div className="services-item">
              <div className="services-item-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <circle
                    r="10"
                    cx="12"
                    cy="12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
              </div>
              <div className="services-item-content">
                <h3 className="services-item-title">
                  Prototypy koncepcyjne i testowe
                </h3>
                <p className="services-item-description">
                  Szybkie tworzenie modeli koncepcyjnych i testowych.
                  Ekonomiczne rozwiązanie dla weryfikacji projektów przed pełną
                  produkcją.
                </p>
              </div>
            </div>
            <div className="services-item">
              <div className="services-item-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="4" y="2" rx="2" width="16" height="20"></rect>
                    <path d="M8 6h8m0 8v4m0-8h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"></path>
                  </g>
                </svg>
              </div>
              <div className="services-item-content">
                <h3 className="services-item-title">
                  Krótkie serie komponentów
                </h3>
                <p className="services-item-description">
                  Produkcja krótkich serii komponentów, narzędzi, uchwytów i
                  części zamiennych bez konieczności ponoszenia wysokich kosztów
                  form wtryskowych.
                </p>
              </div>
            </div>
            <div className="services-item">
              <div className="services-item-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                    <path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                    <path d="M8 16H3v5"></path>
                  </g>
                </svg>
              </div>
              <div className="services-item-content">
                <h3 className="services-item-title">
                  Odtwarzanie części zamiennych
                </h3>
                <p className="services-item-description">
                  Odtwarzanie niedostępnych lub uszkodzonych elementów maszyn,
                  urządzeń AGD i zabawek. Przedłużamy żywotność urządzeń i
                  obniżamy koszty napraw.
                </p>
              </div>
            </div>
            <div className="services-item">
              <div className="services-item-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="8" rx="1" width="18" height="12"></rect>
                    <path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3m14 0V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"></path>
                  </g>
                </svg>
              </div>
              <div className="services-item-content">
                <h3 className="services-item-title">
                  Figurki i gadżety reklamowe
                </h3>
                <p className="services-item-description">
                  Realizacja figurek, gadżetów reklamowych, modeli
                  architektonicznych i elementów scenografii według
                  indywidualnych projektów.
                </p>
              </div>
            </div>
            <div className="services-item">
              <div className="services-item-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="3"
                    y="3"
                    rx="2"
                    fill="none"
                    width="18"
                    height="18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></rect>
                </svg>
              </div>
              <div className="services-item-content">
                <h3 className="services-item-title">Elastyczne części z TPU</h3>
                <p className="services-item-description">
                  Druk elastycznych elementów z materiału TPU – idealne
                  rozwiązanie dla uszczelek, amortyzatorów, osłon i innych
                  części wymagających elastyczności.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="process">
        <div className="process-container">
          <div className="process-header">
            <h2 className="section-title">Proces współpracy</h2>
            <p className="section-subtitle">
              Od pomysłu do gotowego produktu w kilku prostych krokach
            </p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="process-step-number">
                <span>01</span>
              </div>
              <div className="process-step-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m21 21l-4.34-4.34"></path>
                    <circle r="8" cx="11" cy="11"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="process-step-title">Zapytanie</h3>
              <p className="process-step-description">
                Skontaktuj się z nami i opisz swoje potrzeby. Prześlij projekt
                lub zdjęcia elementu do odtworzenia.
              </p>
            </div>
            <div className="process-step-connector">
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12h14m-7-7l7 7l-7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="process-step">
              <div className="process-step-number">
                <span>02</span>
              </div>
              <div className="process-step-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="4" y="2" rx="2" width="16" height="20"></rect>
                    <path d="M8 6h8m0 8v4m0-8h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"></path>
                  </g>
                </svg>
              </div>
              <h3 className="process-step-title">Wycena</h3>
              <p className="process-step-description">
                Otrzymujesz szczegółową wycenę w ciągu 24h. Transparentne ceny
                bez ukrytych kosztów.
              </p>
            </div>
            <div className="process-step-connector">
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12h14m-7-7l7 7l-7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="process-step">
              <div className="process-step-number">
                <span>03</span>
              </div>
              <div className="process-step-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path>
                    <rect x="6" y="14" rx="1" width="12" height="8"></rect>
                  </g>
                </svg>
              </div>
              <h3 className="process-step-title">Druk 3D</h3>
              <p className="process-step-description">
                Rozpoczynamy produkcję na profesjonalnych drukarkach FDM. Czas
                realizacji standardowo 48-72h.
              </p>
            </div>
            <div className="process-step-connector">
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12h14m-7-7l7 7l-7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="process-step">
              <div className="process-step-number">
                <span>04</span>
              </div>
              <div className="process-step-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                    <circle r="2" cx="4" cy="20"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="process-step-title">Postprocessing</h3>
              <p className="process-step-description">
                Usuwanie podporów, szlifowanie, malowanie – profesjonalne
                wykończenie według specyfikacji.
              </p>
            </div>
            <div className="process-step-connector">
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12h14m-7-7l7 7l-7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="process-step">
              <div className="process-step-number">
                <span>05</span>
              </div>
              <div className="process-step-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                    <circle r="2" cx="17" cy="18"></circle>
                    <circle r="2" cx="7" cy="18"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="process-step-title">Dostawa</h3>
              <p className="process-step-description">
                Wysyłka kurierem lub odbiór osobisty. Opcje ekspresowe dostępne
                dla pilnych zleceń.
              </p>
            </div>
          </div>
          <div className="process-notice">
            <div className="process-notice-icon">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 6v6l4 2"></path>
                  <circle r="10" cx="12" cy="12"></circle>
                </g>
              </svg>
            </div>
            <p className="process-notice-text">
              <span>
                {' '}
                Standardowy czas realizacji:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text17">48-72h</span>
              <span>
                {' '}
                • Opcja ekspresowa:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text19">24h</span>
            </p>
          </div>
        </div>
      </section>
      <section className="stats">
        <div className="stats-grid">
          <div className="stats-item">
            <div className="stats-item-icon">
              <svg
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 6v6l4 2"></path>
                  <circle r="10" cx="12" cy="12"></circle>
                </g>
              </svg>
            </div>
            <div className="stats-item-number">
              <span>48h</span>
            </div>
            <div className="stats-item-label">
              <span>Średni czas realizacji</span>
            </div>
            <p className="stats-item-description">
              Ekspresowe zlecenia dostępne już w 24h
            </p>
          </div>
          <div className="stats-item">
            <div className="stats-item-icon">
              <svg
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 0 24 24"
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
            </div>
            <div className="stats-item-number">
              <span>-70%</span>
            </div>
            <div className="stats-item-label">
              <span>Oszczędności w porównaniu z formami wtryskowymi</span>
            </div>
            <p className="stats-item-description">
              Eliminacja kosztów narzędziowni dla krótkich serii
            </p>
          </div>
          <div className="stats-item">
            <div className="stats-item-icon">
              <svg
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path>
                  <path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"></path>
                </g>
              </svg>
            </div>
            <div className="stats-item-number">
              <span>2800+</span>
            </div>
            <div className="stats-item-label">
              <span>Zrealizowanych zamówień</span>
            </div>
            <p className="stats-item-description">
              Doświadczenie w produkcji różnorodnych części
            </p>
          </div>
          <div className="stats-item">
            <div className="stats-item-icon">
              <svg
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                  <path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                  <path d="M8 16H3v5"></path>
                </g>
              </svg>
            </div>
            <div className="stats-item-number">
              <span>1200+</span>
            </div>
            <div className="stats-item-label">
              <span>Odtworzonych części zamiennych</span>
            </div>
            <p className="stats-item-description">
              Przedłużona żywotność urządzeń i maszyn
            </p>
          </div>
        </div>
      </section>
      <section className="casestudies">
        <div className="casestudies-header">
          <h2 className="section-title">Nasze realizacje</h2>
          <p className="section-subtitle">
            Przykłady projektów wykonanych dla firm i klientów indywidualnych
          </p>
        </div>
        <div className="casestudies-grid">
          <article className="casestudies-card">
            <div className="casestudies-card-image">
              <img
                alt="Close-up of a neon-colored 3D printer in a workshop, showcasing vibrant technology."
                src="https://images.pexels.com/photos/30720497/pexels-photo-30720497.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
            </div>
            <div className="casestudies-card-content">
              <h3 className="casestudies-card-title">Prototypy przemysłowe</h3>
              <p className="casestudies-card-description">
                Seria 15 prototypów testowych dla firmy produkcyjnej.
                Weryfikacja geometrii i montażu przed wdrożeniem do produkcji.
                Czas realizacji: 48h, oszczędność kosztów: 85%.
              </p>
              <div className="casestudies-card-tags">
                <span className="casestudies-card-tag">Prototypy</span>
                <span className="casestudies-card-tag">PLA</span>
                <span className="casestudies-card-tag">48h</span>
              </div>
            </div>
          </article>
          <article className="casestudies-card">
            <div className="casestudies-card-image">
              <img
                alt="Detailed view of a 3D printer in action, extruding orange plastic components."
                src="https://images.pexels.com/photos/31137405/pexels-photo-31137405.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
            </div>
            <div className="casestudies-card-content">
              <h3 className="casestudies-card-title">Krótkie serie narzędzi</h3>
              <p className="casestudies-card-description">
                Produkcja 50 sztuk uchwytów montażowych dla linii produkcyjnej.
                Wytrzymałość PETG, precyzja montażu. Brak kosztów form
                wtryskowych, realizacja w 5 dni.
              </p>
              <div className="casestudies-card-tags">
                <span className="casestudies-card-tag">Seria 50 szt</span>
                <span className="casestudies-card-tag">PETG</span>
                <span className="casestudies-card-tag">120h</span>
              </div>
            </div>
          </article>
          <article className="casestudies-card">
            <div className="casestudies-card-image">
              <img
                alt="Close-up of a 3D printer in action under neon lighting, capturing vibrant colors and modern tech ambiance."
                src="https://images.pexels.com/photos/31137471/pexels-photo-31137471.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
            </div>
            <div className="casestudies-card-content">
              <h3 className="casestudies-card-title">Odtworzenie części AGD</h3>
              <p className="casestudies-card-description">
                Naprawie pokrętła niedostępnego na rynku dla ekspresu do kawy z
                lat 90. Odwzorowanie wymiarów, druk z ABS, idealny montaż.
                Przedłużenie żywotności urządzenia o kolejne lata.
              </p>
              <div className="casestudies-card-tags">
                <span className="casestudies-card-tag">Odtworzenie</span>
                <span className="casestudies-card-tag">ABS</span>
                <span className="casestudies-card-tag">24h</span>
              </div>
            </div>
          </article>
          <article className="casestudies-card">
            <div className="casestudies-card-image">
              <img
                alt="Close-up of a 3D printer in action with neon lighting, showcasing technology in prototyping."
                src="https://images.pexels.com/photos/18296466/pexels-photo-18296466.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
            </div>
            <div className="casestudies-card-content">
              <h3 className="casestudies-card-title">
                Elastyczne uszczelki TPU
              </h3>
              <p className="casestudies-card-description">
                Seria 30 elastycznych uszczelek z TPU dla systemu wentylacji.
                Wysoka odporność na zużycie, idealne dopasowanie. Kompletna
                seria dostarczona w 72h.
              </p>
              <div className="casestudies-card-tags">
                <span className="casestudies-card-tag">TPU</span>
                <span className="casestudies-card-tag">Elastyczne</span>
                <span className="casestudies-card-tag">72h</span>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="cta">
        <div className="home-thq-cta-container-elm cta-container"></div>
      </section>
      <section className="location">
        <div className="location-container">
          <div className="location-header">
            <h2 className="section-title">Lokalizacja i obsługa</h2>
            <p className="section-subtitle">
              Działamy lokalnie, wysyłamy w całej Polsce
            </p>
          </div>
          <div className="location-list">
            <div className="location-item">
              <div className="location-item-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle r="3" cx="12" cy="10"></circle>
                  </g>
                </svg>
              </div>
              <div className="location-item-content">
                <h3 className="location-item-title">Siedziba główna</h3>
                <p className="location-item-description">
                  BRTX z siedzibą w centrum Polski oferuje szybki dostęp i
                  sprawną logistykę dla całego kraju. Odbiór osobisty możliwy po
                  wcześniejszym uzgodnieniu.
                </p>
              </div>
            </div>
            <div className="location-item">
              <div className="location-item-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                    <circle r="2" cx="17" cy="18"></circle>
                    <circle r="2" cx="7" cy="18"></circle>
                  </g>
                </svg>
              </div>
              <div className="location-item-content">
                <h3 className="location-item-title">Wysyłka w całej Polsce</h3>
                <p className="location-item-description">
                  Współpracujemy z renomowanymi firmami kurierskimi. Standardowa
                  dostawa 24-48h. Opcje ekspresowe overnight dla pilnych zleceń.
                  Bezpieczne pakowanie gwarantuje nieuszkodzony odbiór.
                </p>
              </div>
            </div>
            <div className="location-item">
              <div className="location-item-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path>
                    <path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"></path>
                  </g>
                </svg>
              </div>
              <div className="location-item-content">
                <h3 className="location-item-title">Obszary obsługi</h3>
                <p className="location-item-description">
                  Obsługujemy klientów z całej Polski. Specjalizujemy się w
                  zleceniach dla przemysłu, warsztatów, firm produkcyjnych oraz
                  klientów indywidualnych. Realizujemy zarówno pojedyncze
                  sztuki, jak i serie produkcyjne.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact1
        email1={
          <Fragment>
            <span className="home-text28">bukjest@pm.me</span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="home-text29">+48 690 531 174</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text30">
              <span>Prześlij plik 3D mailem,</span>
              <br></br>
              <span> a przygotuję dla Ciebie wycenę.</span>
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text34">
              <span>Zapraszam do kontaktu telefonicznego.</span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        contact1Id="Contact1"
      ></Contact1>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<script defer data-name="testimonials-carousel">
(function(){
  const track = document.querySelector(".testimonials-track")
  const cards = document.querySelectorAll(".testimonials-card")
  const prevBtn = document.querySelector(".testimonials-nav-prev")
  const nextBtn = document.querySelector(".testimonials-nav-next")
  const dots = document.querySelectorAll(".testimonials-dot")

  let currentIndex = 0
  const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(track).gap)

  function updateCarousel() {
    track.scrollTo({
      left: currentIndex * cardWidth,
      behavior: "smooth",
    })

    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("testimonials-dot-active")
      } else {
        dot.classList.remove("testimonials-dot-active")
      }
    })
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = Math.max(0, currentIndex - 1)
    updateCarousel()
  })

  nextBtn.addEventListener("click", () => {
    currentIndex = Math.min(cards.length - 1, currentIndex + 1)
    updateCarousel()
  })

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index
      updateCarousel()
    })
  })

  track.addEventListener("scroll", () => {
    const scrollPosition = track.scrollLeft
    currentIndex = Math.round(scrollPosition / cardWidth)

    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("testimonials-dot-active")
      } else {
        dot.classList.remove("testimonials-dot-active")
      }
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon88"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text38">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
