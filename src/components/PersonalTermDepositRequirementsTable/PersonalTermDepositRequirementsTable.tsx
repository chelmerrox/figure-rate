//@ts-nocheck

import DataTable from "react-data-table-component";
import { useState } from "react";

interface PersonalTermDepositRequirementsTableProps {
  currentYear: Number;
}

function PersonalTermDepositRequirementsTable({
  currentYear,
}: PersonalTermDepositRequirementsTableProps) {
  const columns = [
    {
      name: "#",
      selector: (row) => row.financialInstitutionID,
      sortable: true,
    },
    {
      name: "Institution Name",
      selector: (row) => row.financialInstitutionName,
      sortable: true,
    },
    {
      name: "Product Name",
      selector: (row) => row.productName,
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
      productName: "Personal Term Deposit",
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
      productName: "Personal Term Deposit",
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
      productName: "Personal Term Deposit",
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
      financialInstitutionName: "BRED Bank Fiji",
      productName: "Personal Term Deposit",
      minimumDepositAmount: "$1,000",
      maximumDepositAmount: "$200,000",
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
      financialInstitutionName: "Credit Corporation Fiji",
      productName: "Personal Term Deposit",
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
      financialInstitutionID: 6,
      financialInstitutionName: "Dominion Finance PTE Limited",
      productName: "Personal Term Deposit",
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
      financialInstitutionName: "Fiji Development Bank",
      productName: "Yaubula Term Deposit",
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
      financialInstitutionID: 8,
      financialInstitutionName: "Fijian Holdings Unit Trust",
      productName: "Personal Term Deposit",
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
      financialInstitutionID: 9,
      financialInstitutionName: "Handy Finance Fiji",
      productName: "Personal Term Deposit",
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
      financialInstitutionID: 10,
      financialInstitutionName: "Home Finance Company Bank",
      productName: "Personal Term Deposit",
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
      financialInstitutionID: 11,
      financialInstitutionName: "Kontiki Finance",
      productName: "Personal Term Deposit",
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
      financialInstitutionID: 12,
      financialInstitutionName: "Merchant Finance Limited",
      productName: "Personal Term Deposit",
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
      financialInstitutionID: 13,
      financialInstitutionName: "Poseidon Finance",
      productName: "Personal Term Deposit",
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
      financialInstitutionID: 14,
      financialInstitutionName: "Westpac Fiji",
      productName: "Personal Term Deposit",
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

  // A super simple expandable component.
  const ExpandedComponent = ({ data }) => (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );

  const [records, setRecords] = useState(data);

  // Handle Search is the same as Handle Filter
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let searchValue: Boolean;
    let financialInstitutionIDValue: Boolean;
    let financialInstitutionNameValue: Boolean;
    let productNameValue: Boolean;

    const newData = data.filter((row) => {
      financialInstitutionIDValue = row.financialInstitutionID
        .toString()
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      financialInstitutionNameValue = row.financialInstitutionName
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      productNameValue = row.productName
        .toLowerCase()
        .includes(e.target.value.toLowerCase());

      if (financialInstitutionIDValue) {
        searchValue = financialInstitutionIDValue;
      } else if (financialInstitutionNameValue) {
        searchValue = financialInstitutionNameValue;
      } else {
        searchValue = productNameValue;
      }

      return searchValue;
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
          title={
            "Minimum Requirements for Personal Term Deposit in " + currentYear
          }
          columns={columns}
          data={records}
          fixedHeader
          selectableRows
          pagination
          customStyles={customStyles}
          expandableRows
          expandableRowsComponent={ExpandedComponent}
        />
      </div>
    </>
  );
}

export default PersonalTermDepositRequirementsTable;
