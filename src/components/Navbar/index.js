import React,{useState,useEffect} from 'react'
import '../../css/Menu.css';

import {NavLink}from 'react-router-dom'
import $ from 'jquery';


const Navbar = () => {
  function animacion(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
}
useEffect (() => {

  animacion();
  $(window).on('resize',function(){
     setTimeout(function() { animacion(); },500);
  });

}, []);
return (
<nav className="nav navbar-expand-lg navbar-mainbg justify-content-end">
      
  <NavLink className="navbar-brand navbar-logo bajar" to="/" exact>
  <i class="fas fa-briefcase"></i>
      Empleos
  </NavLink>

  <button 
  className=" navbar-toggler justify-content-end "
  onClick={ function(){
    setTimeout(function(){ animacion(); });
  }}
  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <i className="fas fa-bars text-white "></i>
</button> 

  <div  className=" collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul   className="navbar-nav ml-auto mover">
          <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
          </div>
          <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
              <i className=" fas fa-tachometer-alt"></i>
                  Home
              </NavLink>
          </li>
          <li className="nav-item ">
              <NavLink className="nav-link" to="/signin" exact>
              <i className=" far fa-chart-bar"></i>
                  Sing in
              </NavLink>
          </li>
      </ul>
  </div>


</nav>

)
}

export default Navbar
