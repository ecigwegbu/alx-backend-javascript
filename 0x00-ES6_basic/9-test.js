// test whats up in 9
function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };
  return budget;
}

function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function (income) {
      return `$${income}`;
    },
    getIncomeInEuros: function (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}

// const fullBudget = getFullBudgetObject(20, 50, 10);

// console.log(fullBudget.getIncomeInDollars(fullBudget.income));
// console.log(fullBudget.getIncomeInEuros(fullBudget.income));

const fullBudget = getFullBudgetObject(200, 500, 100);
console.log(fullBudget.getIncomeInDollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));
