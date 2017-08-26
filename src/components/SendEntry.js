import React, {Component} from 'react';
import '../App.css';

class SendEntry extends Component {

  render() {
    return (
      <div className="App-send-entry-bar">
        <div className="SendEntry-width">
          <h1 className="SendEntry-title">Send Ethereum</h1>
          <div className="SendEntry-forum">
            <input placeholder="Recipient Email"/>
            <input placeholder="Eth Amount" type="number"/>
            <div className="SendEntry-button">Send</div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Mauris massa. Vestibulum lacinia arcu eget nulla.
          </p>
        </div>
      </div>
    );
  }
}

export default SendEntry;
