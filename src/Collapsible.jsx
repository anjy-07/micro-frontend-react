import React , { Component } from "react";
export default class CollapsibleReact extends Component {
  state = {
    isCollapsed: false,
    title: ""
  };

  toggle = () => {
    this.setState(prevState => ({
      isCollapsed: !prevState.isCollapsed
    }));
  };

  render() {
    const { isCollapsed, title } = this.state;
   
    const { children } = this.props;
    return (
      <div style={{ border: "black dashed 1px" }}>
        <header
          onClick={this.toggle}
          className="b"         
        >
          HIIII in collapse
          {title}
        </header>
        
        <section hidden={isCollapsed}>{children}</section>
      </div>
    );
  }
}


