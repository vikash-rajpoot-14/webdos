import React from 'react'
import classes from "./Header.module.css"

function Header() {
  return (
      <div className={classes.nav}>
        <img className="w-36" src="https://public-assets.envato-static.com/assets/logos/envato_market-dde916a48af7413e54aa058fe7ae6856752fca799da4bec355f00aea904bfa19.svg" alt="placewise" srcset="" />
        <button className={classes.btn}>Buy now</button>
      </div>
  )
}

export default Header
