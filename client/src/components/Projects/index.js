import UpNext from '../../images/up-next.png'
import EatDaBurger from '../../images/eatdaburger.png'
import SevereWeatherApp from '../../images/dashboard.png';
import EmployeeTracker from '../../images/employee-tracker.png';
import Planner from '../../images/planner.png';
import WeatherDashboard from '../../images/weather-dashboard.png';

function Projects() {
  return(
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {/*Up-Next*/}
          <div className="col portfolio-card">
            <div className="card shadow-sm">
              <img width="100%" height="225" src={UpNext} alt="Up-Next site"preserveAspectRatio="xMidYMid slice" focusable="false"></img>
              <div className="card-body">
                <h5>Up-Next</h5>
                <p className="card-text">An app to search music venues and events. Built with HTML, Javascript, JQuery, and Materialize. Utilizing Google Maps and Songkick APIs</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a role="button" className="btn btn-sm btn-outline-secondary" href="https://ducktrshessami.github.io/up-next/index.html" target="_blank" rel="noreferrer">Up-Next</a>
                    <a role="button" className="btn btn-sm btn-outline-secondary" href="https://github.com/ducktrshessami/up-next" target="_blank" rel="noreferrer">Repository</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Eat-Da-Burger */}
          <div className="col portfolio-card">
            <div className="card shadow-sm">
              <img width="100%" height="225" src={EatDaBurger} alt="Eat-Da-Burger dashboard"preserveAspectRatio="xMidYMid slice" focusable="false"></img>
              <div className="card-body">
                <h5 className="card-title">Eat-Da-Burger</h5>
                <p className="card-text">Burgers! A full stack app built with Javascript, JQuery, Node.js, MySQL, Express.js, Handlebars, and Materialize.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a role="button" className="btn btn-sm btn-outline-secondary" href="https://evening-oasis-88894.herokuapp.com/" target="_blank" rel="noreferrer">Eat-Da-Burger</a>
                    <a role="button" className="btn btn-sm btn-outline-secondary" href="https://github.com/ndpenaloza/burger" target="_blank" rel="noreferrer">Repository</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Severe Weather Alerts*/}
          <div className="col portfolio-card">
            <div className="card shadow-sm">
              <img width="100%" height="225" src={SevereWeatherApp} alt="Severe Weather Alerts dashboard" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
              <div className="card-body">
                <h5 className="card-title">Severe Weather Alerts</h5>
                <p className="card-text">A full stack app built with Javascript, JQuery, Node.js, MySQL, Express.js, Handlebars, and Bootstrap. Utilizing Google Maps and USGS APIs</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a role="button" className="btn btn-sm btn-outline-secondary" href="https://ness-project.herokuapp.com/signup" target="_blank" rel="noreferrer">Severe Weather Alerts</a>
                    <a role="button" className="btn btn-sm btn-outline-secondary" href="https://github.com/highwolfx/severe-weather-alerts" target="_blank" rel="noreferrer">Repository</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Weather Dashboard */}
          <div className="col portfolio-card">
            <div className="card shadow-sm">
              <img width="100%" height="225" src={WeatherDashboard} alt="Weather Dashboard" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
              <div className="card-body">
                <h5 className="card-title">Weather Dashboard</h5>
                <p className="card-text">An appl to search the current weather in any given city as well as the 5 day forecast.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a role="button" className="btn btn-sm btn-outline-secondary" href="https://ndpenaloza.github.io/weather-dashboard/" target="_blank" rel="noreferrer">Weather Dashboard</a>
                    <a role="button" className="btn btn-sm btn-outline-secondary" href="https://github.com/ndpenaloza/weather-dashboard" target="_blank" rel="noreferrer">Repository</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Work Day Scheduler*/}
          <div className="col portfolio-card">
            <div className="card shadow-sm">
              <img width="100%" height="225" src={Planner} alt="Work Day Scheduler" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
              <div className="card-body">
                <h5 className="card-title">Work Day Scheduler</h5>
                <p className="card-text">An app to schedule the work day. Built with HTML, CSS, Bootstrap, Javascript, and JQuery.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a role="button" className="btn btn-sm btn-outline-secondary" href="https://ndpenaloza.github.io/work-day-scheduler/" target="_blank" rel="noreferrer">Weather Dashboard</a>
                    <a role="button" className="btn btn-sm btn-outline-secondary" href="https://github.com/ndpenaloza/work-day-scheduler" target="_blank" rel="noreferrer">Repository</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Employee Tracker*/}
          <div className="col portfolio-card">
            <div className="card shadow-sm">
              <img width="100%" height="225" src={EmployeeTracker} alt="Employee Tracker" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
              <div className="card-body">
                <h5 className="card-title">Employee Tracker</h5>
                <p className="card-text">An app to track employees using all CRUD operations. Built with Node.Js and MySQL.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a role="button" className="btn btn-sm btn-outline-secondary" href="https://github.com/ndpenaloza/employee-tracker" target="_blank" rel="noreferrer">Repository</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;