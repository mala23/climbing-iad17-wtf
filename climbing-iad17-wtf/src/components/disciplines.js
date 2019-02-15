import React from "react"
import "./disciplines.css"

const Disciplines = ({ siteTitle }) => ( <section className="disciplines">
  <div className="lead">
    <div className="leadImg"></div>
    <h3>Lead</h3>
    <p>
      Lead climbing is about climbing to the top while clipping all quickdraws within 6 minutes. The wall is about 15 meters high. The route is considered ‘topped’ when the final quickdraw is clipped and the climber holds the top hold with both hands. If a climber falls, the height climbed counts. Another attempt is not possible. If two climbers reach the same height, the quicker one wins. 
    </p>
  </div>
  <div className="bouldering">
    <div classNam="boulderingImg"></div>
    <h3>Bouldering</h3>
    <p>
   The climbers attempt to top as many boulders as possible on a 4m high wall without rope and belaying. They have 4 minutes time for their attempt. It is not allowed to train on the routes before, although the athletes have limited time to see the boulders before. The boulder is topped when the top hold is grabbed with both hands for a minimum of 2 seconds.   
    </p>
  </div>
  <div className="speed">
    <div className="speedImg"></div>
    <h3>Speed</h3>
    <p>
      Two athletes face each other in an attempt to climb the same route as fast as possible. The wall is 15m high and is angled at an 95°. The possible best time is 5-6 seconds by the men and 7-8 seconds by the women. A false start automatically leads to disqualification. The athletes are belayed while climbing. 
    </p>
  </div>
</section>
)

export default Disciplines
