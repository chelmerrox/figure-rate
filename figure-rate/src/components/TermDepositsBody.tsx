import { useState } from "react";
import "../App.css";

interface FinancialInstitutions {
  financialInstitution: [
    {
      financialInstitutionID: number;
      financialInstitutionName: string;
      interestRates: string[];
    }
  ];
}

interface TermDepositsBodyProps {
  tableHeadings: string[];
  tableBody: FinancialInstitutions;
  //tableBody: string[][];
}

function TermDepositsBody({ tableHeadings, tableBody }: TermDepositsBodyProps) {
  return (
    <>
      <section className="term-deposits-body m-5">
        <h1 className="league-spartan-font text-center">
          Compare interest rates with <span className="font-purple">ease.</span>
        </h1>

        <div className="table-responsive mt-5">
          <table className="table table-hover">
            <thead className="table-header table-light">
              <tr>
                {tableHeadings.map((heading, i) => (
                  <th
                    key={i}
                    scope="col"
                    className={
                      i === 0 || i === 1 ? "text-start" : "text-center"
                    }
                  >
                    {i === 0 || i === 1 || i === 7 || i === 8
                      ? heading
                      : heading + " months"}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableBody.financialInstitution.map((institution, j) => (
                <tr key={j} className={"row-" + (j + 1)}>
                  <th className="text-start">
                    {institution.financialInstitutionID}
                  </th>
                  <td className="text-start">
                    {institution.financialInstitutionName}
                  </td>
                  {institution.interestRates.map((rate) => (
                    <td className="text-center">{rate}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default TermDepositsBody;

/*
{tableBody.map((row, i) => (
  <tr key={i + 1}>
    {row.map((item, j) => (
      <td
        className={
          j === 0
            ? "text-center fw-bolder bg-light"
            : "text-center"
        }
        scope={j === 0 ? "row" : ""}
      >
        {j === 0 ? item + " months" : item}
      </td>
    ))}
  </tr>
))}
*/

/* 
    bankOfBaroda: string[];
    bankOfSouthPacific: string[];
    creditCorporationFiji: string[];
    fijiDevelopmentBank: string[];
    fijianHoldingdUnitTrust: string[];
    homeFinanceCompanyBank: string[];
    kontikiFinance: string[];
    merchantFinance: string[];
    westpac: string[];
*/
