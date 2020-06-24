import React from 'react';
import { AdminHeader } from '../AdminHeader/AdminHeader';
import { search } from '../../../shared/utilities';
import { SearchReportPage } from './SearchReportPage/SearchReportPage';
import { Container, Row, Col } from 'react-materialize';
import { servicePeople } from '../../../services/servicePeople';
import { NavList } from './NavList/NavList';
import { GridCandidates } from './GridCandidates/GridCandidates';
import styles from './CreateReportPage.module.css'
import { CompanySelector } from './CompanySelector/CompanySelector'

class CreateReportPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            candidates: [],
            filteredCandid: [],
            companyList: []
        }
    }
    componentDidMount() {
        servicePeople.getCandidates()
            .then(data => {
                this.setState({ candidates: data, filteredCandid: data })
            })
        servicePeople.getCompanies()
            .then(companyList => {
                this.setState({ companyList })
            })
    }

    searchedCandid = (textInput) => {
        const res = search(this.state.candidates, ["name"], textInput)
        this.setState({ filteredCandid: res })
    }



    render() {
        return (
            <div>
                <AdminHeader />
                <Container>
                    <SearchReportPage searchedCandid={this.searchedCandid} />
                </Container>
                <Container >
                    <Row>
                        <Container className={styles.main}>
                            <NavList />
                        </Container>
                        <GridCandidates candidates={this.state.filteredCandid} />
                    </Row>
                </Container>
                <Container>
                    <Row>

                    </Row>

                </Container>


            </div>
        )
    }
}

export { CreateReportPage }