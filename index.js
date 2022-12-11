let concept = '';
let amount = '';
let ingreso = 0;
let gasto = 0;
let total = 0;
let indexTransaction = 0;
const btn = document.getElementById('submit');

const getTotal = (amount = 0) => {
  const totalSavingMoney = document.getElementById('totalSavingMoney');
  if (amount > 0) {
    totalSavingMoney.innerHTML = total += amount;
  } else {
    totalSavingMoney.innerHTML = total += amount;
  }
};
getTotal();

const getIncome = (amount = 0, reset = true) => {
  const totalIncomeMoney = document.getElementById('incomeMoney');
  if (amount > 0 || !reset) {
    totalIncomeMoney.innerHTML = ingreso += amount;
  } else {
    totalIncomeMoney.innerHTML = amount = 0;
  }
};
getIncome();

const getExpense = (amount = 0, reset = true) => {
  const totalExpenseMoney = document.getElementById('expenseMoney');
  if (amount < 0 || !reset) {
    totalExpenseMoney.innerHTML = gasto += amount;
  } else {
    totalExpenseMoney.innerHTML = amount = 0;
  }
};
getExpense();

const getValueConcept = () => {
  concept = document.getElementById('concept').value;
};

const getAmountConcept = () => {
  amount = parseInt(document.getElementById('amount').value);
};

btn.addEventListener('click', (event) => {
  event.preventDefault();
  getValueConcept();
  getAmountConcept();
  printAmount();
  getTotal(amount);
  if (amount > 0) {
    getIncome(amount);
  } else {
    getExpense(amount);
  }
  submitForm();
});

function generateID() {
  return Math.floor(Math.random() * 1000);
}

function printAmount() {
  const elem = document.getElementById('printRecord');
  const id = generateID();
  elem.innerHTML += `
  <div class="historyAmmount" id="${id}">
    ${concept}
    <br>
    <span class="amount-container">
      <span id="amount-${id}">${amount}</span>
      <span>€</span>
    </span>
    <button onclick="removeTransaction(${id})" id="remove">x</button>
  </div>`;
}

function submitForm() {
  document.getElementById('transaction-form').reset();
}

function removeTransaction(id) {
  const btn = document.getElementById(id);
  const amount = document.getElementById(`amount-${id}`);
  const numberAmount = new Number(amount.innerHTML);
  getTotal(-numberAmount);
  if (numberAmount > 0) {
    getIncome(-numberAmount, false);
  } else {
    getExpense(-numberAmount, false);
  }
  btn.remove();
}
