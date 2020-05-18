function chooseStations(stations) {
  let goodStations = [];
  let index = 0;
  for (let i = 0; i < stations.length; i++) {
    if (stations[i][1] >= 20 && (stations[i][2] === "school" || stations[i][2] === "community centre")) {
      goodStations[index] = stations[i][0];
      index++;
    }
  }
  return goodStations;
}