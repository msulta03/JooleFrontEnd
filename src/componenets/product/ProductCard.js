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
        <p>{props.verifiedOn}</p>
        <Image src={props.imageSrc} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Meta>
            <span className='date'>{props.spec}</span>
          </Card.Meta>
          <Card.Description>
            {props.pastSpec}
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

