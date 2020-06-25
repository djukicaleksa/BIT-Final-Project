import React from 'react';
import { Candidates } from './Candidates';

const GridCandidates = ({ candidates, getData }) => {
    return (
        candidates.map((can, i) => (
            <Candidates
                i={i}
                key={can.id}
                candidate={can}
                getData={getData}

            />
        ))

    )
}

export { GridCandidates }