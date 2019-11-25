import React, { Component } from 'react'
import { Grid, Menu} from 'semantic-ui-react';
// import Student from './list';
import Medication from './Medications';
import Medication2 from './Medication2';

export default class MedBar extends Component {
  state = { activeItem: 'Medication' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state


    function Whattorender(props) {
      console.log(props.whatstate);
      if(props.whatstate === 'Disease'){
        return <Medication />
      }
      else if(props.whatstate === "Deficiency"){
        return <Medication2 />;
      }
    }
    return (
      <Grid>
          <div className='navbar'>
            <Grid.Row stretched width={16}>
            <Menu fluid horizontal tabular>
                <Menu.Item
                name='Disease'
                active={activeItem === 'Disease'}
                onClick={this.handleItemClick}
                />
                <Menu.Item
                name='Deficiency'
                active={activeItem === 'Deficiency'}
                onClick={this.handleItemClick}
                />
            </Menu>
            </Grid.Row>
          </div>
            <Grid.Column stretched width={16}>
              <div className="cards">
                <Whattorender whatstate={activeItem} />
              </div>
            </Grid.Column>
       
      </Grid>
    )
  }
}