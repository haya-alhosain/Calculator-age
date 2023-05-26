let result = document.getElementById("result");
let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

const calculatorAge = () => {
   let birthday = new Date(userInput.value);
   let d1 = birthday.getDay();
   let m1 = birthday.getMonth();
   let y1 = birthday.getFullYear();

   let today = new Date();
   let d2 = today.getDay();
   let m2 = today.getMonth() + 1;
   let y2 = today.getFullYear();

   let y3, m3, d3;
   y3 = y2 - y1
   if (m2 >= m1) {
      m3 = m2 - m1;
   } else {
      y3--;
      m3 = 12 + m2 - m1
   }
   if (d2 >= d1) {
      d3 = d2 - d1;
   } else {
      m3--;
      d3 = getDaysInMonth(y1, m1) + d2 - d1;
   }
   if (m3 < 0) {
      m3 = 11;
      y3--;
   }
   result.innerHTML = `You Are ${y3} Years and ${m3} Months and ${d3} Days`
}
const getDaysInMonth = (year, month) => {
   return new Date(year, month, 0).getDate();
}