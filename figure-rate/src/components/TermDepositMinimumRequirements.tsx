import DataTable from "react-data-table-component";
import { useState } from "react";

function TermDepositMinimumRequirements() {
  const columns = [
    {
      name: "#",
      selector: (row) => row.financialInstitutionID,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.financialInstitutionName,
      sortable: true,
    },
    {
      name: "Minimum Deposit",
      selector: (row) => row.minimumDepositAmount,
      sortable: true,
    },
    {
      name: "Maximum Deposit",
      selector: (row) => row.maximumDepositAmount,
      sortable: true,
    },
    {
      name: "More than maximum deposit",
      selector: (row) => row.rulesForDepositsAboveMaximumAmount,
      sortable: true,
    },
    {
      name: "Deposit Method",
      selector: (row) => row.depositMethod,
      sortable: true,
    },
    {
      name: "Term",
      selector: (row) => row.term,
      sortable: true,
    },
    {
      name: "Interest Payment",
      selector: (row) => row.interestPayment,
      sortable: true,
    },
    {
      name: "Maturity Options",
      selector: (row) => row.maturityOptions,
      sortable: true,
    },
    {
      name: "Early Withdrawals",
      selector: (row) => row.earlyWithdrawals,
      sortable: true,
    },
    {
      name: "Benefits",
      selector: (row) => row.benefits,
      sortable: true,
    },
  ];

  const data = [
    {
      financialInstitutionID: 1,
      financialInstitutionName: "ANZ",
      minimumDepositAmount: "$500",
      maximumDepositAmount: "$100,000",
      rulesForDepositsAboveMaximumAmount: "-",
      depositMethod: "-",
      term: "-",
      interestPayment: "-",
      maturityOptions: "-",
      earlyWithdrawals: "-",
      benefits: "-",
    },
    {
      financialInstitutionID: 2,
      financialInstitutionName: "Bank of Baroda",
      minimumDepositAmount: "$500",
      maximumDepositAmount: "-",
      rulesForDepositsAboveMaximumAmount: "-",
      depositMethod: "-",
      term: "-",
      interestPayment: "-",
      maturityOptions: "-",
      earlyWithdrawals: "-",
      benefits: "-",
    },
    {
      financialInstitutionID: 3,
      financialInstitutionName: "Bank of South Pacific",
      minimumDepositAmount: "$1,000",
      maximumDepositAmount: "-",
      rulesForDepositsAboveMaximumAmount: "-",
      depositMethod: "-",
      term: "-",
      interestPayment: "-",
      maturityOptions: "-",
      earlyWithdrawals: "-",
      benefits: "-",
    },
    {
      financialInstitutionID: 4,
      financialInstitutionName: "Credit Corporation Fiji",
      minimumDepositAmount: "-",
      maximumDepositAmount: "-",
      rulesForDepositsAboveMaximumAmount: "-",
      depositMethod: "-",
      term: "-",
      interestPayment: "-",
      maturityOptions: "-",
      earlyWithdrawals: "-",
      benefits: "-",
    },
    {
      financialInstitutionID: 5,
      financialInstitutionName: "Fiji Development Bank",
      minimumDepositAmount: "$25,000",
      maximumDepositAmount: "No limit",
      rulesForDepositsAboveMaximumAmount: "-",
      depositMethod: "-",
      term: "-",
      interestPayment: "-",
      maturityOptions: "-",
      earlyWithdrawals: "-",
      benefits: "-",
    },
    {
      financialInstitutionID: 6,
      financialInstitutionName: "Fijian Holdings Unit Trust",
      minimumDepositAmount: "-",
      maximumDepositAmount: "-",
      rulesForDepositsAboveMaximumAmount: "-",
      depositMethod: "-",
      term: "-",
      interestPayment: "-",
      maturityOptions: "-",
      earlyWithdrawals: "-",
      benefits: "-",
    },
    {
      financialInstitutionID: 7,
      financialInstitutionName: "Home Finance Company Bank",
      minimumDepositAmount: "$500",
      maximumDepositAmount: "$250,000",
      rulesForDepositsAboveMaximumAmount: "-",
      depositMethod: "-",
      term: "-",
      interestPayment: "-",
      maturityOptions: "-",
      earlyWithdrawals: "-",
      benefits: "-",
    },
    {
      financialInstitutionID: 8,
      financialInstitutionName: "Kontiki Finance",
      minimumDepositAmount: "$5,000",
      maximumDepositAmount: "$250,000",
      rulesForDepositsAboveMaximumAmount: "-",
      depositMethod: "-",
      term: "-",
      interestPayment: "-",
      maturityOptions: "-",
      earlyWithdrawals: "-",
      benefits: "-",
    },
    {
      financialInstitutionID: 9,
      financialInstitutionName: "Merchant Finance Limited",
      minimumDepositAmount: "$500",
      maximumDepositAmount: "$250,000",
      rulesForDepositsAboveMaximumAmount: "-",
      depositMethod: "-",
      term: "-",
      interestPayment: "-",
      maturityOptions: "-",
      earlyWithdrawals: "-",
      benefits: "-",
    },
    {
      financialInstitutionID: 10,
      financialInstitutionName: "Westpac Fiji",
      minimumDepositAmount: "$1,000",
      maximumDepositAmount: "-",
      rulesForDepositsAboveMaximumAmount: "-",
      depositMethod: "-",
      term: "-",
      interestPayment: "-",
      maturityOptions: "-",
      earlyWithdrawals: "-",
      benefits: "-",
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "rgb(248, 249, 250)",
        fontSize: "14px",
      },
    },
    rows: {
      style: {
        fontSize: "13.5px",
      },
    },
  };

  const [records, setRecords] = useState(data);

  // Handle Search is the same as Handle Filter
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = data.filter((row) => {
      return row.financialInstitutionName
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });

    setRecords(newData);
  };

  return (
    <>
      <div className="container my-5" id="minimumrequirementstable">
        <div className="input-group d-flex flex-row justify-content-end">
          <input
            type="search"
            className="form-control-sm border ps-3"
            placeholder="Search"
            onChange={handleSearch}
          />
          <span className="input-group-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </span>
        </div>

        <DataTable
          className="table"
          title="Minimum Requirements for Personal Term Deposit in 2024"
          columns={columns}
          data={records}
          fixedHeader
          selectableRows
          pagination
          customStyles={customStyles}
        />
      </div>
    </>
  );
}

