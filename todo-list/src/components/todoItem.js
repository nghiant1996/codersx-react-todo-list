import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './todoItem.css';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/checkComplete.svg';

class TodoItem extends Component {

    render(){
        const {item, onClick} = this.props;
        let url = checkImg;
        if(item.isComplete){
            url = checkCompleteImg;
        }
        return(
            <div className={classNames(
                'TodoItem',
                {'TodoItem-complete' : item.isComplete}
                )}>
              <img onClick={onClick} src = {url} alt="check-icon" width={32} height={32}/>  
              <p>{this.props.item.title}</p>
            </div>
        );
    }
}

TodoItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        isComplete: PropTypes.bool.isRequired
    }),
    onClick: PropTypes.func
}

export default TodoItem;