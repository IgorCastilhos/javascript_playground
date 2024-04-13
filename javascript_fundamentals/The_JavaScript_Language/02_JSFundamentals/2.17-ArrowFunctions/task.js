// Replace function Expressions with arrow functions in the code below:
let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);
