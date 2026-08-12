import Image from "next/image";

const emailLink =
  "mailto:claremach2@gmail.com?subject=Consulta%20Studio%2056%20BCN&body=Hola%20Clare%2C%0A%0AMe%20gustaría%20saber%20más%20sobre...";
const instagramLink = "https://www.instagram.com/studio56bcn/";
const calendarLink = "https://www.meetup.com/barcelona-ceramic-arts-pottery-ceramica-meetup/";
const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=Studio+56+Ceramics+Art+Studio+Carrer+de+Burgos+56+Barcelona";
const reviewsLink = mapsLink;

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.5 6.5h17v11h-17z" />
      <path d="m4.5 7.5 7.5 6 7.5-6" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 4.5h14a1 1 0 0 1 1 1v14H4v-14a1 1 0 0 1 1-1Z" />
      <path d="M8 2.5v4M16 2.5v4M4 9h16" />
      <path d="M8 13h2M14 13h2M8 16.5h2M14 16.5h2" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.2 6-11A6 6 0 0 0 6 10c0 5.8 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Studio 56, inicio">
          <span>STUDIO</span>
          <strong>56</strong>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#hacer">Qué hacemos</a>
          <a href="#espacio">El espacio</a>
          <a href="#equipo">Equipo</a>
        </nav>
        <a className="header-cta" href={calendarLink} target="_blank" rel="noreferrer">
          Próximos talleres <CalendarIcon />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Cerámica + dibujo + comunidad · Sants</p>
          <h1>
            UN ESPACIO
            <span>PARA HACER.</span>
          </h1>
          <p className="hero-lede">
            Talleres para empezar, mesas para seguir y paredes para enseñar lo que haces.
            Todo dentro de un estudio con luz natural en Carrer de Burgos 56.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href={calendarLink} target="_blank" rel="noreferrer">
              Ver el calendario <CalendarIcon />
            </a>
            <a className="text-link" href={emailLink}>
              Cuéntanos qué buscas
            </a>
          </div>
        </div>
        <div className="hero-image">
          <Image
            src="/images/studio.jpg"
            alt="Interior luminoso de Studio 56 en Sants"
            fill
            priority
            sizes="(max-width: 850px) 100vw, 52vw"
          />
          <span className="hero-stamp">56</span>
          <div className="image-note">
            <span>Exposición</span>
            <span>Taller</span>
            <span>Coworking</span>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Servicios">
        <span>CERÁMICA</span><i>●</i><span>DIBUJO</span><i>●</i><span>COWORKING</span><i>●</i>
        <span>EXPOSICIONES</span><i>●</i><span>SANTS</span>
      </section>

      <section className="entry-section" id="hacer">
        <div className="section-heading">
          <p className="eyebrow">¿Por dónde quieres empezar?</p>
          <h2>UNA PUERTA PARA CADA FORMA DE CREAR.</h2>
        </div>
        <div className="entry-grid">
          <article className="entry-card card-coral">
            <span className="card-number">01</span>
            <h3>Quiero probar</h3>
            <p>
              Clases de cerámica para todos los niveles. Ven con una idea o empieza con las
              manos vacías: materiales, herramientas y acompañamiento están dentro.
            </p>
            <a href={calendarLink} target="_blank" rel="noreferrer">
              Consultar próximas fechas <CalendarIcon />
            </a>
          </article>
          <article className="entry-card card-teal">
            <span className="card-number">02</span>
            <h3>Necesito una mesa</h3>
            <p>
              Un espacio de trabajo compartido para ceramistas, con opciones a tiempo completo
              o parcial y una comunidad que ya está haciendo cosas.
            </p>
            <a href={emailLink}>
              Preguntar por coworking <MailIcon />
            </a>
          </article>
          <article className="entry-card card-cream">
            <span className="card-number">03</span>
            <h3>Tengo obra que enseñar</h3>
            <p>
              El estudio también funciona como espacio expositivo. Si tienes una propuesta de
              cerámica, pintura, dibujo o collage, escríbenos y la vemos.
            </p>
            <a href={emailLink}>
              Proponer una exposición <MailIcon />
            </a>
          </article>
        </div>
      </section>

      <section className="space-section" id="espacio">
        <div className="space-title">
          <p className="eyebrow">Carrer de Burgos, 56</p>
          <h2>LUZ PARA TRABAJAR. SITIO PARA QUEDARTE.</h2>
          <p>
            Studio 56 nació en 2020 como un espacio creativo multidisciplinar en Sants. Una zona
            para talleres, cinco puestos de coworking y una sala que cambia con cada exposición.
          </p>
        </div>
        <div className="space-collage">
          <figure className="collage-main">
            <Image
              src="/images/class.jpg"
              alt="Participantes en un taller de cerámica de Studio 56"
              fill
              sizes="(max-width: 850px) 100vw, 58vw"
            />
          </figure>
          <figure className="collage-art">
            <Image
              src="/images/workshop.jpg"
              alt="Escultura cerámica realizada por Clare McCracken"
              fill
              sizes="(max-width: 850px) 72vw, 28vw"
            />
          </figure>
          <div className="collage-caption">
            <strong>5,0</strong>
            <span>en Google · 16+ reseñas</span>
            <a href={reviewsLink} target="_blank" rel="noreferrer">Leer las reseñas</a>
          </div>
        </div>
      </section>

      <section className="reviews-section" aria-labelledby="reviews-title">
        <div className="reviews-intro">
          <p className="eyebrow">Dicho después de mancharse las manos</p>
          <h2 id="reviews-title">EL AMBIENTE TAMBIÉN FORMA PARTE DE LA CLASE.</h2>
        </div>
        <div className="review-list">
          <a href={reviewsLink} target="_blank" rel="noreferrer" className="review-row">
            <span className="stars">★★★★★</span>
            <blockquote>
              “The space is perfect, Clare is a love, and the other people sculpting were equally
              as lovely. I will go as often as I am able to.”
            </blockquote>
            <cite>Jennifer Mirra</cite>
          </a>
          <a href={reviewsLink} target="_blank" rel="noreferrer" className="review-row">
            <span className="stars">★★★★★</span>
            <blockquote>
              “It was my first time and Clare was so good at helping and showing me how to create
              my idea.”
            </blockquote>
            <cite>maquisha weba</cite>
          </a>
          <a href={reviewsLink} target="_blank" rel="noreferrer" className="review-row">
            <span className="stars">★★★★★</span>
            <blockquote>
              “Clare puts so much love and detail in her classes and will always teach you
              everything with a huge smile.”
            </blockquote>
            <cite>Luisa Laporta</cite>
          </a>
        </div>
      </section>

      <section className="team-section" id="equipo">
        <div className="team-lead">
          <p className="eyebrow">Detrás del estudio</p>
          <h2>DOS PRÁCTICAS. UN MISMO LUGAR.</h2>
        </div>
        <article className="person person-clare">
          <div className="person-image">
            <Image src="/images/clare.jpg" alt="Clare trabajando con cerámica" fill sizes="50vw" />
          </div>
          <div className="person-copy">
            <span>Fundadora · Cerámica</span>
            <h3>Clare McCracken</h3>
            <p>
              Ceramista y directora de Studio 56. Imparte sesiones para principiantes y personas
              con experiencia, en castellano, catalán e inglés.
            </p>
          </div>
        </article>
        <article className="person person-rhiannon">
          <div className="person-image">
            <Image src="/images/rhiannon.jpg" alt="Rhiannon guiando una sesión de pintura" fill sizes="50vw" />
          </div>
          <div className="person-copy">
            <span>DrawBCN · Dibujo y pintura</span>
            <h3>Rhiannon Cackett</h3>
            <p>
              Artista y fundadora de DrawBCN. Sus clases de dibujo y pintura están abiertas a
              distintos niveles y ponen el proceso por delante de la perfección.
            </p>
          </div>
        </article>
      </section>

      <section className="visit-section">
        <div className="visit-map">
          <span className="big-56">56</span>
          <p>Carrer de Burgos<br />Sants · Barcelona</p>
        </div>
        <div className="visit-copy">
          <p className="eyebrow">Ven a conocer el espacio</p>
          <h2>LA PRÓXIMA PIEZA NO TIENE QUE EMPEZAR PERFECTA.</h2>
          <p>
            Solo tiene que empezar. Consulta el calendario o escríbenos si buscas coworking,
            quieres organizar una actividad o tienes una propuesta expositiva.
          </p>
          <div className="visit-actions">
            <a className="button button-light" href={calendarLink} target="_blank" rel="noreferrer">
              Ver próximos talleres <CalendarIcon />
            </a>
            <a className="button button-outline" href={emailLink}>
              Escribir a Clare <MailIcon />
            </a>
            <a className="map-link" href={mapsLink} target="_blank" rel="noreferrer">
              Cómo llegar <PinIcon />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span>STUDIO</span><strong>56</strong></a>
        <div className="footer-contact">
          <a href="tel:+34647911448">+34 647 911 448</a>
          <a href="mailto:claremach2@gmail.com">claremach2@gmail.com</a>
        </div>
        <div className="footer-social">
          <a href={instagramLink} target="_blank" rel="noreferrer">Instagram</a>
          <a href={mapsLink} target="_blank" rel="noreferrer">Google Maps</a>
        </div>
      </footer>
    </main>
  );
}
