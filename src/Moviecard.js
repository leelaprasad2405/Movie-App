//import React from "react";     while changing React to component then in class also React.Component changes Component
import {Component} from "react";
import './index.css'
class MovieCard extends Component{
//     constructor(){
//         super();
//         this.state = {
//             title: "The Avengers",
//             plot: "super power movie.",
//             price: 199,
//             rating: 8.9,
//             stars: 0,
//             fav: false,
//             isInCart: false
// ,
//         }
//         // this below can be avoided by writing arrow function as arrow function binds current function directly 
//         //this.addStars = this.addStars.bind(this);
//     }

    // addStars=()  => {
    //     if(this.state.stars >=5){
    //         return;
    //     }
    //     // form 1
    //     /* in this form1 we can see many setstates are given but it takes only the last one that is known as BATCHING (takes the last call)

    //      this.setState({
    //          stars: this.state.stars +0.5
    //      }, () => console.log("stars inside callback: ", this.state.stars));
    //      this.setState({
    //         stars: this.state.stars +0.5
    //     }, () => console.log("stars inside callback: ", this.state.stars));*/
    //     // this.setState({
    //     //     stars: this.state.stars +1
    //     // }, () => console.log("stars inside callback: ", this.state.stars));
    //     /* so from above and below lines while observing in the console we can clearly tell that current value is caught in callback function only
    //     so setstate is asynchronous nature*/
    //      console.log("stars: ", this.state.stars);

    //     // //form 2
    //     /* but in second form not like first form as it calculates from previous at a click all the functions will act
    //      and star value changes from zero to 1.5 as we had given three functions   (here it takes all the calls)

    //     this.setState((prevState) => {
    //         return {
    //             stars: prevState.stars+0.5
    //         }
    //     });
    //     this.setState((prevState) => {
    //         return {
    //             stars: prevState.stars+0.5
    //         }
    //     });*/
    //     this.setState((prevState) => {
    //         return {
    //             stars: prevState.stars+0.5
    //         }
    //     });



        


    //     //  this.state.stars += 0.5;
    //     //  console.log("this.state.stars: ", this.state.stars);
    // }

    // decStars=()  => {
    //     // form 1
    //     if(this.state.stars <= 0){
    //         return;
    //     }
    //       this.setState({
    //           stars: this.state.stars -0.5
    //       });
    //     }
    
    // handleFav = () => {
    //     // this.setState({
    //     //     fav: !this.state.fav
    //     // })
    //     this.props.handleFavoriteChange({
            
    //     })
    // }
    // handleAddToCart = () => {
    //     // this.setState({
    //     //     isInCart: !this.state.isInCart
    //     // })
    //     this.props.cartChange({

    //     })
        
    // }

    render(){
        console.log("rendered the component");

        const {movies,addStars,decStars,toggleFav,toggleCart} = this.props;
        const {title,plot,price,rating,stars,fav,isInCart} = this.props.movies;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src="https://rukminim1.flixcart.com/image/850/1000/jfea93k0/poster/j/3/u/medium-the-avenges-initiative-3-moives-posters-mp0098-original-imaf3mhpcyhwhtkt.jpeg?q=90"/>

                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                onClick={() =>{decStars(movies)}} />
                                <img alt="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars"/>
                                <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/748/748113.png" 
                                  onClick={() =>{addStars(movies)}}/>
                                <span className="starCount">{stars}</span>
                            </div>
                            {/*this.state.fav? <button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button>:
                             <button className="favourite-btn" onClick={this.handleFav}>favourite</button>*/}

                             <button className={fav?"unfavourite-btn":"favourite-btn"}
                             onClick={() => {toggleFav(movies)}}>{fav?"unfavourite":"favourite"}</button>
                            
                            {/* <button className="cart-btn">Add to cart</button> */}
                            <button className={isInCart?"unfavourite-btn":"cart-btn"}
                            onClick={() => {toggleCart(movies)}}>{isInCart?"Remove from cart":"Add to cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;