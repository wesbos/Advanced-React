import React, {Component} from 'react';
import Link from 'next/link';


const Home  = props => {
   return (
       <div>
       <p>Hey!</p>
         <Link href="/sell">
           Sell
         </Link>
       </div>
       ) 
}

export default Home;