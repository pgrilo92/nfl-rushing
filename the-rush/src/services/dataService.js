import data from '../rushing';

const sortBy = (field, sortDirection, players) => {
  if (field ==='Yds') {
    return players.sort((a, b) => (sortDirection['Yds']*(a['Yds'] - b['Yds'])));
  } else if (field === 'Lng') {
    return players.sort((a, b) => (sortDirection['Lng']*(a['Lng'] - b['Lng'])));
  } else if (field === 'TD') {
    return players.sort((a, b) => (sortDirection['TD']*(a['TD'] - b['TD'])));
  } else {
    return players
  }
}

const filterByName = (name) => {

  let result = [];
  for(let i=0; i<data.length; i++) {
    if (data[i].Player.toLowerCase().indexOf(name.toLowerCase()) >= 0) {
      result.push(data[i]);
    }
  }
  return result;
}

const downloadCSV = (players)=> {
  let csv = 'the Rush\n';  
  players.forEach((row) => {  
    csv += row.join(',');  
    csv += "\n";  
  });
  const contentType = "data:text/csv;charset=utf-8," + encodeURI(csv)

};

export {
  sortBy,
  filterByName,
  downloadCSV
};