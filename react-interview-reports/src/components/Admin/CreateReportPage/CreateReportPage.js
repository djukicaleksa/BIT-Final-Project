import React from 'react';
import { AdminHeader } from '../AdminHeader/AdminHeader';
import { search } from '../../../shared/utilities';
import { SearchReportPage } from './SearchReportPage/SearchReportPage';
import { Container, Row, Col, Button } from 'react-materialize';
import { servicePeople } from '../../../services/servicePeople';
import { NavList } from './NavList/NavList';
import { GridCandidates } from './GridCandidates/GridCandidates';
import styles from './CreateReportPage.module.css'
import { CompanySelector } from './CompanySelector/CompanySelector'
import { ReportDetails } from './ReportDetails/ReportDetails'

class CreateReportPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            candidates: [],
            filteredCandid: [],
            companyList: [],
            wizardStep: 1,
            newReportData: []
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
        const res = search(this.state.candidates, ["name", "company"], textInput)
        this.setState({ filteredCandid: res })
    }

    nextStep = () => {
        let currentStep = this.state.wizardStep;
        if (currentStep < 3) {
            currentStep++;
            this.setState({ wizardStep: currentStep })
        } else {
            this.uploadData()
        }
    }

    previousStep = () => {
        let currentStep = this.state.wizardStep;
        if (currentStep > 1) {
            currentStep--;
            this.setState({ wizardStep: currentStep })
        } else {
            alert('NO STEPS BEHIND')
        }
    }


    uploadData = () => {
        console.log('test');

    }

    getCandidateData = (id, name) => {
        console.log(id, name);

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
                                <GridCandidates candidates={this.state.filteredCandid} getData={this.getCandidateData} />
                            </Row>
                            <Row className={styles.btndiv} >
                                <Col lg={4}><Button onClick={this.previousStep} className={styles.btn} >Previous</Button></Col>
                                <Col lg={8}><Button onClick={this.nextStep} className={`${styles.btn} ${styles.btnEnd}`} >Next</Button></Col>


                            </Row>
                        </Col>
                    </Row>

                    <ReportDetails />
                </Container>
            </div>
        )
    }
}

export { CreateReportPage }