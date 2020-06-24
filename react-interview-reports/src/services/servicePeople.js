import { baseAPI } from '../shared/baseAPI'
import { ReportObj } from '../entities/ReportObj'
import { CompanyObj } from '../entities/CompanyObj'
import { CandidateObj } from '../entities/CandidateObj'

// http://localhost:3333/api/companies
// http://localhost:3333/api/candidates
// http://localhost:3333/api/reports
// http://localhost:3333/api/users

class ServicePeople {

    getCompanies() {
        return baseAPI.get('companies')
            .then(response => response.data)
            .then(companyList => {
                let newCompanyList = companyList.map(company => new CompanyObj(company))
                return newCompanyList;
            })
            .catch(error => console.log(error))
    }

    getCandidates() {
        return baseAPI.get('candidates')
            .then(response => response.data)
            .then(candidateList => {
                let newCandidateList = candidateList.map(candidate => new CandidateObj(candidate))
                return newCandidateList;
            })
            .catch(error => console.log(error))
    }

    getCandidatesInfo(id) {
        return baseAPI.get(`candidates/${id}`)
            .then(response => new CandidateObj(response.data))
            .catch(error => console.log(error))
    }

    getReports() {
        return baseAPI.get('reports')
            .then(response => response.data)
            .then(reportList => {
                let newReportList = reportList.map(report => new ReportObj(report))
                return newReportList;
            })
            .catch(error => console.log(error))
    }

    postReport(reportObject) {
        return baseAPI.post('reports', reportObject)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }
}

export const servicePeople = new ServicePeople();