export default TermDepositMinimumRequirements;

/*
const termDepositMinimumRequirementsHeadings = [
    "#",
    "Name",
    "Minimum Deposit",
    "Maximum Deposit",
    "More than maximum deposit",
    "Deposit Methods",
    "Term",
    "Interest Payment",
    "Maturity Options",
    "Early Withdrawal",
    "Benefits",
  ];

  const termDepositMinimumRequirementsRows = {
    financialInstitution: [
      {
        financialInstitutionID: 1,
        financialInstitutionName: "ANZ",
        minimumRequirements: ["$500", "$100,000"],
      },
      {
        financialInstitutionID: 2,
        financialInstitutionName: "Bank of Baroda",
        minimumRequirements: ["$500", " "],
      },
      {
        financialInstitutionID: 3,
        financialInstitutionName: "Bank of South Pacific",
        minimumRequirements: ["$1,000", " "],
      },
      {
        financialInstitutionID: 4,
        financialInstitutionName: "Credit Corporation Fiji",
        minimumRequirements: ["N/A", "N/A"],
      },
      {
        financialInstitutionID: 5,
        financialInstitutionName: "Fiji Development Bank",
        minimumRequirements: ["$25,000", "No maximum limit"],
      },
      {
        financialInstitutionID: 6,
        financialInstitutionName: "Fijian Holdings Unit Trust",
        minimumRequirements: [" ", " "],
      },
      {
        financialInstitutionID: 7,
        financialInstitutionName: "Home Finance Company Bank",
        minimumRequirements: ["$500", "$250,000"],
      },
      {
        financialInstitutionID: 8,
        financialInstitutionName: "Konitiki Finance",
        minimumRequirements: ["$5,000", "$250,000"],
      },
      {
        financialInstitutionID: 9,
        financialInstitutionName: "Merchant Finance",
        minimumRequirements: ["$500", "$250,000"],
      },
      {
        financialInstitutionID: 10,
        financialInstitutionName: "Westpac",
        minimumRequirements: ["$1,000", " "],
      },
    ],
  };


    interface FinancialInstitutions {
  financialInstitution: [
    {
      financialInstitutionID: number;
      financialInstitutionName: string;
      minimumRequirements: string[];
    }
  ];
}

interface TermDepositMinimumRequirementsProps {
  tableHeadings: string[];
  tableBody: FinancialInstitutions;
}

function TermDepositMinimumRequirements({
  tableHeadings,
  tableBody,
}: TermDepositMinimumRequirementsProps) {
  return (
    <>
      <section className="term-deposits-body m-5">
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
                    {heading}
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
                  {institution.minimumRequirements.map((requirement) => (
                    <td className="text-center">{requirement}</td>
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

export default TermDepositMinimumRequirements;
*/
