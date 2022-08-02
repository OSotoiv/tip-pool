describe('Helpers test(with setup and tear-down)', () => {
    beforeEach(() => {
        serverNameInput.value = 'Alice';
    });
    it('sumPaymentTotal() sum all payments, all tips', () => {
        billAmtInput.value = '100'
        tipAmtInput.value = '20';
        submitPaymentInfo();
        billAmtInput.value = '50.33'
        tipAmtInput.value = '10.03';
        submitPaymentInfo();

        submitServerInfo();
        serverNameInput.value = 'Bob';
        submitServerInfo();
        let tipAmt = sumPaymentTotal('tipAmt');
        let billAmt = sumPaymentTotal('billAmt')
        expect(tipAmt).toEqual(30.03);
        expect(billAmt).toEqual(150.33)
    });
    it('should calculat tip amount calculateTipPercent()', () => {
        let billAmt = "100";
        let tipAmt = "20";
        let tipPercent = calculateTipPercent(billAmt, tipAmt);
        expect(tipPercent).toEqual(20)
    });
    it('should appendTd to tr', () => {
        submitServerInfo();
        expect(serverTbody.childNodes.length).toEqual(1);
    });
    afterEach(function () {
        serverNameInput.value = "";
        allServers = {};
        serverId = 0;
        billAmtInput.value = ''
        tipAmtInput.value = '';
        paymentId = 0;
        allPayments = {}
        for (let td of summaryTds) { td.innerHTML = '' }
        for (let tr of paymentTbody.children) { tr.remove() }
        updateServerTable();
    });
})
