import React from 'react';
import {Candidates} from './Candidates';

const GridCandidates =({candidates})=>{
    return(
        candidates.map(can=>(
            <Candidates
             name={can.name}
             email={can.email}
             />
        ))
        
    )
}

export {GridCandidates}