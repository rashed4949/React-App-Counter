import { Button } from "bootstrap";
import React, { Component } from "react";
import reactDom from "react-dom";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   tags: ["tag1", "tag2", "tag3"],
  // };

  // constructor() {
  // super();
  // this.handleIncrement = this.handleIncrement.bind(this);
  /// }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There is no tags</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  //handleIncrement = () => {
  //this.setState({ value: this.state.value + 1 });
  // console.log("clicked", this);
  //};
  render() {
    //console.log("props", this.props);
    return (
      <div>
        {/*       {this.props.children} */}
        <span className={this.badgeChangeMetod()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }

  badgeChangeMetod() {
    let classes = "badge m-2 bg-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
