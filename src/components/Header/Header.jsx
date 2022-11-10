
import MyLink from "../MyLink/MyLink"
import "./Header.css"

export default function Header() {
   return (
      <header className="header">
         <div className="header_left">
            <h1>Crypto</h1>
         </div>
         <div className="header_right">
            <nav>
               <MyLink to="/coins">
                  Coins
               </MyLink>
               <MyLink to="/info">
                  Info
               </MyLink>
            </nav>
         </div>
      </header>
   )
}
