let concept = '';
let amount = '';

const getValueConcept = () => {
  concept = document.getElementById('concept').value;
};

const getAmountConcept = () => {
  amount = document.getElementById('amount').value;
};

const onClick = () => {
  getValueConcept();
  getAmountConcept();
};

const btn = document.getElementById('submit');
console.log(btn);

btn.addEventListener('click', (event) => {
  event.preventDefault();
  getValueConcept();
  getAmountConcept();
  console.log(concept);
  console.log(amount);
});
