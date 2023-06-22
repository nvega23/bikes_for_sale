// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";
// import { logout } from '../../store/session';
// import './NavBar.css';
// import { Badge } from 'antd';
// import SearchBar from '../SearchBar.js/SearchBar';
// import myImage from '../../assets/bike_icon.png';

// function NavBar() {
//     const [isActive, setIsActive] = useState(false);
//     const loggedIn = useSelector(state => !!state.session.user)
//     const {cart} = useSelector(state => ({...state}))
//     const dispatch = useDispatch()

//     const currentUserId = useSelector(state=> state.session.user?._id)

//     const logoutUser = (e) => {
//         e.preventDefault()
//         dispatch(logout())
//     }

//     const handleClick = () => {
//        setIsActive(!isActive);
//     };

//     let navbar;

//     if(loggedIn) {
//         navbar=(
//             <>
//                 <div className='links-nav'>
//                 <Link to={'/posts'} className="rightNav"><i className="fa-solid fa-images"></i>Posts</Link>
//                 <Link to={`/profile/${currentUserId}`} className="rightNav"><i className="fa-sharp fa-solid fa-user"></i>Profile</Link>
//                 <Link to={'/posts/new'} className="rightNav"><i className="fa-sharp fa-solid fa-square-plus"></i>Create a Post</Link>

//                 <Link to="/cart" className="rightNav">
//                     <Badge count={cart.length} offset={[9, 0]} className="rightNav">
//                     <i className="fa-solid fa-cart-shopping"></i>
//                     </Badge>
//                 </Link>
//                 <button onClick={logoutUser} id="logoutButton">Logout</button>
//                 </div>
//             </>
//             )
//          } else {
//             navbar=(
//                 <div className='links-auth'>
//                     <Link to={'/login'} className="rightNav">
//                         <i className="fas fa-regular fa-right-to-bracket"></i>
//                     </Link>
//                     <Link to={'/signup'} className="rightNav">
//                         <i className="fas fa-regular fa-user-plus"></i>
//                     </Link>
//                 </div>
//             )
//          }

//     return (
//         // <>
//         //     <div className='navBar'>
//         //         <Link to="/" className='content'>
//         //         <img src={myImage} alt="Bike Icon" />
//         //         </Link>
//         //         <SearchBar/>
//         //         <div id='navMenu' className={isActive ? 'active' : ''} onClick={handleClick}>
//         //         <span></span>
//         //         <span></span>
//         //         <span></span>
//         //         </div>
//         //         {isActive && (
//         //             <div className="menu">
//         //             <div className='login-something'>  <Link to="/" className='login-links'> Home </Link></div>
//         //             <div className='login-something'>  <Link to="/login" className='login-links'> Log In</Link></div>
//         //             <div className='login-something'><Link to="/signup" className='login-links'>Sign Up</Link></div>
//         //         </div>
//         //         )}
//         //     </div>
//         // </>
//         <>

//         <div id="navbarOuter">
//             <NavLink exact to="/" id="title">
//                 {/* <img src={logo} alt="logo" id="logo"/> */}
//             </NavLink>
//             <SearchBar/>
//             {navbar}

//         </div>
//         </>
//     )
// }

// export default NavBar
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { logout } from '../../store/session';
import './NavBar.css';
import { Badge } from 'antd';
import SearchBar from '../SearchBar.js/SearchBar';
import myImage from '../../assets/bike_icon.png';

function NavBar() {
    const [isActive, setIsActive] = useState(false)
    const loggedIn = useSelector(state => !!state.session.user)
    const {cart} = useSelector(state => ({...state}))
    const dispatch = useDispatch()
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const currentUserId = useSelector(state=> state.session.user?._id)

    const handleClick = () => {
       setIsActive(!isActive);
    };

    const logoutUser = (e) => {
        e.preventDefault()
        dispatch(logout())
    }

    let navbar;

    if(loggedIn) {
        navbar=(
            <>
            <div id='navMenu' className={showMenu ? 'active' : ''} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {showMenu && (
                <div className={`menu ${showMenu ? 'active' : ''}`}>
                <div className='links-nav'>

                <Link to={'/posts'} className="rightNav"><i class="fa-solid fa-images"></i>Home</Link>
                {/* <Link to={`/profile/${currentUserId}`} className="rightNav"><i class="fa-sharp fa-solid fa-user"></i>Profile</Link> */}
                <Link to={'/posts/new'} className="rightNav"><i class="fa-sharp fa-solid fa-square-plus">Sell</i></Link>

                <Link to="/cart" className="rightNav">
                    <Badge count={cart.length} offset={[9, 0]} className="rightNav">
                    </Badge> Cart
                </Link>
                <button onClick={logoutUser} id="logoutButton">Logout</button>
                </div>
                </div>
            )}
            </>
            )
         } else {
            navbar=(
                <div id='navMenu' className={showMenu ? 'active' : ''} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
                {showMenu && (
                    <div className={`menu ${showMenu ? 'active' : ''}`}>
                        <Link to={'/login'} className="rightNav">
                            <i className="fas fa-regular fa-right-to-bracket">Login</i>
                        </Link>
                        <Link to={'/signup'} className="rightNav">
                            <i className="fas fa-regular fa-user-plus">Signup</i>
                        </Link>
                    </div>
                )}
            </div>
            )
         }

    return (
        <>
            <div id="navbarOuter">
                <NavLink exact to="/" id="title">
                    <img className='content' src={myImage} alt='bike'/>
                </NavLink>
                <SearchBar/>
                {navbar}
            </div>
        </>
    )
}

export default NavBar
