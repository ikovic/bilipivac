import React, { PureComponent } from "react";
import { connect } from "react-redux";
import RaisedButton from "material-ui/RaisedButton";
import Popover from "material-ui/Popover";
import { getOrdersGroupedByChicken } from "../../redux/selectors/orders";

const noop = () => null;

const showAdverbs = (event, orders, handleTouchTap) => {
  if (!orders || !orders.length) {
    return noop;
  }

  const lastOrder = orders.slice(-1)[0];

  const content = (
    <div>
      <h3>
        {lastOrder.user.displayName}
      </h3>
      <ul>
        {lastOrder.adverbs.map(adverb =>
          <li key={adverb}>
            {adverb}
          </li>
        )}
      </ul>
    </div>
  );

  handleTouchTap(event, content);
};

const ShowAdverbsButton = ({ orders, chicken, finishOrder, handleTouchTap }) =>
  <RaisedButton
    label={chicken}
    labelPosition="before"
    containerElement="label"
    onTouchTap={e => showAdverbs(e, orders, handleTouchTap)}
  >
    {orders.length}
  </RaisedButton>;

const renderButtons = (orders, handleTouchTap) =>
  Object.keys(orders).map(chicken =>
    <ShowAdverbsButton
      key={chicken}
      orders={orders[chicken]}
      chicken={chicken}
      handleTouchTap={handleTouchTap}
    />
  );

class Adverbs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleTouchTap = (event, content) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      content,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const orders = this.props.orders;

    return (
      <div>
        {renderButtons(orders, this.handleTouchTap)}
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
          targetOrigin={{ horizontal: "left", vertical: "top" }}
          onRequestClose={this.handleRequestClose}
        >
          <div>
            {this.state.content}
          </div>
        </Popover>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: getOrdersGroupedByChicken(state)
});

export default connect(mapStateToProps)(Adverbs);
