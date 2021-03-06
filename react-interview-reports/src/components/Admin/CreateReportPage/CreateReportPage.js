import React from 'react';

import styles from './CreateReportPage.module.css'

import { Link } from 'react-router-dom';
import { NavList } from './NavList/NavList';
import { search } from '../../../shared/utilities';
import { AdminHeader } from '../AdminHeader/AdminHeader';
import { ReportDetails } from './ReportDetails/ReportDetails';
import { Authentication } from '../../../services/AuthService';
import { servicePeople } from '../../../services/servicePeople';
import { Container, Row, Col, Button } from 'react-materialize';
import { GridCandidates } from './GridCandidates/GridCandidates';
import { CompanySelector } from './CompanySelector/CompanySelector';
import { SearchReportPage } from './SearchReportPage/SearchReportPage';

class CreateReportPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            candidates: [],
            filteredCandid: [],
            companyList: [],
            wizardStep: 1,
            buttonText: 'Next',
            newReportData: {
                candidateId: null,
                candidateName: null,
                companyId: null,
                companyName: null,
                interviewDate: '',
                phase: '',
                status: '',
                note: ''
            }
        }
    }
    componentDidMount() {
        servicePeople.getCandidates()
            .then(data => {
                this.setState({ candidates: data, filteredCandid: data })
            })
        servicePeople.getCompanies()
            .then(companyList => this.setState({ companyList }))

        let first = document.querySelector('#first')
        first.className = `${styles.bold}`;
    }

    searchedCandid = (textInput) => {
        const res = search(this.state.candidates, ["name"], textInput)
        this.setState({ filteredCandid: res })
    }

    nextStep = () => {
        let currentStep = this.state.wizardStep;

        if (currentStep === 1) {
            if (this.state.newReportData.candidateId !== null) {
                currentStep++;
                let removeFirst = document.querySelector("#first")
                removeFirst.className = "";
                let first = document.querySelector('#second')
                first.className = `${styles.bold}`;
                this.setState({ wizardStep: currentStep })
            } else {
                alert('You must select a candidate first!')
            }
        } else if (currentStep === 2) {
            if (this.state.newReportData.companyId !== null) {
                currentStep++;
                let removeSecond = document.querySelector("#second")
                removeSecond.className = "";
                let first = document.querySelector('#third')
                first.className = `${styles.bold}`;
                this.setState({ wizardStep: currentStep })
                this.setState({ buttonText: 'Create Report' })

            } else {
                alert('You must select a company first!')
            }

        } else if (currentStep === 3) {
            console.log('sending data')
            // this.getFormData();
            let token = JSON.parse(sessionStorage.getItem('accessToken'));
            console.log(token)
            console.log(this.state.newReportData)
            servicePeople.post(this.state.newReportData, token)
        }
    }

    previousStep = () => {
        this.setState({ buttonText: 'Next' })
        let currentStep = this.state.wizardStep;
        if (currentStep > 1) {
            currentStep--;
            const removePrev = document.querySelector('#third')
            removePrev.className = '';
            const addPrevSec = document.querySelector('#second')
            addPrevSec.className = `${styles.bold}`
            this.setState({ wizardStep: currentStep })
            if (currentStep < 2) {
                currentStep--;
                const addPrevFirst = document.querySelector('#first')
                addPrevFirst.className = `${styles.bold}`
                const removePrevSec = document.querySelector('#second')
                removePrevSec.className = ''
            }
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
        someReport.candidateName = name;
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

    // getFormData = () => {

    //     let someReport = { ...this.state.newReportData }
    //     let $reportStatus = document.getElementById('reportStatus');
    //     let $reportPhase = document.getElementById('reportPhase');

    //     let $reportNotes = document.getElementById('reportNotes');
    //     console.log($reportStatus)

    //     someReport.status = $reportStatus.value;
    //     someReport.phase = $reportPhase.value;

    //     someReport.note = $reportNotes.value;
    //     console.log(someReport, "some report");
    //     setTimeout(() => { this.setState({ newReportData: someReport }, console.log('state test', this.state.newReportData)) }, 2000);//this state is not being set for some reason :O


    // }
    setDate = (date) => {
        let someReport = { ...this.state.newReportData }
        someReport.interviewDate = date;
        this.setState({ newReportData: someReport })
        console.log(date)
    }
    setPhase = (phase) => {
        let someReport = { ...this.state.newReportData }
        console.log(phase)
        someReport.phase = phase;
        this.setState({ newReportData: someReport })
    }
    setStatus = (status) => {
        let someReport = { ...this.state.newReportData }
        console.log(status)
        someReport.status = status;
        this.setState({ newReportData: someReport })
    }
    setNotes = (notes) => {
        let someReport = { ...this.state.newReportData }
        console.log(notes)
        someReport.note = notes;
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

                                {this.state.wizardStep === 1 && <GridCandidates
                                    candidates={this.state.filteredCandid}
                                    getData={this.getCandidateData} />}

                                {this.state.wizardStep === 2 && <CompanySelector
                                    candidate={this.state.newReportData.candidateName}
                                    companyList={this.state.companyList}
                                    getData={this.getCompanyData} />}

                                {this.state.wizardStep === 3 && <ReportDetails
                                    candidate={this.state.newReportData.candidateName}
                                    company={this.state.newReportData.companyName}
                                    setDate={this.setDate}
                                    setPhase={this.setPhase}
                                    setStatus={this.setStatus}
                                    setNotes={this.setNotes}
                                />}
                            </Row>
                            <Row className={styles.btndiv} >
                                <Col lg={4}><Button onClick={this.previousStep} className={styles.btn1} >Previous</Button></Col>

                                {this.state.wizardStep !== 3 ?
                                    <Button
                                        onClick={this.nextStep}
                                        className={`${styles.btn}
                                        ${styles.btnEnd}`}
                                    >{this.state.buttonText}
                                    </Button>
                                    : <Link to="/admin/reports"> <Button
                                        onClick={this.nextStep}
                                        className={`${styles.btn}
                                        ${styles.btnEnd}`}
                                    >{this.state.buttonText}
                                    </Button> </Link>
                                }
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export { CreateReportPage }