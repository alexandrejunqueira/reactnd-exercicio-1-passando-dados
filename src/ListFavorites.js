import React, { Component } from 'react';

class ListFavorites extends Component {
	render() {
    	return (
			<ol>
				{this.props.data.map(data => {
					return (
                 		<li key={data.userID}>
                 			{`${data.userName}'s favorite movies is: ${data.favoriteMovies.join(', ')}`} 
  						</li>
          			)
				})}
			</ol>
        )
    }
};

export default ListFavorites;