interface FooterProps {
  footerColumns: string[][];
  /*
  footerColumns: {
    about: string[];
    contact: string[];
    legal: string[];
  };
  */
  figureRateLogoFilePath: string;
}

function Footer({ footerColumns, figureRateLogoFilePath }: FooterProps) {
  return (
    <>
      <footer className="bg-purple p-5">
        <div className="d-flex flex-column flex-md-row align-items-md-baseline justify-content-md-around">
          {footerColumns.map((column, i) => (
            <div key={i + 1} className={column[0] + "-section"}>
              <h5 className="text-white text-capitalize">{column[0]}</h5>

              <hr className="text-white fw-bolder" />

              <ul className="text-white list-unstyled">
                {column.map((item, j) => (
                  <li key={j + 1} className={"list-item-" + (j + 1)}>
                    <a
                      href={j !== 0 || j % 2 !== 0 ? item : ""}
                      className="text-white text-decoration-none"
                    >
                      {j !== 0 && j % 2 === 0 ? item : ""}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
            <button type="button" className="btn btn-light me-3">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#484646"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>
            </button>

            <button type="button" className="btn btn-light me-3">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#484646"
                  className="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </a>
            </button>

            <button type="button" className="btn btn-light me-3">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#484646"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

/*
  {footerColumns.map((section, i) => (
    section.map((item, j) => (
      <div className={item + "-section"}>
        {
          if (j === 0){
            (
              <h5 className="text-white">{item}</h5>;

              <hr className="text-white fw-bolder"></hr>;
            )
          } else {
            (

            )
          }
        }
      </div>
    ))
  )))
  ))}

  
  {footerColumns.map((sections, j) => {
    sections.map((section, k) => {
      <div className={section + "-section"}></div>;
    });
  })}
*/

/*
  {footerColumns.map((column, i) =>
    column.map((item, j) => (
      <div className={item + "-section"}>
        <h5 className="text-white">{}</h5>
        <hr className="text-white fw-bolder" />
      </div>
    ))
  )}
*/

/*
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
 */

/*
<li key={j}>
    <a
      href={j !== 0 || j % 2 !== 0 ? item : ""}
      className="text-white text-decoration-none"
    >
      {j !== 0 && j % 2 === 0 ? item : ""}
    </a>
  </li>
*/
