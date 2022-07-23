import React from 'react'

const Navbar = ({ filterItem, menuList }) => {                  //  onClick me filterItemhmlog use kiye the so hme navbar ke parenthesis me filterItemdefine krna pdega
    //filterItem menuList ye sb hmlog props pass kr rhe h, jo restraunt js me kr rhe h
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">

                    {
                        menuList.map((curElem) => {
                            return (<button className="btn-group__item"
                                onClick={() => filterItem(curElem)}>
                               {curElem}
                            </button>
                            );
                        })}

                </div>
            </nav>
        </>
    )
}

export default Navbar
