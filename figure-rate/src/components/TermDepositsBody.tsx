import { useState } from "react";
import "../App.css";

interface TermDepositsBodyProps {
  tableHeadings: string[];
  tableBody: string[][];
}

function TermDepositsBody({ tableHeadings, tableBody }: TermDepositsBodyProps) {
  return (
    <>
      <section className="term-deposits-body m-5">
        <h1 className="league-spartan-font text-center">
          Compare interest rates with <span className="font-purple">ease.</span>
        </h1>

        <div className="table-responsive mt-5">
          <table className="table table-striped table-hover">
            <thead className="table-header table-light">
              <tr>
                {tableHeadings.map((heading, i) => (
                  <th key={i} scope="col" className="text-center">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {tableBody.map((row, i) => (
                <tr key={i + 1}>
                  {row.map((item, j) => (
                    <td
                      className={
                        j === 0 ? "text-center fw-bolder" : "text-center"
                      }
                      scope={j === 0 ? "row" : ""}
                    >
                      {j === 0 ? item + " months" : item}
                    </td>
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
