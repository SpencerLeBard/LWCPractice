public with sharing class ReportController {

	@AuraEnabled(cacheable=true)
    public static Reports.ReportFactWithDetails getReportData(){
		List <Report> reportList = [SELECT Id, Name FROM Report where Name = 'Simple Account Report' LIMIT 1]; 
        String reportId = (String)reportList.get(0).get('Id');

		// Run a report synchronously
		Reports.reportResults results = Reports.ReportManager.runReport(reportId, true);

		//get metadata
		Reports.ReportMetadata rm = results.getReportMetadata();

		//Get the first down-grouping in the report
		Reports.Dimension dim = results.getGroupingsDown();
			System.debug(dim);
		Reports.GroupingValue groupingVal = dim.getGroupings()[0];
			System.debug(groupingVal);

		// Construct a fact map key, using the grouping key value
		String factMapKey = groupingVal.getKey() + '!T';
		System.debug(factMapKey);

		// Get the fact map from the report results
		Reports.ReportFactWithDetails factDetails = (Reports.ReportFactWithDetails)results.getFactMap().get(factMapKey);
			System.debug('fact details: ' + factDetails);

		// Get the first summary amount from the fact map
		Reports.SummaryValue sumVal = factDetails.getAggregates()[0];
			System.debug('Summary Value: ' + sumVal.getLabel());

		// Get the field value from the first data cell of the first row of the report
		Reports.ReportDetailRow detailRow = factDetails.getRows()[0];
			System.debug('field value of first data cell of first row: ' + detailRow.getDataCells()[0].getLabel());
        
        return factDetails;
        }
}

// 10:51:45:210 USER_DEBUG [26]|DEBUG|fact details: Reports.ReportFactWithDetails[aggregates=(Reports.SummaryValue[label=9, value=9]), key=0!T, rows=(Reports.ReportDetailRow[dataCells=(Reports.ReportDataCell[label=Polaris Auto EU, value=0015Y00004nt2nmQAA], Reports.ReportDataCell[label=Polaris Auto Inc, value=0015Y00004nt2lqQAA], Reports.ReportDataCell[label=Spencer LeBard, value=0055Y00000GYEddQAH])], Reports.ReportDetailRow[dataCells=(Reports.ReportDataCell[label=Polaris Auto Inc, value=0015Y00004nt2lqQAA], Reports.ReportDataCell[l