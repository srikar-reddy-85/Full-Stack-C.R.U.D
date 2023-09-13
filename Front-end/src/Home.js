import React from 'react'
import './index.css'

function Home() {
  return (
    <div className='hhome'>
        <div className='hbproc'>
        <h1 className='hpheader'>process:</h1>
        <p className='proccontent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Aliquam sem et tortor consequat id porta. Mi bibendum neque egestas congue quisque. 
            Ultrices dui sapien eget mi proin sed libero enim. 
            Nascetur ridiculus mus mauris vitae ultricies.
        </p>
        </div>
        <div className='hbprod'>
        <h1 className='hpheader'>products:</h1>
        <p className='proccontent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Aliquam sem et tortor consequat id porta. Mi bibendum neque egestas congue quisque. 
            Ultrices dui sapien eget mi proin sed libero enim. 
            Nascetur ridiculus mus mauris vitae ultricies.
        </p>
        <ul className='prod-images'>
            <li>
                <img className='himg1' src="https://www.nfc.gov.in/images/special-assemblies-for-nuclear-reactors/Zr-2.5%25Nb-Pressure-Tubes-for-PHWR.jpg" alt="prod1" />
                <div className='prod1name'>Zr-2.5%Nb Pressure Tubes for PHWR</div>
            </li>
            

            <li>
              <img className='himg1' src="https://www.nfc.gov.in/images/special-assemblies-for-nuclear-reactors/SS-D9-Hexcans-for-PFBR.jpg" alt="prod1" />
                <div className='prod1name'>SS D9 Hexcans for PFBR</div>

            </li>

            <li>
              <img className='himg1' src="https://www.nfc.gov.in/images/special-assemblies-for-nuclear-reactors/Zircaloy-4-Seamless-Calandria-Tubes-for-PHWR.png" alt="prod1" />
                <div className='prod1name'>Zircaloy 4 Seamless Calandria Tubes for PHWR</div>

            </li>

            <li>
              <img className='himg1' src="https://www.nfc.gov.in/images/special-assemblies-for-nuclear-reactors/Zircaloy-4-Square-Channels-for-BWR.jpg" alt="prod1" />
                <div className='prod1name'>Zircaloy 4 Square Channels for BWR</div>

            </li>

        </ul>
        </div>
    </div>
  )
}

export default Home
