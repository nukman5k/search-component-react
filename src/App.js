import React, { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import axios from "axios";
import SearchBox from "./components/search-box/search-box.component";

function App() {

  // fetch("https://jsonplaceholder.typicode.com/users")
  // .then(response => response.json())
  // .then(function(users){
  //   return console.log(users);
  // });

  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setMonsters(res.data))
  }, []);

  const handleSearch = (event) => {
    return (setSearchField(event.target.value));
  }

  const filteredMonsters = monsters.filter(monster => {
    return (monster.name.toLowerCase().includes(searchField.toLowerCase()))
  })

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>

      {/* <input style={{ marginBottom: "20px" }} type="search" placeholder="Search for user" value={searchField} onChange={handleSearch} /> */}
      <SearchBox placeHolder="Search for user" searchField={searchField} searchHandler={handleSearch}/>
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;


 // fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
    //   .then(users =>
    //     setMonsters(prevValue => {
    //       prevValue = [];
    //       console.log(users);
    //       return users;
    //     }
    //     )
    //   )