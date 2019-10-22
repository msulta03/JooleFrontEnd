import { Slider, Input, Row, Col } from 'antd';
import { Icon } from 'semantic-ui-react'
import React from 'react';

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
    console.log(num + ' :curent num');
    
    
    //check for limits and input type
    if(typeof e === 'number' ) {
      //right button changes
      if (num === 1){
        if (e <= arr[0]){
          this.setState ({inputValue: [arr[0],arr[0]+1] });
        }
        else{
          this.setState ({inputValue: [arr[0],e] });
        }
        console.log(this.state.inputValue + ': from onchanger 1');
      }
      //left button changes
      if (num === -1){
        if(e >= arr[1]){
          this.setState ({inputValue: [arr[1] -1, arr[1]] });
        }
        else{
          this.setState ({inputValue: [e, arr[1]] });
        }
        
        console.log(this.state + 'from onChanger -1');
      }
    } 
    //change coming from slider
    if(num === 0){
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