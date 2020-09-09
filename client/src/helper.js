const destinations = require("./Destinations");
console.log("Original number of destinations: ", destinations.length);

//create the function (if it's not in the same file that you're calling it from, you're going to need to export the function out and then import it into the file you'll be calling it from)
const masterFunction = (destinations, preferences) => {
  let userOutput = [];
  preferences.checkboxes.forEach((feature) => {
    // forEach is iterating through the array of checkboxes on your state object
    featureName = feature.name; // assigns the name of each feature/preference
    if (feature.checked === true) {
      destinations.forEach((destinationItem) => {
        // iterates through array of destination objects
        if (destinationItem[featureName] === true) {
          destinationItem.rank++;
          userOutput.push(destinationItem);
        }
      });
    }
  });
  let finalDestinations = [...new Set(userOutput)]; // this removes duplicates
  console.log("Number of destinations in userOutput: ", userOutput.length);
  console.log(
    "Number of destinations in finalDestinations: ",
    finalDestinations.length
  );
  finalDestinations.sort((a, b) => b.rank - a.rank); // sort by descending rank order
  console.log(finalDestinations);
  return finalDestinations; // returns the final array of selected and sorted destinations out of the function
};
// somewhere in your app, you need to call the function (make sure you've required it in)
masterFunction(destinations, fakeState); // only here while we test the function is working - this is basically how you're calling the function. You need to make sure your irst argument you're passing in is the array of destinations objects and that the second argument you're passing in is the app's state.
