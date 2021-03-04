import NDPResume from '../../images/NDPenaloza-Resume.pdf'

function Header() {
  return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
            <a className="navbar-brand" href="/"><h2 style={{color: '#1A5276'}}>Nick D. Penaloza</h2></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={NDPResume} target="_blank" rel="noreferrer">Resume</a>
                </li>
              </ul>
            </div>
          </nav>
    </div>
  )
}

export default Header;