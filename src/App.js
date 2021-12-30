import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './Box';
import Bigbox from './Bigbox';
import Box3 from './Box3';
import Box4 from './Box4';
import Box5 from './box5';
import Box8 from './Box8';

const App = () => {
  return (
      <div> 
         <div className="back" >


   <h1>THE SOUL OF THE WORLD</h1>
     <h5>A SIMPLE SOLUTION</h5>
  <Box4></Box4>
  <h5>For businesses and organizations - you can build communities and
engage audiences with one easy-to-use mobile app platform.</h5>

       <Box5 name="Know More"></Box5>      

       <Box5 name="Know More"></Box5>      

  <p>fdb</p>
   <Box8/>

         </div>
         <Bigbox  name= " Botsopot AI offers our customer a wealth of technical and business expertise. We create diverse, complex, web and mobile solutions for any busness need. Our knowledge and experience transkate to added value and peace of mind for our customer." >
         </Bigbox>
      
          <Box3 name="Who We Serve "/>               

         <Bigbox  name= " Botspot AI serves businesses in all major sectors, providing exceptional software solutions for large corporation, mid-sized and startups. we use industry specific knowledge and custom tailor our products to each customer’s unique needs." >

         </Bigbox>
      <Box name= "Finance and Insurance"/>  
      <Box name= "Healthcare"/>
      <Box name= "Construction"/>  
      <Box name= "Wholesale and retail"/>
      <Box name= "Education"/>
     <Box name= "Energy and resources"/>
      <Box name= "Entertainment"/>

      <Box name= "Transportation"/>

       
       
       

</div> 


     
   
  )
}

export default App
