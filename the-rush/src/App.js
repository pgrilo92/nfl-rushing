import data from './rushing';
import './App.css';
import React,{useState} from 'react';
import { downloadCSV, filterByName, sortBy } from './services/dataService';
import { CSVLink } from "react-csv";

function App() {
  const [players, setPlayers] = useState(data);
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState(-1);
  const [filterName, setFilterName] = useState('');
  const [contentType, setContentType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await filterByName(filterName);
    setPlayers(result)
  };

  const handleSort = async (field) => {
    if (sortField === field && sortDirection === -1) {
      setSortDirection(1);
    } else if (sortDirection === 1) {
      setSortDirection(-1);
    }
    let result = await sortBy(field, sortDirection, players);
    setPlayers(result);
    setSortField(field);
  };

  const handleClick = ()=> {
    let file = downloadCSV(players);
    
  };

  return (
    <div className="App">
      <h1>the Rush</h1>
      <form className="form-row" onSubmit={handleSubmit}>
        <div className="form-group col-10 my-1">
          <label >Filter by Name</label>
          <input className="form-control" type="text" placeholder="Enter Player Name" value={filterName} onChange={e=>setFilterName(e.target.value)}/>
        </div>
        <div className="col-auto my-1">
          <input type="submit" className="btn btn-primary" value="Filter" />
        </div>
      </form>
      <CSVLink data={players} filename={"rushing.csv"} className="button">Download Table</CSVLink>
      <button onClick={handleClick}>Download CSV</button>
      <div className="players-container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Player</th>
              <th scope="col">Team</th>
              <th scope="col">Pos</th>
              <th scope="col">Att</th>
              <th scope="col">Att/G</th>
              <th scope="col"><button onClick={() =>  handleSort('Yds')}>Yds</button></th>
              <th scope="col">Avg</th>
              <th scope="col">Yds/G</th>
              <th scope="col"><button onClick={() => handleSort('TD')}>TD</button></th>
              <th scope="col"><button onClick={() => handleSort('Lng')}>Lng</button></th>
              <th scope="col">1st</th>
              <th scope="col">1st%</th>
              <th scope="col">20+</th>
              <th scope="col">40+</th>
              <th scope="col">FUM</th>
            </tr>
          </thead>
          <tbody>
            {
              players.map((player,idx)=>{
                return (
                  <tr>
                    <th scope="row">{idx+1}</th>
                    <td>{player['Player']}</td>
                    <td>{player['Team']}</td>
                    <td>{player['Pos']}</td>
                    <td>{player['Att']}</td>
                    <td>{player['Att/G']}</td>
                    <td>{player['Yds']}</td>
                    <td>{player['Avg']}</td>
                    <td>{player['Yds/G']}</td>
                    <td>{player['TD']}</td>
                    <td>{player['Lng']}</td>
                    <td>{player['1st']}</td>
                    <td>{player['1st%']}</td>
                    <td>{player['20+']}</td>
                    <td>{player['40+']}</td>
                    <td>{player['FUM']}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
