// import { Component } from 'react';
import UpNext from '../../images/up-next.png'
import EatDaBurger from '../../images/eatdaburger.png'
import SevereWeatherApp from '../../images/dashboard.png';
import EmployeeTracker from '../../images/employee-tracker.png';
import Planner from '../../images/planner.png';
import WeatherDashboard from '../../images/weather-dashboard.png';

const project = [
  {
    key: 1,
    image: UpNext,
    alt: 'Up-Next site',
    title: 'Up-Next',
    description: 'An app to search music venues and events. Built with HTML, Javascript, JQuery, and Materialize. Utilizing Google Maps and Songkick APIs.',
    buttonName: 'Up-Next',
    deploy: 'https://ducktrshessami.github.io/up-next/index.html',
    repo: 'https://github.com/ducktrshessami/up-next'
  },
  {
    key: 2,
    image: EatDaBurger,
    alt: 'Eat-Da-Burger Dashboard',
    title: 'Eat-Da-Burger!!',
    description: 'Burgers! A full stack app built with Javascript, JQuery, Node.js, MySQL, Express.js, Handlebars, and Materialize.',
    buttonName: "Eat-Da-Burger!!",
    deploy: 'https://evening-oasis-88894.herokuapp.com/',
    repo: 'https://github.com/ndpenaloza/burger'
  },
  {
    key: 3,
    image: SevereWeatherApp,
    alt: 'Severe Weather Alerts dashboard',
    title: 'Severe Weather Alerts',
    description: 'A full stack app built with Javascript, JQuery, Node.js, MySQL, Express.js, Handlebars, and Bootstrap. Utilizing Google Maps and USGS APIs.',
    buttonName: 'Severe Weather Alerts',
    deploy: 'https://ness-project.herokuapp.com/signup',
    repo: 'https://github.com/highwolfx/severe-weather-alerts'
  },
  {
    key: 4,
    image: EmployeeTracker,
    alt: 'Employee Tracker',
    title: 'Employee Tracker',
    description: 'An app to track employees using all CRUD operations. Built with Node.Js and MySQL.',
    buttonName: "Employee Tracker",
    deploy: '#',
    repo: 'https://github.com/ndpenaloza/employee-tracker'
  },
  {
    key: 5,
    image: Planner,
    alt: 'Work Day Scheduler',
    title: 'Work Day Scheduler',
    description: 'An appl to search the current weather in any given city as well as the 5 day forecast.',
    buttonName: 'Work Day Scheduler',
    deploy: 'https://ndpenaloza.github.io/work-day-scheduler/',
    repo: 'https://github.com/ndpenaloza/work-day-scheduler'
  },
  {
    key: 6,
    image: WeatherDashboard,
    alt: 'Weather Dashboard',
    title: 'Weather Dashboard',
    description: 'An appl to search the current weather in any given city as well as the 5 day forecast.',
    buttonName: 'Weather Dashboard',
    deploy: 'https://ndpenaloza.github.io/weather-dashboard/',
    repo: 'https://github.com/ndpenaloza/weather-dashboard'
  }
]

function Projects () {
  
  
  
  return(
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {project.map(p => {
            return (
          
          <div className="col portfolio-card" id={p.key}>
            <div className="card shadow-sm">
              <img width="100%" height="225" src={p.image} alt={p.alt} preserveAspectRatio="xMidYMid slice" focusable="false"></img>
              <div className="card-body">
                <h5>{p.title}</h5>
                <p className="card-text">{p.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a role="button" className="btn btn-sm btn-outline-secondary" href={p.deploy} target="_blank" rel="noreferrer">{p.buttonName}</a>
                    <a role="button" className="btn btn-sm btn-outline-secondary" href={p.repo} target="_blank" rel="noreferrer">Repository</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )})}
        </div>
      </div>
    </div>
  )
}

export default Projects;