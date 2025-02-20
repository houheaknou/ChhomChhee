export default function Portfolio() {
    return (
      <div>
        <section id="portfolio" className="portfolio section">

          <div className="container section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <div className="title-shape">
              <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" stroke-2="true"></path>
              </svg>
            </div>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

              <div className="portfolio-filters-container" data-aos="fade-up" data-aos-delay="200">
                <ul className="portfolio-filters isotope-filters">
                  <li data-filter="*" className="filter-active">All Work</li>
                  <li data-filter=".filter-web">Web Design</li>
                  <li data-filter=".filter-graphics">Graphics</li>
                  <li data-filter=".filter-motion">Motion</li>
                  <li data-filter=".filter-brand">Branding</li>
                </ul>
              </div>

              <div className="row g-4 isotope-container" data-aos="fade-up" data-aos-delay="300">

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-web">
                  <div className="portfolio-card">
                    <div className="portfolio-image">
                      <img src="assets/img/portfolio/app-1.jpg" className="img-fluid" alt="" loading="lazy"/>
                      <div className="portfolio-overlay">
                        <div className="portfolio-actions">
                          <a href="assets/img/portfolio/app-1.jpg" className="glightbox preview-link" data-gallery="portfolio-gallery-web"><i className="bi bi-eye"></i></a>
                          <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span className="category">Web Design</span>
                      <h3>Modern Dashboard Interface</h3>
                      <p>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="portfolio-image">
                      <img src="assets/img/portfolio/product-1.jpg" className="img-fluid" alt="" loading="lazy"/>
                      <div className="portfolio-overlay">
                        <div className="portfolio-actions">
                          <a href="assets/img/portfolio/product-1.jpg" className="glightbox preview-link" data-gallery="portfolio-gallery-graphics"><i className="bi bi-eye"></i></a>
                          <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span className="category">Graphics</span>
                      <h3>Creative Brand Identity</h3>
                      <p>Vestibulum id ligula porta felis euismod semper at vulputate.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-motion">
                  <div className="portfolio-card">
                    <div className="portfolio-image">
                      <img src="assets/img/portfolio/branding-1.jpg" className="img-fluid" alt="" loading="lazy"/>
                      <div className="portfolio-overlay">
                        <div className="portfolio-actions">
                          <a href="assets/img/portfolio/branding-1.jpg" className="glightbox preview-link" data-gallery="portfolio-gallery-motion"><i className="bi bi-eye"></i></a>
                          <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span className="category">Motion</span>
                      <h3>Product Animation Reel</h3>
                      <p>Donec ullamcorper nulla non metus auctor fringilla dapibus.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-brand">
                  <div className="portfolio-card">
                    <div className="portfolio-image">
                      <img src="assets/img/portfolio/books-1.jpg" className="img-fluid" alt="" loading="lazy"/>
                      <div className="portfolio-overlay">
                        <div className="portfolio-actions">
                          <a href="assets/img/portfolio/books-1.jpg" className="glightbox preview-link" data-gallery="portfolio-gallery-brand"><i className="bi bi-eye"></i></a>
                          <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span className="category">Branding</span>
                      <h3>Luxury Brand Package</h3>
                      <p>Aenean lacinia bibendum nulla sed consectetur elit.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-web">
                  <div className="portfolio-card">
                    <div className="portfolio-image">
                      <img src="assets/img/portfolio/app-2.jpg" className="img-fluid" alt="" loading="lazy"/>
                      <div className="portfolio-overlay">
                        <div className="portfolio-actions">
                          <a href="assets/img/portfolio/app-2.jpg" className="glightbox preview-link" data-gallery="portfolio-gallery-web"><i className="bi bi-eye"></i></a>
                          <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span className="category">Web Design</span>
                      <h3>E-commerce Platform</h3>
                      <p>Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="portfolio-image">
                      <img src="assets/img/portfolio/product-2.jpg" className="img-fluid" alt="" loading="lazy"/>
                      <div className="portfolio-overlay">
                        <div className="portfolio-actions">
                          <a href="assets/img/portfolio/product-2.jpg" className="glightbox preview-link" data-gallery="portfolio-gallery-graphics"><i className="bi bi-eye"></i></a>
                          <a href="portfolio-details.html" className="details-link"><i className="bi bi-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span className="category">Graphics</span>
                      <h3>Digital Art Collection</h3>
                      <p>Cras mattis consectetur purus sit amet fermentum.</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>
      </div>
    );
  }
  