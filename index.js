class FreeLancer {
  constructor(name, hourlyRate, occupation) {
    this.name = name;
    this.hourlyRate = hourlyRate;
    this.occupation = occupation;
  }
}

const freelancers = [
  new FreeLancer("Ethan Toups", 25, "Programmer"),
  new FreeLancer("Knox Wong", 45, "Programmer"),
  new FreeLancer("Chloe Zwan", 65, "Teacher"),
  new FreeLancer("Adriana Koch", 80, "Student"),
  new FreeLancer("Andy Depradine", 100, "Programmer"),
];

let currentDisplay = [freelancers[0], freelancers[1], freelancers[2]];

// Logic for calculating the average cost
function averagePrice() {
  let total = freelancers.reduce(
    (total, freelancer) => total + freelancer.hourlyRate,
    1
  );

  return total / freelancers.length;
}

// A loop to shift names with a 5 second interval
function loop() {
  updateNames();
  setTimeout(loop, 5000);
}

// Updates the average rate to hire someone
function updateAverage() {
  let average = averagePrice();
  const averageElement = document.querySelector("#averageText");

  averageElement.textContent = `The average starting price is $${average}/hr`;
}

// Transition the freelancers based on who isn't displayed already.
function updateNames() {
  const possibleFreelancers = freelancers.filter((freelancer) => {
    return !currentDisplay.includes(freelancer);
  });

  currentDisplay.shift();
  currentDisplay.push(possibleFreelancers[0]);

  render();
}

// Renders the current display to the table
function render() {
  currentDisplay.forEach((freelancer, index) => {
    const name = document.querySelector("#name" + (index + 1));
    const hourly = document.querySelector("#hourly" + (index + 1));
    const occupation = document.querySelector("#occupation" + (index + 1));

    name.textContent = freelancer.name;
    hourly.textContent = "$" + freelancer.hourlyRate + "/hr";
    occupation.textContent = freelancer.occupation;
  });
}

updateAverage();
loop();
