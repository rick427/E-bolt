import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory-selector';
import './directory.styles.scss';
import Menu from '../menu/Menu';

const  Directory = ({sections}) => {
    return (
        <div className="directory-menu">
            {sections.map(({id, ...otherSectionProps}) => (
                <Menu key={id} {...otherSectionProps} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
