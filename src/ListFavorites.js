import React, { Component } from 'react';

class ListFavorites extends Component {
	render() {
    	return (
			<ol>
				{this.props.data.map(data => {
					return (
                 		<li>
                 			{data.userName}
							<ul>
          						{data.favoriteMovies.map(movie => <li>{movie}</li>)}
							</ul>
  						</li>
          			)
				})}
			</ol>
        )
    }
};

export default ListFavorites;