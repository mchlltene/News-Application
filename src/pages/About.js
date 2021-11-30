import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return(
    <>
      <Navigation />

      <div className="container  my-5"> <br/>

      <h1 class="about">About This App</h1>
       <p>This application provide Locate articles and breaking news headlines from news sources and blogs across the web <br/><p> API : newsapi.org  </p>  </p>

        <h1>About Me</h1>
        <table className="col-9">
          <tr>
            <td>Name  </td>
            <td>: Michell Gabriell Tene</td>
          </tr>
          <tr>
            <td>NIM </td>
            <td>: 105011910057</td>
          </tr>
          <tr>
            <td>Program Study </td>
            <td>: Information System / 2019-2022</td>
          </tr><br/>
        </table>
        
        <div className="pt-10">
        <h1 >Subject</h1>
        <table className="col-9">
          <tr>
            <td>Subject </td>
            <td>: Web Programming / A</td>
          </tr>
          <tr>
            <td>Description </td>
            <td>: Final Project</td>
          </tr> <br/> <br/> <br/> 
        </table>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
