import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import React, { useState } from "react";
import classNames from "classnames";
import { Route } from "react-router-dom";

export default function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <nav className='bg-gray-100 absoulte'>
      <div className='mx-auto px-4'>
        <div className='flex justify-between'>
          {/* x는 수평방향 조절, y는 수직방향 조절 */}
          <div className='flex space-x-4'>
            <div>
              
                <a className='flex items-center py-5 px-2 text-gray-700 font-bold'>Home</a>
            </div>
            {/* sm크기 일경우엔 안보이고, md크기 부터는 display:flex 적용 */}
            <div className="hidden md:flex items-center space-x-1">
              
                <a className='py-5 px-2 text-gray-700 font-bold hover:text-gray-900'>Contact Us</a>
              
                <a className='py-5 px-2 text-gray-700 font-bold hover:text-gray-900'>게시판</a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <div className='py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300'>
            
                <a>로그인</a>
            </div>
          </div>
          <div className='md:hidden flex items-center'>
            {!menuToggle ? (
              <AiOutlineMenu onClick={() => setMenuToggle(!menuToggle)}
                className="hover:cursor-pointer" />
            ) : (<AiOutlineClose onClick={() => setMenuToggle(!menuToggle)}
              className="hover:cursor-pointer" />)}
          </div>
        </div>
      </div>

      {/* mobile menu items */}
      <div className={classNames("md:hidden", { hidden: !menuToggle })}>
        
          <a className='block py-2 px-4 text-sm hover:bg-gray-200'>Contact Us</a>
        
          <a className='block py-2 px-4 text-sm hover:bg-gray-200'>게시판</a>
        
          <a className='block py-2 px-4 text-sm bg-yellow-400 hover:bg-yellow-300'>로그인</a>

      </div>
    </nav>
  )
    // <div className={styles.navbarWrap}>
    //   <ul className={styles.navbarContainer}>
    //     <li className={styles.title}>
    //       <Route href="/">
    //         <a>Home</a>
    //       </Route>
    //     </li>
    //     <li className={styles.title}>
    //       <Route href="/contact">
    //         <a>Contact Us</a>
    //       </Route>
    //     </li>
    //     <li className={styles.title}>
    //       <Route href="/boards">
    //         <a>게시판</a>
    //       </Route>
    //     </li>
    //     <li className={styles.title}>
    //       <Route href="/login">
    //         <a>로그인</a>
    //       </Route>
    //     </li>
    //   </ul>
    // </div>
}