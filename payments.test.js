describe('Payment test(with setup adn tear-down)', () => {
    beforeEach(() => {
        serverNameInput.value = 'Alice';
    })
    it('submitPaymentInfo(), Adds Payment info to allPayment Obj, then updates all tables', () => {
        billAmtInput.value = '100'
        tipAmtInput.value = '20';
        submitPaymentInfo();
        billAmtInput.value = '50.62'
        tipAmtInput.value = '10.62';
        submitPaymentInfo();

        submitServerInfo();
        serverNameInput.value = 'Bob';
        submitServerInfo();
        expect(Object.keys(allPayments).length).toEqual(2);
    })
    it('createCurPayment(), should return object with payment info', () => {
        billAmtInput.value = '100'
        tipAmtInput.value = '20';
        let curPayment = createCurPayment();
        expect(typeof (curPayment)).toBe('object');
        expect(curPayment.billAmt).toEqual("100");
        expect(curPayment.tipAmt).toEqual('20');
    })
    it('should appendTd to tr', () => {
        submitServerInfo();
        expect(serverTbody.childNodes.length).toEqual(1);
    })
    afterEach(function () {
        serverNameInput.value = "";
        allServers = {};
        updateServerTable();
        serverId = 0;
        billAmtInput.value = ''
        tipAmtInput.value = '';
        paymentId = 0;
        allPayments = {}
        for (let td of summaryTds) { td.innerHTML = '' }
        for (let tr of paymentTbody.children) { tr.remove() }
    });
})
