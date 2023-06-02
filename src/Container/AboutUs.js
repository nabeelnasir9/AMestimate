import React from 'react';
import data from '../Container/Data';
import '../Styles/Aboutus.css';


function AboutUs() {
  return (
   <div className="AboutUS__wrapper">
    <div className='AboutUs__childWrapper'>
        <div className='AboutUS__MainContainer'>
            <div className='AboutUS__Header'>
                About AMtegrity
            </div>
            <div className='About__MainPara'>
            AMtegrity is purpose-built for the property insurance ecosystem. AMtegrity exists to extract maximum value from the tectonic shift towards leveraging geospatial data in both risk engineering, and machine-assisted claim settlement.

            </div>
            <div className='AboutUs__Mainpara_1'>
            AMtegrity believes that both Claims Professionals & Contractors deserve to have access to a platform designed to enhance communication, and address the unique demands of our industry.
            </div>
            <div className='AboutUs__Mainpara_2'>
            AMtegrity currently incorporates three main offerings:
            </div>
            <div className='AboutUS__Mainpara_points'>
                <ul>
                    <li>AMSketch</li>
                    <li>AMXactimate</li>
                    <li>AMEstimate</li>
                </ul>
            </div>
            <div className='AboutUS__Header'>
                AMSketch
            </div>
            <div className='AboutUS__Paragraph__1'>
            The AMSketch provides space for Matterport users to supercharge any public scan, providing access to unique utilities. For example:
            </div>
            {data.map((item, index) => (
            <div className='AboutUs__TextandImageContainer'>
                {index % 2 === 0 ? (
            <>
               <div className='AboutUs__Text' style={{color:'#4267B2', paddingRight:'6rem'}}>
                    {item.text1}
                </div>
                <div className='AboutUs__Image'>
                   <img src= {item.image} alt='' />
                </div>
          
            </>
          ) : (
            <>
               
                <div className='AboutUs__Image'>
                   <img src= {item.image} alt='' style={{ justifyContent:'space-between'}}/>
                </div>
                <div className='AboutUs__Text' style={{color:'#4267B2', paddingLeft:'6rem'}}>
                    {item.text1}
                </div>
          
            </>
          )}
            
               
            </div>
             ))}
        </div>
    </div>
   </div>
  );
}

export default AboutUs;
