import BridalVeil from '../../images/bridalVeil.jpg';
import DelicateArch from '../../images/delicateArch.jpg';
import GoldenGate from '../../images/goldenGate.jpg';
import Isabella from '../../images/isabella.jpg';
import Me from '../../images/me.jpg';
import Pan from '../../images/pan.jpg';
import TunnelView from '../../images/tunnelView.jpg';

function AboutMe() {
  return (
    <div>
      <div className="container main-content">
        <div className="jumbotron">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="container-fluid text-center">
                <div id="carouselExampleControls" className="carousel slide carousel-fade" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src={Me} alt="Me"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={Isabella} alt="Isabella"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={Pan} alt="Sourdough bread"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={GoldenGate} alt="The Golden Gate Bridge"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={BridalVeil} alt="Bridal Veil Falls"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={TunnelView} alt="Tunnel View"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={DelicateArch} alt="The Delicate Arch"/>
                    </div>
                  </div>
                  {/* <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a> */}
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
