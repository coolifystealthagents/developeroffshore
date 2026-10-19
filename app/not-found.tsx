import { Footer, Header } from './components';

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="not-found-v3">
        <section className="container not-found-v3-card">
          <img src="/visuals/contact-role-planning.svg" alt="Planning board for choosing a useful next destination" width="1200" height="760" />
          <div>
            <p className="eyebrow">Page not found</p>
            <h1>This route is outside the current delivery map.</h1>
            <p className="lead">Use a primary destination below to continue. If an old link brought you here, the Services catalog is the best place to find the current route.</p>
            <div className="not-found-v3-actions">
              <a className="btn primary" href="/">Go home</a>
              <a className="btn secondary" href="/services">Explore services</a>
              <a className="btn secondary" href="/contact-us">Contact Us</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
