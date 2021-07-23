import './App.css';
import React,{useState, useEffect} from 'react';
import { downloadCSV, filterByName, sortBy, getAll } from './services/dataService';
import { CSVLink } from 'react-csv';
import TableComponent from './components/table-component/TableComponent';

function App() {
  const [players, setPlayers] = useState([]);
  const [sortDirection, setSortDirection] = useState({'Yds':-1, 'Lng': -1, 'TD': -1});
  const [filterName, setFilterName] = useState('');
  const [contentType, setContentType] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAll();
      setPlayers(result);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await filterByName(filterName, players);
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

  return (
    <div className="App">
      <h1>the Rush</h1>
      <div className="container">
        
        <form className="form-inline align-items-center" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-10">
                <input className="form-control" type="text" placeholder="Enter Player Name" value={filterName} onChange={e=>setFilterName(e.target.value)}/>
            </div>
            <div className="col-2">
              <input type="submit" className="btn btn-primary" value="Filter" />
            </div>
          </div>
        </form>
        <CSVLink data={players} filename={"rushing.csv"} >Download Table<i className="fa fa-download" aria-hidden="true"></i></CSVLink>
        <TableComponent  handleSort={handleSort} players={players}/>
      </div>
    </div>
  );
};

export default App;
