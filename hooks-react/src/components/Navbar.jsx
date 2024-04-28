import React, { useEffect } from 'react'

const Navbar = ({color}) => {

    // Runs onfirst render
    useEffect(() => {
        alert("runs on firt render")
    }, [])

    // Runs on very render
    useEffect(() => {
        alert("Runs on every render")
    },)

    // when specific value or state is changed
    useEffect(() => {
        alert("color was changed")

    }, [color])

    useEffect(() => {
        alert("Hey welcome to my page. This is the first render of app.jsx")
      return () => {
        alert("component was unmounted")
    }
    }, [])
    

    return (
        <div>Navbar</div>
    )
}

export default Navbar