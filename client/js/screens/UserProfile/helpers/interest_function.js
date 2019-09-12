let organizer = interest => {
  // let new_interest = {Personal: [], Social: [], Profesional: []};
  let new_interest = {
    Personal: [],
    Social: [],
    Professional: [],
    Industries: [],
  };
  let iLength = interest.length;

  for (let x = 0; x < iLength; x++) {
    interest[x].visible = true;
    new_interest[interest[x].type].push(interest[x]);
  }

  new_interest.Professional = new_interest.Professional.concat(
    new_interest.Industries,
  );
  delete new_interest.Industries;
  return new_interest;
};

export default organizer;
