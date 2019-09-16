export let organizer = (interest, selectedInterest) => {
  let new_interest = {
    Personal: [],
    Social: [],
    Professional: [],
    Industries: [],
  };

  selectedID = selectedInterest.map(x => x.id).join(',');
  let iLength = interest.length;

  for (let x = 0; x < iLength; x++) {
    if (selectedID.indexOf(interest[x].id) !== -1) {
      interest[x].visible = true;
    } else {
      interest[x].visible = false;
    }
    try {
      new_interest[interest[x].type].push(interest[x]);
    } catch {}
  }

  new_interest.Professional = new_interest.Professional.concat(
    new_interest.Industries,
  );
  delete new_interest.Industries;
  return new_interest;
};

export let saveInterest = selectedInterest => {
  let keys = Object.keys(selectedInterest);
  let updatedInterest = [];

  selectedInterest.Personal.map(interest => {
    if (interest.visible) {
      updatedInterest.push(interest.id);
    }
  });
  selectedInterest.Professional.map(interest => {
    if (interest.visible) {
      updatedInterest.push(interest.id);
    }
  });
  selectedInterest.Social.map(interest => {
    if (interest.visible) {
      updatedInterest.push(interest.id);
    }
  });
  return updatedInterest;
};

export let saveWays = selectedFavorites => {
  let keys = Object.keys(selectedFavorites);
  let newFaves = keys.filter(key => selectedFavorites[key].visible);
  return newFaves;
};
