/* eslint-disable camelcase */
if ('false' === cancelled && !gs.nil(contractID)) {
	var childContractValidationResult = ContractRenewalUtils.verifyContractValidation(contractID);
	if (childContractValidationResult.shouldAllowRenewal) {
		var requestID = new sn_itam_common.ContractRenewalUtils().createRenewRequest(contractID);
		var requestTable = sn_itam_common.ContractRenewalUtils.RENEWAL_REQUEST_TABLE;
		if (gs.nil(requestID)) {
			response.sendRedirect('ast_contract.do?sys_id=' + contractID);
		} else {
			response.sendRedirect(requestTable + '.do?sys_id=' + requestID);
		}
	} else {
		gs.addErrorMessage(childContractValidationResult.message);
		response.sendRedirect('ast_contract.do?sys_id=' + contractID);
	}
}
