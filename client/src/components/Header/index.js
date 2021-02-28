function Header() {
  return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
            <a className="navbar-brand" href="index.html"><h2>Nick D. Penaloza</h2></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="portfolio.html">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="assets/images/NDPenaloza-Resume.pdf" target="_blank">Resume</a>
                </li>
              </ul>
            </div>
          </nav>
    </div>
  )
}

export default Header;