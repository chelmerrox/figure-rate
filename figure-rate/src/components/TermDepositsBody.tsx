import { useState } from "react";
import "../App.css";

interface TermDepositsBodyProps {
  tableHeadings: string[];
  tableBody: {
    term: string[];
    /*
    interestRates: {
      financialInstitution: string[];
    };
    */
  };
}

function TermDepositsBody({ tableHeadings, tableBody }: TermDepositsBodyProps) {
  return (
    <>
      <section className="term-deposits-body m-5">
        <h1 className="league-spartan-font text-center">
          Compare interest rates with <span className="font-purple">ease.</span>
        </h1>

        <div className="container-fluid mt-5">
          <table className="table table-striped table-responsive table-hover">
            <thead className="table-header table-light">
              <tr>
                {tableHeadings.map((heading, i) => (
                  <th key={i} scope="col" className="text-center">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableBody.term.map((termPeriod, j) => (
                <tr key={j}>
                  <th className="text-center">{termPeriod} months</th>
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
(    
  <tr>
    <th scope="row">{string} months</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
  </tr>
)
*/

/*
  const thead = document.querySelector(".table-header");
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  const td = document.createElement("td");

  if (j === 0) {
    th.textContent = string;
    th.setAttribute("scope", "row");
    tr.append(th);
  } else {
    td.textContent = string;
    tr.append(td);
  }

  thead.after(tr);
 */

/*
  tableBody.interestRates.forEach((key, k) => {
    if (j === k){
      key.forEach(())
    }
  })
*/
