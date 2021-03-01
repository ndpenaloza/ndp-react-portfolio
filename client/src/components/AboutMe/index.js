function AboutMe() {
  return (
    <div>
      <div className="container main-content">
        <div className="jumbotron">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="container-fluid text-center">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src="assets/images/IMG_5229.jpg" alt="Me"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="assets/images/isabella.jpg" alt="Isabella"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="assets/images/pan.jpg" alt="Sourdough bread"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="assets/images/goldenGate.jpg" alt="The Golden Gate Bridge"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="assets/images/bridalVeil.jpg" alt="Bridal Veil Falls"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="assets/images/tunnelView.jpg" alt="Tunnel View"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="assets/images/delicateArch.jpg" alt="The Delicate Arch"/>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h2>About me..</h2>
              <p>My name is Nick and I am currently enrolled in the UCSD Coding Boot Camp program. I have some knowledge in coding but I am prepared to take the next step and dive deep into programming. In my free time, I enjoy baking sourdough bread, sampling delicious beers, photography, and spending time outdoors with my wife and our two small children. Carpe Diem, and all that jazz!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
