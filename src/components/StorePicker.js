import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // constructor() {
  //   supre();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  goToStore(event) {
    event.preventDefault();
    console.log('upi changed');
    // first grab the tex from the box
    console.log(this.storeInput);
    // second we're going to transition from '/' to '/store/:storeId'
    const storeId = this.storeInput.value;
    console.log(`going to ${storeId}`);
    this.context.router.transitionTo(`/store/${storeId}`)
  }
  render() {
    return  (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please Enter a store</h2>
        <input type="text" required placeholder="Store Name"
          defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
        <button type="submit">visit store -></button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
