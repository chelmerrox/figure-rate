$("#datepicker").datepicker( {
  format: "mm-yyyy",
  startView: "months", 
  minViewMode: "months"
});

// Variable Declarations
let month;
let year;
const monthOne2021 = { bsp: "0.5%", westpac: "0.5%", anz: "0.5%", bredBank: "0.75%", hfc: "1%", bankOfBaroda: "0.6%"};
const monthThree2021 = { bsp: "0.75%", westpac: "0.75%", anz: "0.75%", bredBank: "0.75%", hfc: "1.25%", bankOfBaroda: "0.75%", kontikiFinance: "0.25%"};
const monthSix2021 = { bsp: "1.25%", westpac: "1%", anz: "1%", bredBank: "1%", hfc: "1.5%", bankOfBaroda: "1%", kontikiFinance: "0.25%"};
const monthNine2021 = { bsp: "1.5%", westpac: "1.5%", anz: "1.25%", bredBank: "1.5%", hfc: "1.75%", bankOfBaroda: "1.5%", kontikiFinance: "0.25%"};
const monthTwelve2021 = { bsp: "2%", westpac: "1.75%", anz: "1.5%", bredBank: "2%", hfc: "2,25%", bankOfBaroda: "2%", kontikiFinance: "0.5%", fdb: "2.4%"};
const monthFifteen2021 = { bsp: "2%", bredBank: "2%" , bankOfBaroda: "2%"};
const monthEighteen2021 = { bsp: "2%", westpac: "1.75%", anz: "1.5%", bredBank: "2%", hfc: "2%", bankOfBaroda: "2%", kontikiFinance: "0.75%"};
const monthTwentyFour2021 = { bsp: "2%", westpac: "1.75%", anz: "1.5%", bredBank: "2.05%", hfc: "2%", bankOfBaroda: "2%", kontikiFinance: "1.25%", fdb: "2.6%"};
const monthThirtySix2021 = { bsp: "2%", westpac: "1.75%", anz: "1.5%", bredBank: "2.1%", hfc: "2%", bankOfBaroda: "2%", kontikiFinance: "2%", fdb: "2.75%"};
const monthFourtyEight2021 = { bsp: "2%", westpac: "1.75%", anz: "1.5%", bredBank: "2.15%", hfc: "2%", kontikiFinance: "2.5%", fdb: "2.95%"};
const monthSixty2021 = { bsp: "2%", westpac: "1.75%", anz: "1.5%", bredBank: "2.25%", hfc: "2%", bankOfBaroda: "2%", kontikiFinance: "3%", fdb: "3%"};
const monthSeventyTwo2021 = { kontikiFinance: "3.25%" };
const monthEightyFour2021 = { kontikiFinance: "3.5%"};
const monthNinetySix2021 = { kontikiFinance: "3.5%"};
const monthOneHundredAndEight2021 = { kontikiFinance: "3.5%"};
const monthOneHundredAndTwenty2021 = { bankOfBaroda: "2%", kontikiFinance: "4%"};
const monthThirteen2021 = { westpac: "2.35%"};

const termAndRates = { '2021': [monthOne2021, monthThree2021, monthSix2021, monthNine2021, monthTwelve2021, monthFifteen2021, monthEighteen2021, 
  monthTwentyFour2021, monthThirtySix2021, monthFourtyEight2021, monthSixty2021, monthSeventyTwo2021, monthEightyFour2021, 
  monthNinetySix2021, monthOneHundredAndEight2021, monthOneHundredAndTwenty2021, monthThirteen2021]};

// Function Declarations


// EventListeners

