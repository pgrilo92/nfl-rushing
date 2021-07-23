import data from './rushing';
import './App.css';
import React,{useState} from 'react';
import { downloadCSV, filterByName, sortBy } from './services/dataService';
import { CSVLink } from 'react-csv';
import TableComponent from './components/table-component/TableComponent'

function App() {
  const [players, setPlayers] = useState(data);
  const [sortDirection, setSortDirection] = useState({'Yds':-1, 'Lng': -1, 'TD': -1});
  const [filterName, setFilterName] = useState('');
  const [contentType, setContentType] = useState('');
  const [sortArrow, setSortArrow] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await filterByName(filterName);
    setPlayers(result);
  };

  const handleSort = async (field) => {
    if (sortDirection[field] === -1) {
      setSortDirection(prevState => {
        return { ...prevState, [field]: 1}
      });
    } else if (sortDirection[field] === 1) {
      setSortDirection(prevState => {
        return { ...prevState, [field]: -1}
      });
    }
    const result = await sortBy(field, sortDirection, players);
    setPlayers(result);
  };

  const handleClick = ()=> {
    let file = downloadCSV(players);
  };

  return (
    <div className="App">
      <h1>the Rush</h1>
      <div className="container">
        <form className="form-inline align-items-center" onSubmit={handleSubmit}>
          <div className="col-auto">
            <div className="form-group mb-2">
              <label >Filter by Name</label>
              <input className="form-control" type="text" placeholder="Enter Player Name" value={filterName} onChange={e=>setFilterName(e.target.value)}/>
            </div>
          </div>
          <div className="col-auto">
              <input type="submit" className="btn btn-primary" value="Filter" />
          </div>
        </form>
        <CSVLink data={players} filename={"rushing.csv"} >Download Table<i className="fa fa-download" aria-hidden="true"></i></CSVLink>
        <button className="btn btn-primary" onClick={handleClick}>Download CSV</button>
        <TableComponent  handleSort={handleSort} players={players}/>
      </div>
    </div>
  );
};

export default App;
