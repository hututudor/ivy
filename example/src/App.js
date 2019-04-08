import React, { Component } from 'react';

import {Button} from 'ivy';

export default class App extends Component {
  render () {
    return (
      <div>
        <Button size="big" positive onClick={() => console.log('Clicked!')}>Name</Button>
      </div>
    );
  }
}
