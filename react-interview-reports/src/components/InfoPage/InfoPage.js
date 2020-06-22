import React from 'react';
import {Header} from '../../components/HomePage/Header/Header';
import {servicePeople} from '../../services/servicePeople';
import {CandidatesInfo} from './CandidatesInfo/CandidatesInfo';
import {Container} from 'react-materialize';

class InfoPage extends React.Component{
    constructor(props){
        super(props);

        this.state={
            candidates: []
        }
    }
    componentDidMount(){
        servicePeople.getCandidatesInfo(this.props.match.params.id)
        .then(data=>{
            this.setState({candidates: data})
        })
    }









    render(){

        return(
            <div>
            <Header/>
           
            <CandidatesInfo
                name={this.state.candidates.name}
                email={this.state.candidates.email}
                education={this.state.candidates.education}
                birthday={this.state.candidates.birthday}
            />
           
            </div>
        )
    }
}

export{InfoPage};