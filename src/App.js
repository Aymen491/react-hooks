import { useState } from 'react'
import './App.css';
import Filter from './Components/Filter';
import NavBar from './Components/NavBar';


function App() {

  const [movieList, setMovieList] = useState([
    {
      Id: 1,
      title: "Home Alone",
      Image: "https://i.pinimg.com/originals/f5/68/05/f56805de22f2bfb23d6c959c10c9c52b.jpg ",
      Year: "1996",
      rate: "5",


    },
    {
      Id: 2,
      title: "John Wick 2",
      Image: "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_.jpg ",
      Year: "2019",
      rate: "4"

    },
    {
      Id: 3,
      title: "fast and furious 8",
      Image: "https://sergetisseron.com/wp-content/uploads/2018/03/fast-furious-8-92720-670x949.jpg ",
      Year: "2017",
      rate: "2"

    },
    {
      Id: 4,
      title: "Fury",
      Image: "https://fr.web.img5.acsta.net/pictures/14/09/22/16/44/411457.jpg",
      Year: "2014",
      rate: "3"

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
    <div className="app">
      <NavBar handleAdd={handleAdd} handleFilter={handleFilter} />
      <Filter movieList={movieList} newRate={newRate} newTitle={newTitle} />




    </div>
  );
}

export default App;
