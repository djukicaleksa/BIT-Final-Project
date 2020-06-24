import React from 'react';
import {AdminHeader} from '../AdminHeader/AdminHeader';
import{search} from '../../../shared/utilities';
import {SearchReportPage} from './SearchReportPage/SearchReportPage';
import {Container, Row, Col, Button} from 'react-materialize';
import {servicePeople} from '../../../services/servicePeople';
import {NavList} from './NavList/NavList';
import {GridCandidates} from './GridCandidates/GridCandidates';
import styles from './CreateReportPage.module.css'
import {ReportDetails} from './ReportDetails/ReportDetails';


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
                <Container className={styles.fullWidth}>
                    <Row className={styles.flex}>
                        <Col lg={4}>
                    <NavList />
                    </Col>
                    <Col lg={8}>
                        <Row>
                      <GridCandidates candidates={this.state.filteredCandid}/>
                      <div className={styles.btndiv} >
                     <Button className={styles.btn} >Next</Button>
                      </div>
                      </Row>
                      </Col>
                    </Row>
                    </Container>
            </div>
        )
    }
}

export { CreateReportPage }