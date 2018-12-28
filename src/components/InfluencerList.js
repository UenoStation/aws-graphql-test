import React, { Fragment } from 'react';

const InfluencerList = props => {
    return (
        <Fragment>
            <ul>
                {
                    props.items.map(({ name, handle, tags }) => {
                        return (
                            <li key={name}>
                                <div>{name}</div>
                                <div>{handle}</div>
                                <div>{tags}</div>
                            </li>
                        )
                    })
                }
            </ul>
        </Fragment>
    )
}

export default InfluencerList;