
import React from "react"
import MovieList from "./MovieList";
import Navbar from "./Navbar";
// import HeadingOne from "./HeadingOne";
// import HeadingTwo from "./HeadingTwo";
import {movies} from "./moviesData"
import "./index.css"

class App extends React.Component {      // here we have changed APP function to class as we are writing constructor inside, where only class can have constructor
  
  constructor(){
    super();
    //creating state object
    this.state = {
      movies : movies,
      cartCount : 0
        
    }
}


cartChange = () => {
    this.setState((prevState) => ({
        isInCart: !prevState.isInCart,
    }));
};

addStars=()  => {
  if(this.state.stars >=5){
      return;
  }
  
   console.log("stars: ", this.state.stars);

  
  this.setState((prevState) => {
      return {
          stars: prevState.stars+0.5
      }
  });



  
}

  decStars=()  => {
    // form 1
    if(this.state.stars <= 0){
        return;
    }
      this.setState({
          stars: this.state.stars -0.5
      });
  }

  


handleIncStar = (movie) =>{
const {movies} = this.state;

const mid = movies.indexOf(movie);
if(movies[mid].stars >= 5){
  return;
}

console.log(mid);
movies[mid].stars += 0.5; 
console.log(movies[mid].stars)

this.setState({
  movies: movies

})

}

handleDecStars = (movie) => {
const {movies} = this.state;
const mid = movies.indexOf(movie);
if(movies[mid].stars <= 0) {
  return;
}
movies[mid].stars -= 0.5;

this.setState({
  movies: movies
})
}

handleToggleFav = (movie) => {
const {movies} = this.state;
const mid = movies.indexOf(movie);
movies[mid].fav = !movies[mid].fav;

this.setState({
  movies
})
}

handleToggleCart = (movie) => {
  // below we used const for variable but cart Count is changing so lets change it to let
let {movies, cartCount} = this.state;
const mid = movies.indexOf(movie);
movies[mid].isInCart = !movies[mid].isInCart;

if(movies[mid].isInCart){
  cartCount += 1
}
else{
  cartCount -= 1
}

this.setState({
  movies,
  cartCount
})
}


  render(){
    const {movies, cartCount} = this.state;

    return (
      <>
      <Navbar cartCount = {cartCount} />
      <MovieList movies = {movies}
                 addStars = {this.handleIncStar} 
                 decStars = {this.handleDecStars}
                 toggleFav = {this.handleToggleFav}
                 toggleCart = {this.handleToggleCart} />
  
      {/* <HeadingOne />
      <HeadingTwo /> */}
      </>
    );
  }
  
  // return (
  //   <>
  //   <Navbar />
  //   <MovieList />

  //   {/* <HeadingOne />
  //   <HeadingTwo /> */}
  //   </>
  // );
}

// Student.defaultProps= {
//   stuname:"Student",
//   marks:"N.A"
// }

export default App;
