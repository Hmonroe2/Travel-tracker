class Repository {
  constructor(data) {
    this.data = data;
  }
  findUser(id, property) {
    return this.data.filter((user) => user[property] === id);
  }
  findTravelerDestinations(travelersTrips) {
    const tripDestinationIDs = travelersTrips.map((trip) => trip.destinationID);

    return this.data.reduce((acc, destination) => {
      if (tripDestinationIDs.includes(destination.id)) {
        acc.push(destination);
      }
      return acc;
    }, []);
  }
  findAllDestinations(repo){
    return repo.data
    .map(dest =>dest.destination)
    .sort()
  }
  findDestinationIDByName(selection, repo){
    repo.data. map()
  }
}
export default Repository;
