import React from 'react';
import {connect} from 'react-redux';
import Comments from '../components/Comments';
import {AddNewComments} from '../reducers/newComments';

export function NewComments(props) {
    return <Comments newComments={props.newComments}/>
}

function mapStateToProps(state) {
    return {
        newComments: state.newComments,
    }
}

const mapDispatchToProps = {
    AddNewComments,
}



export default connect(mapStateToProps, {mapDispatchToProps})(NewComments);