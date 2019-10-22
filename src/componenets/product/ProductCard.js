import React from 'react';
import {Card, Image, Icon, Menu, Checkbox, Dropdown} from 'semantic-ui-react';

function ProductCard (props) {
    const options = [
        { key: 1, text: 'Choice 1', value: 1 },
        { key: 2, text: 'Choice 2', value: 2 },
        { key: 3, text: 'Choice 3', value: 3 },
      ]
    return (
        <Card className = 'Product'>
        <p>verified on date: 11/11/11</p>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Fan Name</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Checkbox
            label = 'compare'></Checkbox>

              <Menu compact>
                < Dropdown text='Add to' options={options} simple item />
            </Menu>
          {/* <a>
            <Icon name='user' />
            22 Friends
          </a> */}
        </Card.Content>
      </Card>
    )
}

export default ProductCard;

