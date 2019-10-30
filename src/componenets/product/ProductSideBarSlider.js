import { Slider, Input, Row, Col } from 'antd';
import { Icon } from 'semantic-ui-react'
import React from 'react';
        //FIXME: NAN value breaks buttons


class ProductSideBarSlider extends React.Component {
  constructor(props){
    super(props);
  }

  state = {
    inputValue: [0,20],
    minrange: 0,
    maxrange: 100,
  };





  onChanger (e, num) {
    
    let arr = this.state.inputValue;
    console.log(arr + ' from outside if');
    console.log(e + ' :current e');
    console.log(typeof e === 'number' );
    console.log(typeof(e));
    console.log(num + ' :curent num');
  
    
    
    //check for limits and input type
    if(num == 1 || num == -1 ) {
      let targetE = parseInt(e.target.value);
      //right button changes

      if (num === 1){


        switch (targetE){
          case targetE == NaN:
              this.setState ({inputValue: [arr[0],1]});
              console.log('hit NAN');
              
          case targetE <= arr[0]:
              this.setState ({inputValue: [arr[0],targetE*10]});
          break;
          default:
              this.setState ({inputValue: [arr[0],targetE] });
        }
        // if (targetE <= arr[0]){
        //   this.setState ({inputValue: [arr[0],targetE*10]});
        // }
        // else{
        //   this.setState ({inputValue: [arr[0],targetE] });
        // }
        console.log(this.state.inputValue + ': from onchanger 1');
      }
      //left button changes
      if (num === -1){
        if(targetE >= arr[1]){
          this.setState ({inputValue: [arr[1] -1, arr[1]] });
        }
        else{
          this.setState ({inputValue: [targetE, arr[1]] });
        }
        
        console.log(this.state + 'from onChanger -1');
      }
    } 
    //change coming from slider
    else{
      this.setState ({inputValue: e});
      console.log(this.state + 'from onChanger 0 {' + e + '}');
    }



  }

  render() {
    // unpack variables for quick use
    const { inputValue, minrange, maxrange } = this.state;

    return (
     
    <div>
      <Row>
        <Col span = {6}>
          <div className = 'slider-title'>
            <Icon name='arrows alternate vertical' />
            <h4>{this.props.title}</h4>
          </div>
        </Col>
      </Row>
      <Row>
      <Col span={6}>
        {/* first button */}
          <Input
            id = 'right-slider-input'
            min={minrange}
            max={maxrange}
            value={inputValue[0]}
            onChange= {event => this.onChanger(event, -1)}
          
          />
        </Col>
        <Col span={12}>
          <Slider 
            id = 'main-slider'
            range 
            min={minrange}
            max={maxrange}
          value = {this.state.inputValue} 
          onChange = {e => this.onChanger(e,0)}/>
        </Col>
        <Col span={6}>
          <Input
            id = 'left-slider-input'
            min={minrange}
            max={maxrange}
            //comment out later
            // style={{ marginLeft: 16, color: 'red' }}
            value={inputValue[1]}
            onChange={e => this.onChanger (e, 1)}
          />
        </Col>
      </Row>
    </div>
     
    );
  }

}

export default ProductSideBarSlider;



// {'Airfoils': '– Moso bamboo – 60”  diameter', 'Airfoil Finishes ': 'Caramel Bamboo or Cocoa', 'BambooHardware Finishes': 
//  'Satin Nickel,Oil-Rubbed Bronze, Black or White', 'Motor' : 'EC motor with digital inverter drive', 'Exceeds ENERGY STAR fan efficiency requirements by up to 1200%' : null, 'Controls' : 'Remote control Remote control (included), Haiku Home mobile app, Haiku Wall Control (optional), or Amazon Alexa-enabled devices (optional)' ,'Onboard Sensors ' :  'Ambient and surface temperature, relative humidity, and passive infrared sensors enable SenseME technology. Technology lets you automate your fan’s operation to maximize convenience and energy savings', 'Environment' :  'Indoor use only.' , 'Accessories' : 'Haiku Light Kit and Haiku Wall Control. See respective spec sheets for details. A Tall Ceiling Kit and Stabilizer Kit are available for ceilings 14 feet (4.3 meters) or taller.', 'Patented LED light module (optional) seamlessly integrates with the body of the fan': null, 'Made in the U.S.A.':null}

// { 'Airflow (CFM)': 5,467 , 'Power (W)': ['Min': 1.95, 'Max': 21.14], 'Operating voltage (VAC)': ['Min': 100, 'Max':240], 'Fan speed (RPM)': ['Min':35, 'Max':200],'Number of fan speeds': 7, 'Sound at max speed (dBA)': 35, 'Fan sweep diameter (in)': 60, 'Height (in)': ['Min' :12.3, 'Max':57], 'Weight (lbs)': 13}