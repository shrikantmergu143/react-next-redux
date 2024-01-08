import React from 'react'
import PropTypes from 'prop-types';

export default function Icon(props) {
  return (
    <i style={{...props?.style, '--icon-url':`url(${props?.attrIcon})`}}  className={`common_icon ${props?.className}`} attr-icon={props?.attrIcon} />
  )
}
Icon.propTypes = {
    className:PropTypes?.string.isRequired,
    rounded:PropTypes?.bool,
    onClick:PropTypes?.func,
    loading:PropTypes?.any,
    attrIcon:PropTypes?.any,
}
Icon.defaultProps = {
    className:"",
    rounded:false,
    loading:false,
    attrIcon:""
}