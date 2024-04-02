interface DisclaimerProps {
  currentYear: Number;
}

function Disclaimer({ currentYear }: DisclaimerProps) {
  return (
    <>
      <div className="container accordion mt-5" id="accordionBasic">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button bg-light-blue"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>
                ⚠️ Legal Disclaimer
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-info-circle-fill ms-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                </svg>
              </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionBasic"
          >
            <div className="accordion-body">
              <h6 className="fw-bolder text-secondary">Terms & conditions</h6>
              <p className="text-wrap">
                The interest rates displayed on this site are sourced from the
                respective financial institutions' websites and are accurate as
                of the year 2024. However, please be aware that these rates are
                subject to change without notice and may vary depending on
                various factors. We strongly advise individuals to visit the
                official websites of the financial institutions mentioned for
                the most up-to-date and accurate information regarding their
                current interest rates, terms, and conditions. While we strive
                to provide accurate and reliable information, we cannot
                guarantee the completeness, accuracy, or timeliness of the data
                presented on this site. Therefore, users should exercise caution
                and conduct their own research or consult with financial experts
                before making any financial decisions based on the information
                provided here. By accessing and using this site, you acknowledge
                and agree that the information provided is for informational
                purposes only and should not be construed as financial advice or
                a recommendation to engage in any specific financial
                transactions or investments. We disclaim any liability for any
                loss or damage arising directly or indirectly from the use of or
                reliance on the information presented on this site.Your use of
                this site constitutes your acceptance of these terms and
                conditions. If you do not agree with these terms, please refrain
                from using this site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Disclaimer;
