
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(goodStations) {
  const rightStations = []
  for (const station of goodStations) {

    const capacity = station[1];
    if (capacity >= 20) {

      const place = station[2];
      if (place === "school" || place === "community centre") {
        rightStations.push(station[0]);
      }
    }
  }

  return rightStations;
}

let chosenStations = chooseStations(stations);

console.log(chosenStations);


