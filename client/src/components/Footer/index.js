function Footer() {
  return(
    <div>
      <div className="footer text-center">
        <div className="container text-center">
          <span className="text-center" style={{marginTop: 100, color: 'white'}}>
            <p style={{marginTop: 150}}>Nick D. Penaloza &copy; 2021</p>
            <p>ndpenaloza@gmail.com</p>
            <p>619-734-5193</p>
          </span>
        </div>  
        <div className="container text-center feet-space">
          <a href="https://github.com/ndpenaloza" className="fa fa-github fa-2x social-link float-center" target="_blank" rel="noreferrer" alt="GitHub icon"> </a>
          <a href="https://www.linkedin.com/in/nick-d-penaloza-534a9229" style={{marginBottom: 20}}className="fa fa-linkedin fa-2x social-link" target="_blank" rel="noreferrer" alt='LinkedIn icon'> </a>
        </div>
      </div>
    </div>
  )
}export default Footer;