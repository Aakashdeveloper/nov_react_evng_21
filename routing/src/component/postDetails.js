import React from 'react';

const PostDetails = (props) => {
    console.log(props)
    return(
        <div className="card">
            <h5 className="card-header bg-info">{props.match.params.topic} Details</h5>
            <div className="card-body">
                <h5 className="card-title">{props.match.params.topic} Details Page</h5>
                <p className="card-text">
                    {props.match.params.topic} Details is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </div>
        </div>
    )
}

export default PostDetails