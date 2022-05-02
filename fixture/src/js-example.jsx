import React from 'react'
import PropTypes from 'prop-types'

export const CoolJsButton = (props) => {
    return <button>Cool button</button>
}

CoolJsButton.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    title: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(['info', void 0]),
    onClick: PropTypes.func,
    color: PropTypes.string,
    colorScheme: PropTypes.oneOf([
        'base',
        'secondary',
        'link',
        'purple',
        'blue',
        'green',
        'skyblue',
        'black',
        'gold',
        'aqua'
    ]),
    obj: PropTypes.shape({
        disabled: PropTypes.bool,
        loading: PropTypes.string,
        loader: PropTypes.oneOf(['done', 'waiting', 'error', 'info'])
    })
}

CoolJsButton.defaultProps = {
    children: void 0,
    mode: void 0,
    color: 'black',
    colorScheme: 'base',
    onClick: () => {}
}
