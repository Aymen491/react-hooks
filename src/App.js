import { useState } from 'react'
import './App.css';
import Filter from './Components/Filter';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Watch from "./Components/Watch"



function App() {

  const [movieList, setMovieList] = useState([
    {
      Id: 1,
      title: "Home Alone",
      Image: "https://i.pinimg.com/originals/f5/68/05/f56805de22f2bfb23d6c959c10c9c52b.jpg ",
      Year: "1996",
      rate: "5",
      trailer: 'https://www.youtube.com/embed/EPHLQ6z9PF0',
      description : "Home Alone is a 1990 American comedy film written and produced by John Hughes and directed by Chris Columbus. It stars Macaulay Culkin, Joe Pesci, Daniel Stern, John Heard, and Catherine O'Hara. Culkin stars as eight-year-old Kevin, who defends his home from burglars Harry and Marv (Pesci and Stern) after his family accidentally leaves him behind on their vacation."

    },
    {
      Id: 2,
      title: "John Wick 2",
      Image: "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_.jpg ",
      Year: "2019",
      rate: "4",
      trailer: 'https://www.youtube.com/embed/ChpLV9AMqm4',
      description : "John Wick (Keanu Reeves) drives to a warehouse owned by Abram Tarasov (Peter Stormare) to get his car back. Abram wants payback against John for killing his brother Viggo and nephew Iosef. John is killing all of Abram's guards before he finally gets to his car. As he drives away, a number of Abram's men attack John."
    },

    {
      Id: 3,
      title: "fast and furious 8",
      Image: "https://sergetisseron.com/wp-content/uploads/2018/03/fast-furious-8-92720-670x949.jpg ",
      Year: "2017",
      rate: "2",
      trailer: 'https://www.youtube.com/embed/uisBaTkQAEs',
      description :"Dominic Toretto and Leslie are enjoying their honeymoon in Cuba when they notice his cousin getting into trouble with Fernando for not being able to pay off his debts. Dom encourages Fernando to keep it about the cars and decides to race him for the car."


    },
    {
      Id: 4,
      title: "Fury",
      Image: "https://fr.web.img5.acsta.net/pictures/14/09/22/16/44/411457.jpg",
      Year: "2014",
      rate: "3",
      trailer: 'https://www.youtube.com/embed/SKu5lGfRBxc',
      description : "Fury is a film about a fictional tank crew during the final days of the war in Europe. Ayer was influenced by the service of veterans in his family and by reading books such as Belton Y. Cooper's Death Traps, about American armored warfare in World War II."


    },

  ])

  const [newTitle, setNewTitle] = useState("");
  const [newRate, setNewRate] = useState("");

  const handleFilter = (fTitle, fRate) => {
    setNewTitle(fTitle)
    setNewRate(fRate)
  }

  const handleAdd = (newMovie) => {
    setMovieList([...movieList, newMovie]);
  }
  return (
    <Router>
      <Route exact path='/' >
        <div className="app">
          <NavBar handleAdd={handleAdd} handleFilter={handleFilter} />
          <Filter movieList={movieList} newRate={newRate} newTitle={newTitle} />
        </div>
      </Route>
      <Route exact path="/Watch/:id" render={(props) => <Watch movieList={movieList} {...props} />} />
    </Router>
  );
}

export default App;
