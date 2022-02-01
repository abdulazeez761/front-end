import React , {useState , useEffect} from "react";
import Data from "./data.json";
import "./Category.css";
import actimg1 from "../asserts/images/Action/battletankv2.png";
import actimg2 from "../asserts/images/Action/carnivalducks.png";
import actimg3 from "../asserts/images/Action/combattank.png";
import actimg4 from "../asserts/images/Action/darkshooter.png";
import actimg5 from "../asserts/images/Action/dollargrabber.png";
import actimg6 from "../asserts/images/Action/gulffighter.png";
import actimg7 from "../asserts/images/Action/homealone.png";
import actimg8 from "../asserts/images/Action/monsterhit.png";

function Category() {
    const [active , setActive] =useState(false)
  return (
    <div className="category">
        {/* <div className="head">
      <div className="cat-header">
        <p>Action Game</p>
        <span className="fiter-categories">Filter</span>
        <div className="dropdown">
          <p>Educational Game</p>
          <p>Arcade Game</p>
          <p>Puzzle Game</p>
          <p>Sports and Racing</p>
        </div>
      </div>
      </div> */}
        <p className="active-category">here it's gonna be = to waht ust the user choosed</p>
      <div className="dropdown">
            <div className="dropdown-btn" onClick={()=>{
                setActive(!active)
            }}> filter</div>
            {active &&(
            <div className="dropdown-content">
                                 <div className="dropdown-item">
                               Educational Game
                              </div>
                            <div className="dropdown-item">
                                 Arcade Game
                            </div>
                         <div className="dropdown-item">
                             Puzzle Game
                         </div>
                        <div className="dropdown-item">
                         Sports and Racing
                    </div>
                </div>
            )}
        
      </div>
      <div className="cards">
        {/* {Data.map(contents => {
              return(
                  <div key={contents.id} className='inner-content'>
                      <img src={contents.image} alt="" />
                      <h1>{contents.title}</h1>
                  </div>
              )
          })} */}
          <div className="card-content">
              <div className="card-img">
                  <img src={actimg1} alt="" />
              </div>
              <div className="card-inner-title">
                  <p>Game Title</p>
              </div>
          </div>

          <div className="card-content">
              <div className="card-img">
                  <img src={actimg2} alt="" />
              </div>
              <div className="card-inner-title">
                  <p>Game Title</p>
              </div>
          </div>

          <div className="card-content">
              <div className="card-img">
                  <img src={actimg3} alt="" />
              </div>
              <div className="card-inner-title">
                  <p>Game Title</p>
              </div>
          </div>

          <div className="card-content">
              <div className="card-img">
                  <img src={actimg4} alt="" />
              </div>
              <div className="card-inner-title">
                  <p>Game Title</p>
              </div>
          </div>

          <div className="card-content">
              <div className="card-img">
                  <img src={actimg5} alt="" />
              </div>
              <div className="card-inner-title">
                  <p>Game Title</p>
              </div>
          </div>

          <div className="card-content">
              <div className="card-img">
                  <img src={actimg6} alt="" />
              </div>
              <div className="card-inner-title">
                  <p>Game Title</p>
              </div>
          </div>

          <div className="card-content">
              <div className="card-img">
                  <img src={actimg7} alt="" />
              </div>
              <div className="card-inner-title">
                  <p>Game Title</p>
              </div>
          </div>

          <div className="card-content">
              <div className="card-img">
                  <img src={actimg8} alt="" />
              </div>
              <div className="card-inner-title">
                  <p>Game Title</p>
              </div>
          </div>

      </div>
    </div>
  );
}

export default Category;
