import React from "react";
import { YOUTUBE_API_KEY } from "../../config/youtube";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          onChange={this.handleChange}
          className="form-control"
          type="text"
        />
        <button
          onClick={() => {
            this.props.searchVideo(this.state.value, 5, YOUTUBE_API_KEY);
          }}
          className="btn hidden-sm-down"
        >
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
