import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Spinner = ({ css, size, loading }) => {
    return (
        <div className="absolute transform -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
            <ClipLoader css={css} size={size} color={'#CB1C22'} loading={loading} />
        </div>
    );
};

export default Spinner;
