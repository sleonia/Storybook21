import React from 'react'
import PropTypes from 'prop-types'
import { Group, Button } from '@mantine/core';

export const CoolJsButton = (props) => (
    <Group>
        <Button color="blue" variant="subtle">Subtle variant</Button>
        <Button color="gray" variant="light">Light variant</Button>
        <Button color="pink" variant="filled">Filled variant</Button>
        <Button color="red" variant="outline">Outline variant</Button>
        <Button color="indigo" variant="default">Default variant</Button>
    </Group>
)

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
    title: 'title'
}
