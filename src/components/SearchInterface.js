/**
 * Created by sveto4ek on 12.11.2016.
 */
import React, {Component} from 'react';
import SearchForm from  './SearchForm';
import SearchResults from  './SearchResults';
import {search} from '../api/omdb';
export default class SearchInterface extends Component{

  onSearch = (value) => {
    search(value).then((result) => this.setState({ items: result }));
  }
  render(){
    console.log(this.props);
    return(
        <section className={this.props.className}>
          <SearchForm search={search} />
          <SearchResults />
        </section>
    );
  }
}