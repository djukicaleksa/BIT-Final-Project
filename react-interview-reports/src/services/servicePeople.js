import { baseAPI } from '../shared/baseAPI'

// http://localhost:3333/api/companies
// http://localhost:3333/api/candidates
// http://localhost:3333/api/reports
// http://localhost:3333/api/users

class ServicePeople {

    getCompanies() {
        return baseAPI.get('companies')
            .then(response => response.data)
            .catch(error => console.log(error))
    }

    getCandidates() {
        return baseAPI.get('candidates')
            .then(response => response.data)
            .catch(error => console.log(error))
    }

    getReports() {
        return baseAPI.get('reports')
            .then(response => response.data)
            .catch(error => console.log(error))
    }

    postReport(reportObject) {
        return baseAPI.post('reports', reportObject)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }
}

export const servicePeople = new ServicePeople();