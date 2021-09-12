import React, { Component } from 'react';
import GitHubCalendar from 'react-github-calendar';

var selectLastHalfYear = contributions => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 6;

  return contributions.filter(day => {
    const date = new Date(day.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
 });
};

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    } 

    return (
      <section id="portfolio">
      <div className="row">
         <div className="twelve columns collapsed">
            <h1>My Works</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
            <h1>GitHub Contributions</h1>
            <div style={{
                  font: 'opensans-bold',
                  color: 'papayawhip',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',}}>
                <GitHubCalendar
                  username="patadactyl"
                  transformData={selectLastHalfYear} 
                  hideTotalCount 
                  hideColorLegend
                />
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
