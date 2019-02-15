import React from  "react"

import "./hatefulsix.css"

const HatefulSix = () => (
  <section className="hatefulsix">
    <h2>Favourites Shortlist</h2>
    <section className="hotshots">
    <figure className="hotshots__petra">
      <img className="hotshots__portrait" src="https://s3.eu-central-1.amazonaws.com/expbh/climbing/petra.png"/>
      <h3>Petra Klingler</h3>
    </figure>
    <figure className="hotshots__ondra">
      <img className="hotshots__portrait" src="https://s3.eu-central-1.amazonaws.com/expbh/climbing/ondra.png"/>
      <h3>Adam Ondra</h3>
    </figure>
    </section>
  </section>
)

export default HatefulSix
