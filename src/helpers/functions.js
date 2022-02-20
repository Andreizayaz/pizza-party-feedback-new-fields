export function checkIsArray(classList) {
  return Array.isArray(classList) ? classList.join(' ') : '';
}

export const getRemoteData = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data;
  }
}

export const getPartyData = async (urlGuests, urlDiets, asyncCallback) => {
  const partyList = await asyncCallback(urlGuests);
  let queryString = urlDiets;
  partyList.party.forEach(item => {
    if (item.eatsPizza) {
      queryString += `${item.name.split(' ')[0]}%20${item.name.split(' ')[1]},`
    }
  });
  queryString = queryString.slice(0, -1);
  const dietsList = await asyncCallback(queryString);
  const arr = partyList.party.map(item => {
    if (item.eatsPizza) {
      return { ...item, isVegan: dietsList.diet.find(value => value.name === item.name).isVegan }
    } return item;
  }).map(item => { return { ...item, comments: {} } });
    localStorage.setItem('partyGuests', JSON.stringify(arr));
  }

export const getClasses = ({ eatsPizza, isVegan, comments }) => {
  if (!comments) return;
  switch (true) {
    case isTrue(eatsPizza, isVegan, Object.keys(comments).length):
      return ["table__cell", "cell-with-emoji", "table__cell_vegan"];
    case isTrue(eatsPizza, Object.keys(comments).length):
      return ["table__cell", "cell-with-emoji"];
    case isTrue(eatsPizza, isVegan):
      return ["table__cell", "table__cell_vegan"];
    case !eatsPizza:
      return ["table__cell", "not-pizza-eater"];
    default:
      return ["table__cell"];
  }
}

function isTrue() {
  if (arguments.length === 0 || arguments.length === 1) {
    console.error('count arguments must be greater than 1');
    return;
  }

  for (let i = 0; i < arguments.length; i++) {
    if ((i + 1) !== arguments.length) {
      if (!(arguments[i] && arguments[i + 1])) {
        return false;
      }
    }
  }

  return true;
}
