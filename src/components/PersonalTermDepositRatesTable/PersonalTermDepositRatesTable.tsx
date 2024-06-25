//@ts-nocheck

import DataTable from "react-data-table-component";
import { useState } from "react";

interface PersonalTermDepositRatesTableProps {
  currentYear: Number;
}

function PersonalTermDepositRatesTable({
  currentYear,
}: PersonalTermDepositRatesTableProps) {
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
      name: "1-2 months",
      selector: (row) => row.oneToTwoMonthsInterestRate,
      sortable: true,
    },
    {
      name: "3 months",
      selector: (row) => row.threeMonthsInterestRate,
      sortable: true,
    },
    {
      name: "6 months",
      selector: (row) => row.sixMonthsInterestRate,
      sortable: true,
    },
    {
      name: "9 months",
      selector: (row) => row.nineMonthsInterestRate,
      sortable: true,
    },
    {
      name: "12 months",
      selector: (row) => row.twelveMonthsInterestRate,
      sortable: true,
    },
    {
      name: "12 months to 398 days",
      selector: (row) => row.thirteenMonthsInterestRate,
      sortable: true,
    },
    {
      name: "399 days",
      selector: (row) => row.threeHundresAndNinetyNineDaysInterestRate,
      sortable: true,
    },
    {
      name: "15 months",
      selector: (row) => row.fifteenMonthsInterestRate,
      sortable: true,
    },
    {
      name: "18 months",
      selector: (row) => row.eighteenMonthsInterestRate,
      sortable: true,
    },
    {
      name: "24 months",
      selector: (row) => row.twentyFourMonthsInterestRate,
      sortable: true,
    },
    {
      name: "36 months",
      selector: (row) => row.thirtySixMonthsInterestRate,
      sortable: true,
    },
    {
      name: "48 months",
      selector: (row) => row.fourtyEightMonthsInterestRate,
      sortable: true,
    },
    {
      name: "60 months",
      selector: (row) => row.sixtyMonthsInterestRate,
      sortable: true,
    },
    {
      name: "72 months",
      selector: (row) => row.seventyTwoMonthsInterestRate,
      sortable: true,
    },
    {
      name: "84 months",
      selector: (row) => row.eightyFourMonthsInterestRate,
      sortable: true,
    },
    {
      name: "96 months",
      selector: (row) => row.ninetySixMonthsInterestRate,
      sortable: true,
    },
    {
      name: "108 months",
      selector: (row) => row.oneHundredAndEightMonthsInterestRate,
      sortable: true,
    },
    {
      name: "120 months",
      selector: (row) => row.oneHundredAndTwentyMonthsInterestRate,
      sortable: true,
    },
  ];

  const data = [
    {
      financialInstitutionID: 1,
      financialInstitutionName: "ANZ",
      productName: "Personal Term Deposit",
      oneToTwoMonthsInterestRate: "0.05%",
      threeMonthsInterestRate: "0.05%",
      sixMonthsInterestRate: "0.05%",
      nineMonthsInterestRate: "0.15%",
      twelveMonthsInterestRate: "0.25%",
      thirteenMonthsInterestRate: "0.25%",
      threeHundresAndNinetyNineDaysInterestRate: "0.25%",
      fifteenMonthsInterestRate: "0.25%",
      eighteenMonthsInterestRate: "0.25%",
      twentyFourMonthsInterestRate: "0.25%",
      thirtySixMonthsInterestRate: "0.25%",
      fourtyEightMonthsInterestRate: "0.25%",
      sixtyMonthsInterestRate: "0.25%",
      seventyTwoMonthsInterestRate: "N/A",
      eightyFourMonthsInterestRate: "N/A",
      ninetySixMonthsInterestRate: "N/A",
      oneHundredAndEightMonthsInterestRate: "N/A",
      oneHundredAndTwentyMonthsInterestRate: "N/A",
    },
    {
      financialInstitutionID: 2,
      financialInstitutionName: "Bank of Baroda",
      productName: "Personal Term Deposit",
      oneToTwoMonthsInterestRate: "0.25%",
      threeMonthsInterestRate: "0.25%",
      sixMonthsInterestRate: "0.25%",
      nineMonthsInterestRate: "0.35%",
      twelveMonthsInterestRate: "0.60%",
      thirteenMonthsInterestRate: "0.60%",
      threeHundresAndNinetyNineDaysInterestRate: "0.60%",
      fifteenMonthsInterestRate: "0.60%",
      eighteenMonthsInterestRate: "0.60%",
      twentyFourMonthsInterestRate: "0.60%",
      thirtySixMonthsInterestRate: "0.60%",
      fourtyEightMonthsInterestRate: "0.60%",
      sixtyMonthsInterestRate: "0.60%",
      seventyTwoMonthsInterestRate: "0.60%",
      eightyFourMonthsInterestRate: "0.60%",
      ninetySixMonthsInterestRate: "0.60%",
      oneHundredAndEightMonthsInterestRate: "0.60%",
      oneHundredAndTwentyMonthsInterestRate: "0.60%",
    },
    {
      financialInstitutionID: 3,
      financialInstitutionName: "Bank of South Pacific",
      productName: "Personal Term Deposit",
      oneToTwoMonthsInterestRate: "0.10%",
      threeMonthsInterestRate: "0.10%",
      sixMonthsInterestRate: "0.10%",
      nineMonthsInterestRate: "0.20%",
      twelveMonthsInterestRate: "0.30%",
      thirteenMonthsInterestRate: "0.30%",
      threeHundresAndNinetyNineDaysInterestRate: "0.30%",
      fifteenMonthsInterestRate: "0.30%",
      eighteenMonthsInterestRate: "0.30%",
      twentyFourMonthsInterestRate: "0.30%",
      thirtySixMonthsInterestRate: "0.30%",
      fourtyEightMonthsInterestRate: "0.30%",
      sixtyMonthsInterestRate: "0.30%",
      seventyTwoMonthsInterestRate: "N/A",
      eightyFourMonthsInterestRate: "N/A",
      ninetySixMonthsInterestRate: "N/A",
      oneHundredAndEightMonthsInterestRate: "N/A",
      oneHundredAndTwentyMonthsInterestRate: "N/A",
    },
    {
      financialInstitutionID: 4,
      financialInstitutionName: "BRED Bank Fiji",
      productName: "Personal Term Deposit",
      oneToTwoMonthsInterestRate: "N/A",
      threeMonthsInterestRate: "N/A",
      sixMonthsInterestRate: "N/A",
      nineMonthsInterestRate: "N/A",
      twelveMonthsInterestRate: "N/A",
      thirteenMonthsInterestRate: "N/A",
      threeHundresAndNinetyNineDaysInterestRate: "N/A",
      fifteenMonthsInterestRate: "N/A",
      eighteenMonthsInterestRate: "N/A",
      twentyFourMonthsInterestRate: "N/A",
      thirtySixMonthsInterestRate: "N/A",
      fourtyEightMonthsInterestRate: "N/A",
      sixtyMonthsInterestRate: "N/A",
      seventyTwoMonthsInterestRate: "N/A",
      eightyFourMonthsInterestRate: "N/A",
      ninetySixMonthsInterestRate: "N/A",
      oneHundredAndEightMonthsInterestRate: "N/A",
      oneHundredAndTwentyMonthsInterestRate: "N/A",
    },
    {
      financialInstitutionID: 5,
      financialInstitutionName: "Credit Corporation Fiji",
      productName: "Personal Term Deposit",
      oneToTwoMonthsInterestRate: "N/A",
      threeMonthsInterestRate: "N/A",
      sixMonthsInterestRate: "N/A",
      nineMonthsInterestRate: "N/A",
      twelveMonthsInterestRate: "N/A",
      thirteenMonthsInterestRate: "N/A",
      threeHundresAndNinetyNineDaysInterestRate: "N/A",
      fifteenMonthsInterestRate: "N/A",
      eighteenMonthsInterestRate: "N/A",
      twentyFourMonthsInterestRate: "N/A",
      thirtySixMonthsInterestRate: "N/A",
      fourtyEightMonthsInterestRate: "N/A",
      sixtyMonthsInterestRate: "N/A",
      seventyTwoMonthsInterestRate: "N/A",
      eightyFourMonthsInterestRate: "N/A",
      ninetySixMonthsInterestRate: "N/A",
      oneHundredAndEightMonthsInterestRate: "N/A",
      oneHundredAndTwentyMonthsInterestRate: "N/A",
    },
    {
      financialInstitutionID: 6,
      financialInstitutionName: "Dominion Finance PTE Limited",
      productName: "Personal Term Deposit",
      oneToTwoMonthsInterestRate: "-",
      threeMonthsInterestRate: "-",
      sixMonthsInterestRate: "-",
      nineMonthsInterestRate: "-",
      twelveMonthsInterestRate: "-",
      thirteenMonthsInterestRate: "-",
      threeHundresAndNinetyNineDaysInterestRate: "-",
      fifteenMonthsInterestRate: "-",
      eighteenMonthsInterestRate: "-",
      twentyFourMonthsInterestRate: "-",
      thirtySixMonthsInterestRate: "-",
      fourtyEightMonthsInterestRate: "-",
      sixtyMonthsInterestRate: "-",
      seventyTwoMonthsInterestRate: "-",
      eightyFourMonthsInterestRate: "-",
      ninetySixMonthsInterestRate: "-",
      oneHundredAndEightMonthsInterestRate: "-",
      oneHundredAndTwentyMonthsInterestRate: "-",
    },
    {
      financialInstitutionID: 7,
      financialInstitutionName: "Fiji Development Bank",
      productName: "Yaubula Term Deposit",
      oneToTwoMonthsInterestRate: "N/A",
      threeMonthsInterestRate: "N/A",
      sixMonthsInterestRate: "N/A",
      nineMonthsInterestRate: "N/A",
      twelveMonthsInterestRate: "0.80%",
      thirteenMonthsInterestRate: "0.80%",
      threeHundresAndNinetyNineDaysInterestRate: "0.80%",
      fifteenMonthsInterestRate: "0.80%",
      eighteenMonthsInterestRate: "0.80%",
      twentyFourMonthsInterestRate: "1.25%",
      thirtySixMonthsInterestRate: "1.60%",
      fourtyEightMonthsInterestRate: "2.00%",
      sixtyMonthsInterestRate: "2.25%",
      seventyTwoMonthsInterestRate: "N/A",
      eightyFourMonthsInterestRate: "N/A",
      ninetySixMonthsInterestRate: "N/A",
      oneHundredAndEightMonthsInterestRate: "N/A",
      oneHundredAndTwentyMonthsInterestRate: "N/A",
    },
    {
      financialInstitutionID: 8,
      financialInstitutionName: "Fijian Holdings Unit Trust",
      productName: "-",
      oneToTwoMonthsInterestRate: "-",
      threeMonthsInterestRate: "-",
      sixMonthsInterestRate: "-",
      nineMonthsInterestRate: "-",
      twelveMonthsInterestRate: "-",
      thirteenMonthsInterestRate: "-",
      threeHundresAndNinetyNineDaysInterestRate: "-",
      fifteenMonthsInterestRate: "-",
      eighteenMonthsInterestRate: "-",
      twentyFourMonthsInterestRate: "-",
      thirtySixMonthsInterestRate: "-",
      fourtyEightMonthsInterestRate: "-",
      sixtyMonthsInterestRate: "-",
      seventyTwoMonthsInterestRate: "-",
      eightyFourMonthsInterestRate: "-",
      ninetySixMonthsInterestRate: "-",
      oneHundredAndEightMonthsInterestRate: "-",
      oneHundredAndTwentyMonthsInterestRate: "-",
    },
    {
      financialInstitutionID: 9,
      financialInstitutionName: "Handy Finance Fiji",
      productName: "-",
      oneToTwoMonthsInterestRate: "-",
      threeMonthsInterestRate: "-",
      sixMonthsInterestRate: "-",
      nineMonthsInterestRate: "-",
      twelveMonthsInterestRate: "-",
      thirteenMonthsInterestRate: "-",
      threeHundresAndNinetyNineDaysInterestRate: "-",
      fifteenMonthsInterestRate: "-",
      eighteenMonthsInterestRate: "-",
      twentyFourMonthsInterestRate: "-",
      thirtySixMonthsInterestRate: "-",
      fourtyEightMonthsInterestRate: "-",
      sixtyMonthsInterestRate: "-",
      seventyTwoMonthsInterestRate: "-",
      eightyFourMonthsInterestRate: "-",
      ninetySixMonthsInterestRate: "-",
      oneHundredAndEightMonthsInterestRate: "-",
      oneHundredAndTwentyMonthsInterestRate: "-",
    },
    {
      financialInstitutionID: 10,
      financialInstitutionName: "Home Finance Company Bank",
      productName: "Personal Term Deposit",
      oneToTwoMonthsInterestRate: "0.25%",
      threeMonthsInterestRate: "0.25%",
      sixMonthsInterestRate: "0.50%",
      nineMonthsInterestRate: "0.75%",
      twelveMonthsInterestRate: "1.00%",
      thirteenMonthsInterestRate: "1.00%",
      threeHundresAndNinetyNineDaysInterestRate: "1.00%",
      fifteenMonthsInterestRate: "1.00%",
      eighteenMonthsInterestRate: "1.00%",
      twentyFourMonthsInterestRate: "1.00%",
      thirtySixMonthsInterestRate: "1.00%",
      fourtyEightMonthsInterestRate: "1.00%",
      sixtyMonthsInterestRate: "1.00%",
      seventyTwoMonthsInterestRate: "1.00%",
      eightyFourMonthsInterestRate: "1.00%",
      ninetySixMonthsInterestRate: "1.00%",
      oneHundredAndEightMonthsInterestRate: "1.00%",
      oneHundredAndTwentyMonthsInterestRate: "1.00%",
    },
    {
      financialInstitutionID: 11,
      financialInstitutionName: "Kontiki Finance",
      productName: "Personal Term Deposit",
      oneToTwoMonthsInterestRate: "N/A",
      threeMonthsInterestRate: "0.25%",
      sixMonthsInterestRate: "0.35%",
      nineMonthsInterestRate: "0.50%",
      twelveMonthsInterestRate: "1.75%",
      thirteenMonthsInterestRate: "1.75%",
      threeHundresAndNinetyNineDaysInterestRate: "1.75%",
      fifteenMonthsInterestRate: "1.75%",
      eighteenMonthsInterestRate: "1.75%",
      twentyFourMonthsInterestRate: "2.00%",
      thirtySixMonthsInterestRate: "2.25%",
      fourtyEightMonthsInterestRate: "2.50%",
      sixtyMonthsInterestRate: "3.00%",
      seventyTwoMonthsInterestRate: "3.25%",
      eightyFourMonthsInterestRate: "3.50%",
      ninetySixMonthsInterestRate: "3.75%",
      oneHundredAndEightMonthsInterestRate: "3.75%",
      oneHundredAndTwentyMonthsInterestRate: "4.00%",
    },
    {
      financialInstitutionID: 12,
      financialInstitutionName: "Merchant Finance Limited",
      productName: "Personal Term Deposit",
      oneToTwoMonthsInterestRate: "N/A",
      threeMonthsInterestRate: "N/A",
      sixMonthsInterestRate: "N/A",
      nineMonthsInterestRate: "N/A",
      twelveMonthsInterestRate: "N/A",
      thirteenMonthsInterestRate: "N/A",
      threeHundresAndNinetyNineDaysInterestRate: "N/A",
      fifteenMonthsInterestRate: "N/A",
      eighteenMonthsInterestRate: "N/A",
      twentyFourMonthsInterestRate: "N/A",
      thirtySixMonthsInterestRate: "N/A",
      fourtyEightMonthsInterestRate: "N/A",
      sixtyMonthsInterestRate: "N/A",
      seventyTwoMonthsInterestRate: "N/A",
      eightyFourMonthsInterestRate: "N/A",
      ninetySixMonthsInterestRate: "N/A",
      oneHundredAndEightMonthsInterestRate: "N/A",
      oneHundredAndTwentyMonthsInterestRate: "N/A",
    },
    {
      financialInstitutionID: 13,
      financialInstitutionName: "Poseidon Finance",
      productName: "Personal Term Deposit",
      oneToTwoMonthsInterestRate: "-",
      threeMonthsInterestRate: "-",
      sixMonthsInterestRate: "-",
      nineMonthsInterestRate: "-",
      twelveMonthsInterestRate: "-",
      thirteenMonthsInterestRate: "-",
      threeHundresAndNinetyNineDaysInterestRate: "-",
      fifteenMonthsInterestRate: "-",
      eighteenMonthsInterestRate: "-",
      twentyFourMonthsInterestRate: "-",
      thirtySixMonthsInterestRate: "-",
      fourtyEightMonthsInterestRate: "-",
      sixtyMonthsInterestRate: "-",
      seventyTwoMonthsInterestRate: "-",
      eightyFourMonthsInterestRate: "-",
      ninetySixMonthsInterestRate: "-",
      oneHundredAndEightMonthsInterestRate: "-",
      oneHundredAndTwentyMonthsInterestRate: "-",
    },
    {
      financialInstitutionID: 14,
      financialInstitutionName: "Westpac Fiji",
      productName: "Personal Term Deposit",
      oneToTwoMonthsInterestRate: "0.05%",
      threeMonthsInterestRate: "0.05%",
      sixMonthsInterestRate: "0.10%",
      nineMonthsInterestRate: "0.10%",
      twelveMonthsInterestRate: "0.25%",
      thirteenMonthsInterestRate: "0.25%",
      threeHundresAndNinetyNineDaysInterestRate: "0.25%",
      fifteenMonthsInterestRate: "0.25%",
      eighteenMonthsInterestRate: "0.30%",
      twentyFourMonthsInterestRate: "0.30%",
      thirtySixMonthsInterestRate: "0.40%",
      fourtyEightMonthsInterestRate: "0.50%",
      sixtyMonthsInterestRate: "0.50%",
      seventyTwoMonthsInterestRate: "0.50%",
      eightyFourMonthsInterestRate: "0.50%",
      ninetySixMonthsInterestRate: "0.50%",
      oneHundredAndEightMonthsInterestRate: "0.50%",
      oneHundredAndTwentyMonthsInterestRate: "0.50%",
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
    let oneToTwoMonthsValue: Boolean;
    let threeMonthsInterestRateValue: Boolean;
    let sixMonthsInterestRateValue: Boolean;
    let nineMonthsInterestRateValue: Boolean;
    let twelveMonthsInterestRateValue: Boolean;
    let thirteenMonthsInterestRateValue: Boolean;
    let threeHundredAndNinetyNineDaysInterestRateValue: Boolean;
    let fifteenMonthsInterestRateValue: Boolean;
    let eighteenMonthsInterestRateValue: Boolean;
    let twentyFourMonthsInterestRateValue: Boolean;
    let thirtySixMonthsInterestRateValue: Boolean;
    let fourtyEightMonthsInterestRateValue: Boolean;
    let sixtyMonthsInterestRateValue: Boolean;
    let seventyTwoMonthsInterestRateValue: Boolean;
    let eightyFourMonthsInterestRateValue: Boolean;
    let ninetySixMonthsInterestRateValue: Boolean;
    let oneHundredAndEightMonthsInterestRateValue: Boolean;
    let oneHundredAndTwentyMonthsInterestRateValue: Boolean;

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
      oneToTwoMonthsValue = row.oneToTwoMonthsInterestRate
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      threeMonthsInterestRateValue = row.threeMonthsInterestRate
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      sixMonthsInterestRateValue = row.sixMonthsInterestRate
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      nineMonthsInterestRateValue = row.nineMonthsInterestRate
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      twelveMonthsInterestRateValue = row.twelveMonthsInterestRate
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      thirteenMonthsInterestRateValue = row.thirteenMonthsInterestRate
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      threeHundredAndNinetyNineDaysInterestRateValue =
        row.threeMonthsInterestRate
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      fifteenMonthsInterestRateValue = row.fifteenMonthsInterestRate
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      eighteenMonthsInterestRateValue = row.eighteenMonthsInterestRate
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      twentyFourMonthsInterestRateValue = row.twentyFourMonthsInterestRate
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      thirtySixMonthsInterestRateValue = row.thirtySixMonthsInterestRate
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      fourtyEightMonthsInterestRateValue = row.fourtyEightMonthsInterestRate
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      sixtyMonthsInterestRateValue = row.sixtyMonthsInterestRate
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      seventyTwoMonthsInterestRateValue = row.seventyTwoMonthsInterestRate
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      eightyFourMonthsInterestRateValue = row.eightyFourMonthsInterestRate
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      ninetySixMonthsInterestRateValue = row.ninetySixMonthsInterestRate
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      oneHundredAndEightMonthsInterestRateValue =
        row.oneHundredAndEightMonthsInterestRate
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      oneHundredAndTwentyMonthsInterestRateValue =
        row.oneHundredAndTwentyMonthsInterestRate
          .toLowerCase()
          .includes(e.target.value.toLowerCase());

      if (financialInstitutionIDValue) {
        searchValue = financialInstitutionIDValue;
      } else if (financialInstitutionNameValue) {
        searchValue = financialInstitutionNameValue;
      } else if (productNameValue) {
        searchValue = productNameValue;
      } else if (oneToTwoMonthsValue) {
        searchValue = oneToTwoMonthsValue;
      } else if (threeMonthsInterestRateValue) {
        searchValue = threeMonthsInterestRateValue;
      } else if (sixMonthsInterestRateValue) {
        searchValue = sixMonthsInterestRateValue;
      } else if (nineMonthsInterestRateValue) {
        searchValue = nineMonthsInterestRateValue;
      } else if (twelveMonthsInterestRateValue) {
        searchValue = twelveMonthsInterestRateValue;
      } else if (thirteenMonthsInterestRateValue) {
        searchValue = thirteenMonthsInterestRateValue;
      } else if (threeHundredAndNinetyNineDaysInterestRateValue) {
        searchValue = threeHundredAndNinetyNineDaysInterestRateValue;
      } else if (fifteenMonthsInterestRateValue) {
        searchValue = fifteenMonthsInterestRateValue;
      } else if (eighteenMonthsInterestRateValue) {
        searchValue = eighteenMonthsInterestRateValue;
      } else if (twentyFourMonthsInterestRateValue) {
        searchValue = twentyFourMonthsInterestRateValue;
      } else if (thirtySixMonthsInterestRateValue) {
        searchValue = thirtySixMonthsInterestRateValue;
      } else if (fourtyEightMonthsInterestRateValue) {
        searchValue = fourtyEightMonthsInterestRateValue;
      } else if (sixtyMonthsInterestRateValue) {
        searchValue = sixtyMonthsInterestRateValue;
      } else if (seventyTwoMonthsInterestRateValue) {
        searchValue = seventyTwoMonthsInterestRateValue;
      } else if (eightyFourMonthsInterestRateValue) {
        searchValue = eightyFourMonthsInterestRateValue;
      } else if (ninetySixMonthsInterestRateValue) {
        searchValue = nineMonthsInterestRateValue;
      } else if (oneHundredAndEightMonthsInterestRateValue) {
        searchValue = oneHundredAndEightMonthsInterestRateValue;
      } else {
        searchValue = oneHundredAndTwentyMonthsInterestRateValue;
      }

      return searchValue;
    });

    setRecords(newData);
  };

  return (
    <>
      <div className="container my-5" id="termdeposittable">
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
          title={"Personal Term Deposit Interest Rates in " + currentYear}
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

export default PersonalTermDepositRatesTable;

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

/*
 
const termDepositInterestRatesHeadings = [
    "#",
    "Name",
    "1-2",
    "3",
    "6",
    "9",
    "12",
    "12 months to 398 days",
    "399 days",
    "15",
    "18",
    "24",
    "36",
    "48",
    "60",
    "72",
    "84",
    "96",
    "108",
    "120",
  ];

  const termDepositInterestRatesRows = {
    financialInstitution: [
      {
        financialInstitutionID: 1,
        financialInstitutionName: "ANZ",
        interestRates: [
          "0.05%",
          "0.05%",
          "0.05%",
          "0.15%",
          "0.25%",
          "0.25%",
          "0.25%",
          "0.25%",
          "0.25%",
          "0.25%",
          "0.25%",
          "0.25%",
          "0.25%",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
        ],
      },
      {
        financialInstitutionID: 2,
        financialInstitutionName: "Bank of Baroda",
        interestRates: [
          "0.25%",
          "0.25%",
          "0.25%",
          "0.35%",
          "0.60%",
          "0.60%",
          "0.60%",
          "0.60%",
          "0.60%",
          "0.60%",
          "0.60%",
          "0.60%",
          "0.60%",
          "0.60%",
          "0.60%",
          "0.60%",
          "0.60%",
          "0.60%",
        ],
      },
      {
        financialInstitutionID: 3,
        financialInstitutionName: "Bank of South Pacific",
        interestRates: [
          "0.10%",
          "0.10%",
          "0.10%",
          "0.20%",
          "0.30%",
          "0.30%",
          "0.30%",
          "0.30%",
          "0.30%",
          "0.30%",
          "0.30%",
          "0.30%",
          "0.30%",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
        ],
      },
      {
        financialInstitutionID: 4,
        financialInstitutionName: "Credit Corporation Fiji",
        interestRates: [
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
        ],
      },
      {
        financialInstitutionID: 5,
        financialInstitutionName: "Fiji Development Bank",
        interestRates: [
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "0.80%",
          "0.80%",
          "0.80%",
          "0.80%",
          "0.80%",
          "1.25%",
          "1.60%",
          "2.00%",
          "2.25%",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
        ],
      },
      {
        financialInstitutionID: 6,
        financialInstitutionName: "Fijian Holdings Unit Trust",
        interestRates: [
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
        ],
      },
      {
        financialInstitutionID: 7,
        financialInstitutionName: "Home Finance Company Bank",
        interestRates: [
          "0.25%",
          "0.25%",
          "0.50%",
          "0.75%",
          "1.00%",
          "1.00%",
          "1.00%",
          "1.00%",
          "1.00%",
          "1.00%",
          "1.00%",
          "1.00%",
          "1.00%",
          "1.00%",
          "1.00%",
          "1.00%",
          "1.00%",
          "1.00%",
        ],
      },
      {
        financialInstitutionID: 8,
        financialInstitutionName: "Kontiki Finance",
        interestRates: [
          "N/A",
          "0.20%",
          "0.35%",
          "0.50%",
          "1.75%",
          "1.75%",
          "1.75%",
          "1.75%",
          "1.75%",
          "2.00%",
          "2.25%",
          "2.50%",
          "3.00%",
          "3.25%",
          "3.50%",
          "3.75%",
          "3.75%",
          "4.00%",
        ],
      },
      {
        financialInstitutionID: 9,
        financialInstitutionName: "Merchant Finance",
        interestRates: [
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
        ],
      },
      {
        financialInstitutionID: 10,
        financialInstitutionName: "Westpac",
        interestRates: [
          "0.05%",
          "0.05%",
          "0.10%",
          "0.10%",
          "0.25%",
          "0.25%",
          "0.25%",
          "0.25%",
          "0.30%",
          "0.30%",
          "0.40%",
          "0.50%",
          "0.50%",
          "0.50%",
          "0.50%",
          "0.50%",
          "0.50%",
          "0.50%",
        ],
      },
    ],
  };



interface FinancialInstitutions {
  financialInstitution: [
    {
      financialInstitutionID: number;
      financialInstitutionName: string;
      interestRates: string[];
    }
  ];
}

interface TermDepositInterestRatesProps {
  tableHeadings: string[];
  tableBody: FinancialInstitutions;
  //tableBody: string[][];
}

function TermDepositInterestRates({
  tableHeadings,
  tableBody,
}: TermDepositInterestRatesProps) {
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

export default TermDepositInterestRates;
*/
