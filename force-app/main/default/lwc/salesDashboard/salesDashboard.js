import { LightningElement, wire } from 'lwc';

import getReportData from '@salesforce/apex/ReportController.getReportData';

export default class salesDashboard extends LightningElement {
    reportData = [];

    @wire(getReportData)
    wiredReportData({ error, data }) {
        if (data) {
            this.reportData = data;
        } else if (error) {
            console.error(error);
        }
    }
}
