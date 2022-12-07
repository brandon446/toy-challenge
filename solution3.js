
const netSalary = (basic, benefits) => {
  let taxablePay = basic - benefits;
  
  let nhif;
  if (taxablePay < 24001) {
    return taxablePay;
  } else {
    if (taxablePay > 99999) {
      nhif = 1700;
    } else if (taxablePay > 89999) {
      nhif = 1600;
    } else if (taxablePay > 79999) {
      nhif = 1500;
    } else if (taxablePay > 69999) {
      nhif = 1400;
    } else if (taxablePay > 59999) {
      nhif = 1300;
    } else if (taxablePay > 49999) {
      nhif = 1200;
    } else if (taxablePay > 44999) {
      nhif = 1100;
    } else if (taxablePay > 39999) {
      nhif = 1000;
    } else if (taxablePay > 34999) {
      nhif = 950;
    } else if (taxablePay > 29999) {
      nhif = 900;
    } else if (taxablePay > 24999) {
      nhif = 850;
    } else if (taxablePay > 19999) {
      nhif = 750;
    } else if (taxablePay > 14999) {
      nhif = 600;
    } else if (taxablePay > 11999) {
      nhif = 500;
    } else if (taxablePay > 7999) {
      nhif = 400;
    } else if (taxablePay > 5999) {
      nhif = 300;
    } else {
      nhif = 150;
    }
    
    let paye;
    if (taxablePay > 32333) {
      paye = 24000 * 0.1 + 8333 * 0.25 + (taxablePay - 32333) * 0.3;
    } else if (taxablePay > 24000) {
      paye = 24000 * 0.1 + (taxablePay - 24000) * 0.25;
    } else if (taxablePay > 23999) {
      paye = 24000 * 0.1;
    }
    
    let nssf = 200;
    let totalDeductions;
    totalDeductions = paye - (nhif + nssf);
    return taxablePay - totalDeductions;
  }
};