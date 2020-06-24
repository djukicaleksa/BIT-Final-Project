import React from 'react';
import { Candidates } from './Candidates';

const GridCandidates = ({ candidates, getData }) => {
    return (
        candidates.map(can => (
            <Candidates
                candidate={can}
                getData={getData}

            />
        ))

    )
}

export { GridCandidates }