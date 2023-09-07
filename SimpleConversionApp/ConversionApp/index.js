
const meter = 3.281;
const liter = 0.264;
const kilogram = 2.204;

const meters = document.getElementById("meters");
const gallons = document.getElementById("gallons");
const pounds = document.getElementById("pounds");
const convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", () => {
  const value = document.getElementById("inpbox").value;
  console.log(":" + value);
  const calcFeet = (value * meter).toFixed(3);
  const calcMeters = (value / meter).toFixed(3);
  const calcGallons = (value * liter).toFixed(3);
  const calcLiters = (value / liter).toFixed(3);
  const calcPounds = (value * kilogram).toFixed(3);
  const calcKilos = (value / kilogram).toFixed(3);
  
  meters.innerHTML = `${value} meters = ${calcFeet} feet 
  | ${value} feet = ${calcMeters} meters`;
  console.log("value" + value);

  gallons.innerHTML = `${value} liters = ${calcGallons} gallons 
  | ${value} gallons = ${calcLiters} liters`;

  pounds.innerHTML = `${value} kilos = ${calcPounds} pounds 
  | ${value} pounds = ${calcKilos} kilos`;
});
