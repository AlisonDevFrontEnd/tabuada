const numbers = Array.from({ length: 8 }, (_, i) => i + 2);

numbers.forEach((n) => {
  const multiplicationTable = Array.from(
    { length: 10 },
    (_, i) => `${n} \xD7 ${i + 1} = ${n * (i + 1)}`
  );
  //console.log(multiplicationTable.join('\n'));
  document.querySelector(".multiply").innerText +=
    multiplicationTable.join("\n") + "\n";
});

const b = document.querySelector(".btn");
b.addEventListener("click", (e) => {
  e.target.classList.toggle("dark");
  document.body.classList.toggle("dark");
});