const BASE_URL = '/api/players/'

function getAll() {
  return fetch(BASE_URL, {
      method: 'GET'
  })
  .then(res => {
      if (res.ok) {
          return res.json();
      };
  })
  .catch(error=>{
    console.log('Error', error);
  });
};

const sortBy = (field, sortDirection, players) => {
  if (field ==='Yds') {
    return players.sort((a, b) => (sortDirection['Yds']*(a['Yds'] - b['Yds'])));
  } else if (field === 'Lng') {
    return players.sort((a, b) => (sortDirection['Lng']*(a['Lng'] - b['Lng'])));
  } else if (field === 'TD') {
    return players.sort((a, b) => (sortDirection['TD']*(a['TD'] - b['TD'])));
  } else {
    return players;
  };
};

const filterByName = (filterName, players) => {
  let result = [];
  for(let i=0; i<players.length; i++) {
    if (players[i].Player.toLowerCase().indexOf(filterName.toLowerCase()) >= 0) {
      result.push(players[i]);
    };
  };
  return result;
};

export {
  getAll,
  sortBy,
  filterByName
};