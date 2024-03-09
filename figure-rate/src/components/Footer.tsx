interface FooterProps {
  figureRateLogoFilePath: string;
}

function Footer({ figureRateLogoFilePath }: FooterProps) {
  return (
    <>
      <footer className="bg-purple p-5">
        <div className="d-flex flex-column flex-md-row align-items-center align-items-md-baseline justify-content-md-around">
          <div className="about-section">
            <h5 className="text-white">About</h5>

            <hr className="text-white fw-bolder" />

            <ul className="text-white list-unstyled">
              <li>
                <a href="" className="text-white text-decoration-none">
                  About us
                </a>
              </li>
              <li>
                <a href="" className="text-white text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="" className="text-white text-decoration-none">
                  Terms & conditions
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-section">
            <h5 className="text-white">Contact</h5>

            <hr className="text-white fw-bolder" />

            <ul className="text-white list-unstyled">
              <li>
                <a href="" className="text-white text-decoration-none">
                  Contact us
                </a>
              </li>
              <li>
                <a href="" className="text-white text-decoration-none">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="legal-section">
            <h5 className="text-white">Legal</h5>

            <hr className="text-white fw-bolder" />

            <ul className="text-white list-unstyled">
              <li>
                <a href="" className="text-white text-decoration-none">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="" className="text-white text-decoration-none">
                  Terms of use
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row align-items-center align-items-md-baseline justify-content-md-around">
          <div className="figure-section">
            <a href="#">
              <img
                src={figureRateLogoFilePath}
                alt="Figure Rate logo"
                width="100"
                height="90"
              />
            </a>
            <small className="text-white">
              ©️ <span id="currentYear">2024 </span>
              Figure Rate, LLC. An Aver company. All rights reserved.
            </small>
          </div>
          <div className="social-media-section">
            <a href="">
              <svg class="bi" width="32" height="32" fill="currentColor">
                <use xlink:href="bootstrap-icons.svg#heart-fill" />
              </svg>
            </a>

            <a href=""></a>

            <a href=""></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
