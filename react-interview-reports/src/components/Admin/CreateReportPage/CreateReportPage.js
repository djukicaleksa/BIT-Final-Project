import React from 'react';
import { AdminHeader } from '../AdminHeader/AdminHeader';
import { search } from '../../../shared/utilities';
import { SearchReportPage } from './SearchReportPage/SearchReportPage';
import { Container, Row, Col, Button } from 'react-materialize';
import { servicePeople } from '../../../services/servicePeople';
import { NavList } from './NavList/NavList';
import { GridCandidates } from './GridCandidates/GridCandidates';
import styles from './CreateReportPage.module.css'
import {ReportDetails} from './ReportDetails/ReportDetails';
import { Authentication } from '../../../services/AuthService';
import { CompanySelector } from './CompanySelector/CompanySelector'



class CreateReportPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            candidates: [],
            filteredCandid: [],
            companyList: [],
            wizardStep: 1,
            newReportData: { name: null, candidateId: null, candidateName: null, companyId: null, companyName: null, interviewDate: null, phase: null, status: null, note: null }
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
        let someReport = { ...this.state.newReportData }
        someReport.name = name;
        someReport.candidateId = id
        this.setState({ newReportData: someReport })


    }

    getCompanyData = (id, name) => {
        console.log(id, name);
        let someReport = { ...this.state.newReportData }
        someReport.companyName = name;
        someReport.companyId = id;
        this.setState({ newReportData: someReport })
    }

    render() {
        const access = Authentication.isLogon()
        if (!access) {
            this.props.history.push('/admin')
        }
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
                                {this.state.wizardStep === 1 && <GridCandidates candidates={this.state.filteredCandid} getData={this.getCandidateData} />}
                                {this.state.wizardStep === 2 && <CompanySelector companyList={this.state.companyList} getData={this.getCompanyData} />}
                                {this.state.wizardStep === 3 && <ReportDetails />}
                            </Row>
                            <Row className={styles.btndiv} >
                                <Col lg={4}><Button onClick={this.previousStep} className={styles.btn} >Previous</Button></Col>
                                <Col lg={8}><Button onClick={this.nextStep} className={`${styles.btn} ${styles.btnEnd}`} >Next</Button></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export { CreateReportPage }