
import React, { Component } from 'react';
import { Accordion, Form, Menu } from 'semantic-ui-react';

import ProductSideBarSlider from './ProductSideBarSlider';

const ColorForm = (
  <Form className = 'side-menue-header'>
    <Form.Group inline > 
      <Form.Input  name = 'product_model_start'/>
      <p>-</p>
      <Form.Input name = 'product_model_end'/>
    </Form.Group>
  </Form>
)

const SizeForm = (
  <Form>
    <Form.Group grouped>
      <ProductSideBarSlider title = 'Airflow'/>
    </Form.Group>
  </Form>
)

class ProductSearchFilter extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion as={Menu} vertical>
          <div className = 'row-of-buttons'>
              <h4>Search:</h4>
              <Form.Button content = 'save'/>
              <Form.Button content = 'clear'/>
          </div>
        <Menu.Item>
          <Accordion.Title
            active={activeIndex === 0}
            content='Model Year'
            index={0}
            onClick={this.handleClick}/>
          <Accordion.Content active={activeIndex === 0} content={ColorForm} />
        </Menu.Item>
        
        <Menu.Item>
          <Accordion.Title
            active={activeIndex === 1}
            content='Size'
            index={1}
            onClick={this.handleClick}
          />
          <Accordion.Content active={activeIndex === 1} content={SizeForm} />
        </Menu.Item>

        <Menu.Item>
          <Accordion.Title
            active={activeIndex === 2}
            content='Size'
            index={2}
            onClick={this.handleClick}
          />
          <Accordion.Content active={activeIndex === 2} content={SizeForm} />
        </Menu.Item>

        <Menu.Item>
          <Accordion.Title
            active={activeIndex === 3}
            content='whaterver'
            index={3}
            onClick={this.handleClick}
          />
          <Accordion.Content active={activeIndex === 3} content={SizeForm} />
        </Menu.Item>

      </Accordion>
    )
  }
}


export default ProductSearchFilter;