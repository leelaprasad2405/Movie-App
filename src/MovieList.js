//import React from "react";     while changing React to component then in class also React.Component changes Component
import {Component} from "react";
import MovieCard from "./Moviecard"
//import {movies} from "./moviesData"

class MovieList extends Component{
//     constructor(){
//         super();
//         //creating state object
//         this.state = {
//           movies : movies,
//           cartCount : 0
//             // movies : [
//             //     {
//             //       id: 1,
//             //         title: 'The Avengers',                  
//             //         plot:
//             //           "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
//             //         poster:
//             //           'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
//             //         rating: '8.0',            
//             //         price: 99,            
//             //         stars: 0,
//             //         fav: false,
//             //         isInCart: false                  
//             //       },
//             //       {
//             //         id: 2,
//             //         title: 'The Dark Knight',                  
//             //         plot:
//             //           'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
//             //         poster:
//             //           'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
//             //         rating: '9.0',            
//             //         price: 199,            
//             //         stars: 0,            
//             //         fav: false,
//             //         isInCart: false                  
//             //       },
//             //       {
//             //         id: 3,
//             //         title: 'Iron Man',                 
//             //         plot:
//             //           'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',                  
//             //         poster:
//             //           'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
//             //         rating: '7.9',            
//             //         price: 139,            
//             //         stars: 0,            
//             //         fav: false,
//             //         isInCart: false                  
//             //       }

//             // ]
//         }

// //         this.state = {
// //             title: "The Avengers",
// //             plot: "super power movie.",
// //             price: 199,
// //             rating: 8.9,
// //             stars: 0,
// //             fav: false,
// //             isInCart: false
// // ,
// //         }
// //         // this below can be avoided by writing arrow function as arrow function binds current function directly 
// //         //this.addStars = this.addStars.bind(this);
//     }

//     // handleFavoriteChange = () => {
//     //     this.setState((prevState) => ({
//     //         fav: !prevState.fav,
//     //     }));
//     // };

//     cartChange = () => {
//         this.setState((prevState) => ({
//             isInCart: !prevState.isInCart,
//         }));
//     };

//     addStars=()  => {
//       if(this.state.stars >=5){
//           return;
//       }
//       // form 1
//       /* in this form1 we can see many setstates are given but it takes only the last one that is known as BATCHING (takes the last call)

//        this.setState({
//            stars: this.state.stars +0.5
//        }, () => console.log("stars inside callback: ", this.state.stars));
//        this.setState({
//           stars: this.state.stars +0.5
//       }, () => console.log("stars inside callback: ", this.state.stars));*/
//       // this.setState({
//       //     stars: this.state.stars +1
//       // }, () => console.log("stars inside callback: ", this.state.stars));
//       /* so from above and below lines while observing in the console we can clearly tell that current value is caught in callback function only
//       so setstate is asynchronous nature*/
//        console.log("stars: ", this.state.stars);

//       // //form 2
//       /* but in second form not like first form as it calculates from previous at a click all the functions will act
//        and star value changes from zero to 1.5 as we had given three functions   (here it takes all the calls)

//       this.setState((prevState) => {
//           return {
//               stars: prevState.stars+0.5
//           }
//       });
//       this.setState((prevState) => {
//           return {
//               stars: prevState.stars+0.5
//           }
//       });*/
//       this.setState((prevState) => {
//           return {
//               stars: prevState.stars+0.5
//           }
//       });



      


//       //  this.state.stars += 0.5;
//       //  console.log("this.state.stars: ", this.state.stars);
//   }

//       decStars=()  => {
//         // form 1
//         if(this.state.stars <= 0){
//             return;
//         }
//           this.setState({
//               stars: this.state.stars -0.5
//           });
//       }

      


//   handleIncStar = (movie) =>{
//     const {movies} = this.state;

//     const mid = movies.indexOf(movie);
//     if(movies[mid].stars >= 5){
//       return;
//     }
  
//     console.log(mid);
//     movies[mid].stars += 0.5; 
//     console.log(movies[mid].stars)

//     this.setState({
//       movies: movies

//     })

//   }

//   handleDecStars = (movie) => {
//     const {movies} = this.state;
//     const mid = movies.indexOf(movie);
//     if(movies[mid].stars <= 0) {
//       return;
//     }
//     movies[mid].stars -= 0.5;

//     this.setState({
//       movies: movies
//     })
//   }

//   handleToggleFav = (movie) => {
//     const {movies} = this.state;
//     const mid = movies.indexOf(movie);
//     movies[mid].fav = !movies[mid].fav;

//     this.setState({
//       movies
//     })
//   }

//   handleToggleCart = (movie) => {
//     const {movies} = this.state;
//     const mid = movies.indexOf(movie);
//     movies[mid].isInCart = !movies[mid].isInCart;

//     this.setState({
//       movies
//     })
//   }


    render(){
        //const {title,plot,price,rating,stars,fav,isInCart} = this.state;
        const {movies, addStars, decStars,toggleFav, toggleCart} = this.props;
        console.log(this.props);

        return (
            <>
            {/* <MovieCard title= {title}
                        plot= {plot}
                        price= {price}
                        rating= {rating}
                        stars= {stars}
                        fav= {fav}
                        isInCart= {isInCart}
                        handleFavoriteChange= {this.handleFavoriteChange}
                        cartChange= {this.cartChange} /> */}

                {/* <MovieCard movies = {this.state} /> */}

                {movies.map((movie) => <MovieCard movies= {movie} addStars= {addStars}
                                                                  decStars= {decStars}
                                                                  toggleFav= {toggleFav}
                                                                  toggleCart= {toggleCart}
                                                                  key= {movie.id} />)}

            </>
        )
    }
}

export default MovieList;