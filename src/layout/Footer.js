const Footer = () => {
  return (
    <footer className="gap no-bottom" style={{ backgroundColor: "#222" }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-logo">
              <a href="home">
                <img alt="img" src="https://res.cloudinary.com/denlhej9f/image/upload/v1694166166/logo2_mubdub.png" />
              </a>
              <p>
               
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="links">
              <h6>Additional links</h6>
              <ul>
                <li>
                  <a href="about.html">About us</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="team.html">team</a>
                </li>
                <li>
                  <a href="blog-grid.html">News</a>
                </li>
                <li className="pb-0">
                  <a href="contacts.html">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="latest-news">
              <h6>Address</h6>
              <ul>
                <li>
                  <p>
                  4 Shankar Road Tarneit Victoria 3029,Australia
                  <li>
                  <a href="callto:+61 452192488">
                    <span>+61 452192488</span>
                  </a>
                </li>
                <a href="mailto:this.evolve@gmail.com">
                    <span>this.evolve@gmail.com</span>
                  </a>
                

                  </p>
                </li>
                
               
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="latest-news">
              <h6>Subscribe</h6>
              <form>
                <input
                  type="text"
                  name="email"
                  placeholder="your email address"
                />
                <button>go</button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 Evolve - All Rights Reserved | Developed by Evolve Marketing</p>
          <ul>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-m" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
