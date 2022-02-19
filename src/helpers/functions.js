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
        return {...item,isVegan:dietsList.diet.find(value=>value.name===item.name).isVegan}
      } return item;
    });
    localStorage.setItem('partyGuests', JSON.stringify(arr));
  }