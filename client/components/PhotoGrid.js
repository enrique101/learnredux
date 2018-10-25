import React from 'react';
import Photo from './Photo';

class PhotoGrid extends React.Component{
    render(){
        return(
           <div className="photo-grid">
            {console.log(this.props.posts)}
            { this.props.posts.map((post,i) => <Photo post={post} i={i} key={i} { ...this.props } />) }
           </div>
         );
    }
}

export default PhotoGrid;