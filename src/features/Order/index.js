import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { saveOrder } from '../../firebase';

import SelectChicken from './SelectChicken';
import PickAdverbs from './PickAdverbs';

class Order extends PureComponent {
  constructor() {
    super();

    this.onChickenChange = this.onChickenChange.bind(this);
    this.onAdverbChange = this.onAdverbChange.bind(this);
    this.onConfirm = this.onConfirm.bind(this);

    this.state = {
      chicken: undefined,
      adverbs: []
    };
  }

  onConfirm() {
    const { chicken, adverbs } = this.state;
    const user = this.props.user;

    saveOrder({
      [user.uid]: {
        user,
        chicken,
        adverbs
      }
    });
  }

  onChickenChange(e) {
    this.setState({
      chicken: e.target.value
    });
  }

  onAdverbChange(e) {
    const adverbs = this.state.adverbs;

    if (e.target.checked) {
      this.setState({
        adverbs: [...adverbs, e.target.value]
      });
    } else {
      this.setState({
        adverbs: adverbs.filter(adverb => adverb !== e.target.value)
      });
    }
  }

  render() {
    const { user } = this.props;
    const { chicken, adverbs } = this.state;
    const username = user ? user.displayName : '';

    return (
      <div>
        <h2>Order</h2>
        <span>{username}</span>
        <SelectChicken chicken={chicken} onChange={this.onChickenChange} />
        <PickAdverbs adverbs={adverbs} onChange={this.onAdverbChange} />
        <button onClick={this.onConfirm}>Naruci</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Order);