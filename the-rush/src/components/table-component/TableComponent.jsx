import React, {useState} from 'react'

const TableComponent = ({handleSort, players}) => {

  const handleClick = () => {
    
  };
  return (
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
          <th scope="col"><div onClick={() =>  handleSort('Yds')}>Yds<i className="fa fa-fw fa-sort"></i></div></th>
          <th scope="col">Avg</th>
          <th scope="col">Yds/G</th>
          <th scope="col"><div onClick={() => handleSort('TD')}>TD<i className="fa fa-fw fa-sort"></i></div></th>
          <th scope="col"><div onClick={() => handleSort('Lng')}>Lng<i className="fa fa-fw fa-sort"></i></div></th>
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
              <tr key={idx}>
                <th scope="row" >{idx+1}</th>
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
    <nav aria-label="pagination">
      <ul className="pagination">
        <li className="page-item"><button className="page-link" onCLick={handleClick}>Previous</button></li>
        <li className="page-item"><button className="page-link" onClick={handleClick}>Next</button></li>
      </ul>
    </nav>
  </div>
  )
}

export default TableComponent
