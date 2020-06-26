const transactions = [
  {
    id: "01",
    title: "Salário",
    value: 4000,
    type: "income"
  },
  {
    id: "02",
    title: "Salário",
    value: 4000,
    type: "income"
  },
  {
    id: "03",
    title: "Salário",
    value: 4000,
    type: "outcome"
  },
  {
    id: "04",
    title: "Salário",
    value: 2000,
    type: "outcome"
  },
]

const totalIncome = transactions.reduce(
  (acumulador , valorAtual) => {
    if (valorAtual.type === 'income') {
      return acumulador + valorAtual.value;
    } else {
      return acumulador;
    }
  }, 0
);

const totalOutcome = transactions.reduce(
  (acumulador , valorAtual) => {
    if (valorAtual.type === 'outcome') {
      return acumulador + valorAtual.value;
    } else {
      return acumulador;
    }
  }, 0
);

console.log(totalIncome);
console.log(totalOutcome);
