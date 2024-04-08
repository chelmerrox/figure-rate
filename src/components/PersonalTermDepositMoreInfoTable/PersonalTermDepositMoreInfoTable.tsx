//@ts-nocheck

import DataTable from "react-data-table-component";
import { useState } from "react";

interface PersonalTermDepositMoreInfoTableProps {
  currentYear: Number;
}

function PersonalTermDepositMoreInfoTable({
  currentYear,
}: PersonalTermDepositMoreInfoTableProps) {
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
      name: "For more information, please visit these websites.",
      selector: (row) => row.financialInstitutionWebsiteLink,
      sortable: true,
      cell: (row) => (
        <a href={row.financialInstitutionWebsiteLink} target="_blank">
          {row.financialInstitutionName + " website"}
        </a>
      ),
    },
  ];

  const data = [
    {
      financialInstitutionID: 1,
      financialInstitutionName: "ANZ",
      productName: "Personal Term Deposit",
      financialInstitutionWebsiteLink:
        "https://www.anz.com/fiji/en/personal/savings-investing/retail-term-deposit/",
    },
    {
      financialInstitutionID: 2,
      financialInstitutionName: "Bank of Baroda",
      productName: "Personal Term Deposit",
      financialInstitutionWebsiteLink:
        "https://www.bankofbaroda-fiji.com/personal-banking/personal-deposit-account/baroda-term-deposits",
    },
    {
      financialInstitutionID: 3,
      financialInstitutionName: "Bank of South Pacific",
      productName: "Personal Term Deposit",
      financialInstitutionWebsiteLink:
        "https://www.bsp.com.fj/personal-banking/retail-term-deposit/",
    },
    {
      financialInstitutionID: 4,
      financialInstitutionName: "Credit Corporation Fiji",
      productName: "Personal Term Deposit",
      financialInstitutionWebsiteLink:
        "https://www.creditcorp.com.fj/personal-term-deposit/",
    },
    {
      financialInstitutionID: 5,
      financialInstitutionName: "Fiji Development Bank",
      productName: "Yaubula Term Deposit",
      financialInstitutionWebsiteLink:
        "https://www.fdb.com.fj/yaubula-term-deposit/",
    },
    {
      financialInstitutionID: 6,
      financialInstitutionName: "Fijian Holdings Unit Trust",
      productName: "Personal Term Deposit",
      financialInstitutionWebsiteLink: "https://fhut.com.fj/",
    },
    {
      financialInstitutionID: 7,
      financialInstitutionName: "Home Finance Company Limited",
      productName: "Personal Term Deposit",
      financialInstitutionWebsiteLink:
        "https://www.hfc.com.fj/wp-content/uploads/2022/09/Term-Deposit.pdf",
    },
    {
      financialInstitutionID: 8,
      financialInstitutionName: "Kontiki Finance",
      productName: "Personal Term Deposit",
      financialInstitutionWebsiteLink:
        "https://www.kontikifinance.com/shareholders/term-deposits/",
    },
    {
      financialInstitutionID: 9,
      financialInstitutionName: "Merchant Finance Limited",
      productName: "Personal Term Deposit",
      financialInstitutionWebsiteLink:
        "https://merchantfinance.com.fj/investment/product-features/",
    },
    {
      financialInstitutionID: 10,
      financialInstitutionName: "Westpac Fiji",
      productName: "Personal Term Deposit",
      financialInstitutionWebsiteLink:
        "https://www.westpac.com.fj/personal/bank-accounts/term-deposit/",
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
      <div className="container my-5" id="moreinfotable">
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
            "For more information on Personal Term Deposit Interest Rates in " +
            currentYear
          }
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

export default PersonalTermDepositMoreInfoTable;
