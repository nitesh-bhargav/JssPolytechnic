import React from "react";

function Contactbody() {
  return (
    <div>
      <div className="entry-content">
        <div className="wp-block-group">
          <div className="wp-block-group__inner-container">
            <div
              className="mapouter"
              style={{
                position: "relative",
                textAlign: "center",
                height: "500px",
                width: "1170px",
              }}
            >
              <div className="gmap_canvas">
                <iframe
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=%20JSS%20Polytechnic%20SJCE%20Campus%2C%20Manasa%20Gangothri%2C%20Mysuru%2C%20Karnataka%20570006&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  width="1170"
                  height="500"
                  frameborder="0"
                  style={{
                    overflow: "hidden",
                    background: "none!important",
                    height: "500px",
                    width: "1170px",
                  }}
                ></iframe>
                <a href="https://www.embedgooglemap.net/">embedgooglemap.net</a>
              </div>
            </div>
          </div>
        </div>

        <h4>Contact info</h4>

        <div className="wp-block-group">
          <div className="wp-block-group__inner-container">
            <div className="wp-block-verse">
              {" "}
              JSSTIs' Campus
              <br /> Mysuru-570006
              <br /> Karnataka
              <br /> Phone No: 0821-2548318
              <br /> Mob: +91-9686677237
              <br /> Email: jssp418@yahoo.co.in
              <br /> Timings: 08:00 AM to 05:45 PM{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactbody;
