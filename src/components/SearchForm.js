/**
 * Created by sveto4ek on 12.11.2016.
 */

/**
 * Created by sveto4ek on 12.11.2016.
 */
import React, {Component} from 'react';

export default class SearchForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  onSearch = (e) => {
    e.preventDefault();
    this.props.search(this.state.value);
  }
  onInputChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  }
  render(){
    console.log('form', this.props);
    return(
        <form onSubmit={this.onSearch}>
          <input type="text" onChange = {this.onInputChange} id=""/>
          <input type="submit" value="search" />
        </form>
    );
  }
}