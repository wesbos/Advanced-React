import React, { Component } from 'react';
import styled from 'styled-components';


const Top = styled.div`
  text-align: center;
  background: ${props => props.theme.offWhite};
  display: flex;
  justify-content: space-between;
  min-height: 90vh;

  /* .right {
    align-items: right;
  } */
  
  ul {
    padding: 0;
    list-style: none;
  }
  .img {
    background-image: url('static/living.jpg') ;
    background-size: cover;
    opacity: 70%;
    /* flex-grow: 0.32; */
    /* max-width: 400px;  */
    width: 32%;
  }
  .info {
    width: 68%;
    margin: auto auto;
  }
  .boxes{ 
    display: flex;
  }
  .box{
    flex-grow: 1;
  }
`; 

const Middle = styled.div`
  text-align: center;
  background: ${props => props.theme.yellow};
  display: flex;
  min-height: 90vh;
  .img {
    background-image: url('static/basket.jpg') ;
    background-size: cover;
    opacity: 70%;
    /* flex-grow: 0.32; */
    /* max-width: 400px;  */
    width: 32%;
  }
  .info {
    /* flex-grow: 0.68; */
    width: 68%;
    margin: auto auto;
  }
`; 

const Bottom = styled.div`
  text-align: center;
  background: ${props => props.theme.offWhite};
  min-height: 90vh;
  display: flex;
  .img {
    background-image: url('static/fruit.jpg') ;
    background-size: cover;
    opacity: 70%;
    /* flex-grow: 0.32; */
    /* max-width: 400px;  */
    width: 32%;
  }
  .info {
    width: 68%;
    margin: auto auto;
  }
`; 

class Landing extends Component {
  render() {
    return (
      <>
      <Top>
        <div className="info">
          <div className="title">
            <h1>
              Stock up and stay healthy
            </h1>
          </div>
          <div className="sub">
            <h2>introducting our premium boxes:</h2>
          </div>
          <div className="boxes">
            <div className="box">
              <h3>care</h3>
              <ul>
                <li>4 x loo roll</li>
                <li>10 x fruit & veg</li>
                <li>2 x handwash</li>
                <li>1 x multivitamin box</li>
              </ul>
            </div>
            <div className="box">
              <h3>survive</h3>
              <ul>
                <li>12 x loo roll</li>
                <li>10 x fruit & veg</li>
                <li>2 x handwash</li>
                <li>2 x multivitamin box</li>
              </ul>
            </div>
            <div className="box">
              <h3>helper</h3>
              <ul>
                <li>4 x loo roll</li>
                <li>1 x fruit & veg</li>
                <li>4 x handwash</li>
                <li>1 x multivitamin box</li>
              </ul>
            </div>
          </div>
          <div className="count">
            over 104 boxes delivered so far!
          </div>

        </div>
        <div className="img">
        </div>      
      </Top>
      <Middle>
        <div className="img">
        </div>
        <div className="info">
          <h3>harry & marcus</h3>
          <div className="avatars">
          </div>
          <p>Hi there <br/>
           We’re Harry and Marcus.
           We live in North London and are building a carbon calculator
           to track your daily carbob output. But like everyone, 
           this coronavirus outbreak has thrown our plans to the wind.
           So now we are delivering the stuff you need - food, vitamins,
           loo roll (of course) so that you can keep calm, carry on, and help your
           loved ones stay healthy in these weird and uncertain times.</p>
        <p className="right"><em>Stay healthy and think of your neighbour</em></p>
        <p className="right">Harry & Marcus <em>*elbow tap*</em></p>
        </div>
      </Middle>
      <Bottom>
        <div className="info">
          <h2>
            how we're doing it:
          </h2>
          <ul>
            <li>
            we have a robust network of wholesale suppliers through our partners, <strong>Sands Catering</strong>
            </li>
            <li>
            our <strong>dream team</strong> of couriers cycle straight to your front door within days
            </li>
            <li>
            <strong>contactless delivery</strong> to your doorstep, no germs
            </li>
          </ul>
          <h3> 
            in partnership with:
          </h3>
        </div>
        <div className="img">

        </div>
      </Bottom>
      </>
    );
  }
}

export default Landing;