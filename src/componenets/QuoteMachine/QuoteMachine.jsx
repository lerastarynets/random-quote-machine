import React from "react";
import s from "./QuoteMachine.module.css";

class QuoteMachine extends React.Component {
  render() {
    return (
      <div>
        <div className={s.quoteContainer}>
          <div className={s.quoteText}>{this.props.text}</div>
          <div className={s.quoteAuthor}>Ⓒ {this.props.author}</div>
          <div className={s.quoteButtonContainer}>
            <button
              className={s.quoteButton}
              onClick={this.props.onButtonClicked}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteMachine;
