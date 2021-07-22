import data from '../rushing';

const sortBy = (field, sortDirection, players) => {
  if (field ==='Yds') {
    return players.sort((a, b) => (sortDirection*(a['Yds'] - b['Yds'])));
  } else if (field === 'Lng') {
    return players.sort((a, b) => (sortDirection*(a['Lng'] - b['Lng'])));
  } else if (field === 'TD') {
    return players.sort((a, b) => (sortDirection*(a['TD'] - b['TD'])));
  } else {
    return players
  }
}

const filterByName = (name) => {


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