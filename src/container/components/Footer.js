import React from "react";

function Footer() {
  return (
    <div className="main-footer">
      <div className="col-12">
        <div className="row">
          <div className="col-xs-12 col-sm-3">
            <h4 className="fredoka-font logo-txt">Educloudlabs</h4>
          </div>
          <div className="col-xs-12 col-sm-6">
            <ul className="navbar mt-4">
              <li className="nav-item">Home</li>
              <li className="nav-item">About</li>
              <li className="nav-item">FAQ</li>
              <li className="nav-item">Feedback</li>
              <li className="nav-item">Careers</li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-3">
            <div className="address">
              <p>
                7, Dotivala Estate, 2nd Victoria X Lane, Opp Masina Hospital,
                Byculla, Mumbai 400027.
              </p>
              <h4>support@educloulabas.com</h4>
            </div>
          </div>
        </div>
        <div className="row privacy">
          <div className="col-xs-12 col-sm-2">
            <a href="#.">Privacy & Policy</a>
          </div>
          <div className="col-xs-12 col-sm-2">
            <a href="#.">Terms Condition</a>
          </div>
          <div class="col-xs-12 col-sm-4">
          <div className="social-media">
              <ul class="d-flex align-items-center">
                <li class="mr-2">
                  <a href="#" class="facebook">
                    <i class="ti-facebook "></i>
                  </a>
                </li>
                <li class="mr-2">
                  <a href="#" class="twitter">
                    <i class="ti-twitter-alt "></i>
                  </a>
                </li>
                <li class="mr-2">
                  <a href="#" class="linkedin">
                    <i class="ti-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 copy-right">
            <h4>Copyright Educloudlabs © 2022. All rights reserved</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
