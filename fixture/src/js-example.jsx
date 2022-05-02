import React from 'react'
import PropTypes from 'prop-types'

export const CoolButton = ({
    id
}) => {
    return <button>Cool button</button>
}

CoolButton.propTypes = {
    id: PropTypes.string.isRequired
}
