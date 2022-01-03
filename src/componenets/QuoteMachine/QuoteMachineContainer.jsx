import { connect } from "react-redux";
import { compose } from "redux";
import { getQuoteThC } from "../../redux/quote-reducer";
import React from "react";
import QuoteMachine from "./QuoteMachine";

class QuoteMachineApiComponent extends React.Component {
  componentDidMount() {
    this.props.getQuoteThC();
  }
  onButtonClicked = () => {
    this.props.getQuoteThC();
  };
  render() {
    return (
      <div>
        <QuoteMachine
          author={this.props.author}
          text={this.props.text}
          onButtonClicked={this.onButtonClicked}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    text: state.text,
    author: state.author,
  };
};

export default compose(connect(mapStateToProps, { getQuoteThC }))(
  QuoteMachineApiComponent
);
