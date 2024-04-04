import React from "react";
import styled from "styled-components";
/* (``) these are template literals used in styled components this helps no need to use separate keywords for 
css and javascript we can follow css word formats e.g, background-colorin css but background in javascript*/
const Nav = styled.div` 
  width: 100%;
  height: 70px;
  background: linear-gradient(170deg, #1bc059, #0d47a1);
  display: flex;
  justify-content: space-between; 
  align-Items: center;
  position: relative;
`;
const Title = styled.div`
    fontSize: 30;
    color: #fff;
    font-weight: 600;
    font-family: Montserrat, sans-serif;
    text-transform: uppercase;
    margin-left: 20px;
    &:hover{color: red};
`;
const CartImg = styled.img`
height: 48px;
margin-right: 20px;
`;
const CartIconContainer = styled.div`
position: relative;
cursor: pointer;
`;
const CartCount = styled.div`
    // background-color: orange;  here we used props to make the colour of cart count 
    background-color: ${(props) => props.color};
    border-radius: 50%;
    padding: 4px 8px;
    position: absolute;
    right: 10px;
    top: -7px;
    font-size: 12px;
    visibility: ${(props) => props.show? "visible": "hidden"};
`;
// as we gave this for div element we can replace div element with Nav for navbar and Title for div of title look below

class Navbar extends React.Component{
    render(){
        console.log(this.props);
        const {cartCount} = this.props;
        return(
            <>
            {/* <div style={{width: "100%", height: 70, background: "red", display: "flex", justifyContent: "space-between"}}> */}
                {/* <div style={styles.nav}> */}
            <Nav>
                {/* <div style={styles.title}> */}
                <Title>
                    Movie-App
                </Title>
                {/* <div style={styles.cartContainer}> */}
                <CartIconContainer>
                    <CartImg alt="cart icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png" style={styles.cartIcon} />
                    {/* <span style={styles.cartCount}>3</span> */}
                    <CartCount color="yellow" show={true}>{cartCount}</CartCount>
                </CartIconContainer>
            </Nav>
            </>
        )
    }
}

export default Navbar;

const styles = {
    nav: {
        width: "100%",
        height: 70,
        background: "#4267b2",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative"   
    },
    title: {
        fontSize: 30,
        color: "#fff",
        fontWeight: 600,
        fontFamily: '"Montserrat", sans-serif',
        textTransform: "uppercase",
        marginLeft: 20
    },
    cartContainer: {
        position: "relative",
        cursor: "pointer"
    },
    cartIcon: {
        height: 40,
        marginRight: 20
    },
    cartCount: {
        background: "orange",
        borderRadius: "50%",
        padding: "4px 8px",
        position: "absolute",
        right: 10,
        top: -7,
        fontSize: 12
    }
};

/*width: 100%;
  height: 70px;
  background-color: cadetblue;
  display: flex;
  justify-content: space-between; */