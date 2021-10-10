import React from 'react'

function mainpage() {
    return (
        <div className="main">
            <nav className="nav">
                <ul>
                    <li className="nav-li"><a href="#">HOME</a></li>
                    <li className="nav-li" ><a href="#">BAND</a></li>
                    <li className="nav-li"><a href="#">TOUR</a></li>
                    <li className="nav-li"><a href="#">CONTACT</a></li>
                    <li className="nav-li"><a href="#">MORE</a></li>
                </ul>
            </nav>
        <div className="bcgimg">
       <div className="mark" >
            <p className="word1">Chicago</p>
            <p className="word2">Thank you, Chicago - A night we won't forget</p>
       </div>
       </div>
       <div className="cardspage">
           <div className="titlezone">
               <p className="title-1">THE BAND</p>
               <p className="title-2">We love music</p>
               <p className="text">
                   We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                   <br />
                   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                   <br />
                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                   <br />
                   dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                   <br />
                   anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                   <br />
                   enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.


               </p>
           </div>
       </div>
       <div className="cards">
           <div className="card">
               <p className="img-name">Name</p>
               <img className="card-img" src="https://www.w3schools.com/w3images/bandmember.jpg" alt="" />
           </div>
           <div className="card">
               <p className="img-name">Name</p>
               <img className="card-img" src="https://www.w3schools.com/w3images/bandmember.jpg" alt="" />
           </div>
           <div className="card">
               <p className="img-name">Name</p>
               <img className="card-img" src="https://www.w3schools.com/w3images/bandmember.jpg" alt="" />
           </div>

       </div>
       <div className="tours">
           <p className="tour-word-1">TOUR DATES</p>
           <p className="tour-word-2">Remember to book your tickets!</p>
       </div>
       <div className="tour-date">
           <p className="tour-month">September</p>
           <p className="tour-avability">Sold out</p>
       </div>
       <div className="tour-date">
           <p className="tour-month">October</p>
           <p className="tour-avability">Sold out</p>
       </div>
       <div className="tour-date">
           <p className="tour-month">November</p>
       </div>

<div className="contactmenu">
    <p className="contact">Contact</p>
    <p className="fan">Fan?Drop a note!</p>

    <div className="form">
        <div className="maincontact">
        <p className="form-1">Chicago , US </p>
       <p className="form-1">Phone: +1 1545465</p>
       <p className="form-1">Email: WorldTour@mail.com</p>
        </div>
    <div className="input-menu">
        <div className="inputs">
        <input className="input" placeholder="Name" type="text" />
        <input className="input" placeholder="Email" type="text" />
    </div>
    <div className="input-2">
        <input className="input2" placeholder="Message" type="text" />
    </div>
    <div className="button">
    <button className="form-btn" type="button"><a href="#">SEND</a></button>
    </div>
    </div>
    </div>
</div>



       
 </div>

        
    )
}

export default mainpage;
