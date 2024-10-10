import logo from './logo.svg';
import {useState} from "react";
import ReactPaginate from "react-paginate";

import './App.css';
import JsonData from "./MOCK_DATA.json"
function App() {
  const [users,setUsers]=useState(JsonData.slice(0,50));
  const[pageNumber,setPageNumber]=useState(0);
  const usersPerPage=10;

  const pagesVisited=pageNumber*usersPerPage;
 //40->50
  const displayUsers= users.slice(pagesVisited,pagesVisited+usersPerPage).map((user)=>
     {
      return(
        <div className="user">
          <h3>{user.firstName}</h3>
          <h3>{user.lastName}</h3>
          <h3>{user.email}</h3>
        </div>
      )
     })
     const pageCount=Math.ceil(users.length/usersPerPage);
     const changePage=({selected})=>
     {
      setPageNumber(selected);

     }
  return (
    <div className="App">
      {displayUsers}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisables"}
        activeClassName={"paginationActive"}
        onPageChange={changePage}
      ></ReactPaginate>
    </div>
  );
}

export default App;
