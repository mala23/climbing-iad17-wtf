import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./footer.css"

const Footer = () => (
  <footer>
  <div className="footerImg"><div className="olympicsLogo"></div></div>
  <div className="credits">
  <ul className="killers">
  <h3>Idea and Realisation</h3>
    <li>Corinna Haag</li>
    <li>Colin Schmid</li>
    <li>Duy Bui</li>
  </ul>
  <ul className="zmodule">
 <h3>Story Mining</h3>
 <li>Zurich University of the Arts</li>
 <li>MA Cultural Publishing & BA Interaction Design</li>
  <li>With Timo Grossenbacher & Julian Schmidli</li>
  </ul>
  <ul classNam="methods">
    <h3>Methods</h3>
  <li>Data about the athletes were collected through the International Federation of Sport Climbing as well as 8a.nu.
  Research about sport climbing and the Olympic games were made through Olympia 2020, climbing.com, Kletter WM Innsbruck
  </li>
  </ul>
  <div className="c">
    © {new Date().getFullYear()}, Corinna Haag, Duy Bui, Colin Schmid – Built with 
    <svg className="footer__hearticon" fill="currentColor" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40"><g><path d="m20 37.1q-0.6 0-1-0.4l-13.9-13.4q-0.2-0.2-0.6-0.6t-1.3-1.4-1.5-2.2-1.2-2.7-0.5-3.1q0-4.9 2.8-7.7t7.9-2.7q1.4 0 2.8 0.4t2.7 1.3 2.1 1.6 1.7 1.5q0.8-0.8 1.7-1.5t2.1-1.6 2.7-1.3 2.8-0.4q5 0 7.9 2.7t2.8 7.7q0 4.9-5.1 10l-13.9 13.4q-0.4 0.4-1 0.4z"></path></g></svg>
    and
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </div>
  </div>
  </footer>
)

export default Footer
