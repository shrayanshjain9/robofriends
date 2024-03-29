import React from 'react';

const Card = ({id ,name ,email}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow'>
            <img alt='robots' src={`https://robohash.org/${id}?set=set3`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;