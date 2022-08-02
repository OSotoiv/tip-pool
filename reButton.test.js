describe("test for my delete button", () => {
    beforeEach(() => {
        serverNameInput.value = 'Alice';
    });
    it('should add button to remove server', () => {
        submitServerInfo();
        const tr = serverTbody.childNodes;
        const button = tr[0].childNodes[2].firstChild.nodeName;
        expect(button).toBe('BUTTON');

    });
    it('should add button to remove payment', () => {
        billAmtInput.value = '100'
        tipAmtInput.value = '20';
        submitPaymentInfo();
        const tr = paymentTbody.childNodes;
        const button = tr[0].childNodes[3].firstChild.nodeName;
        expect(button).toBe('BUTTON');
    })
    it('should  remove server from TR & allServers{}', () => {
        submitServerInfo();

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
        for (let tr of paymentTbody.childNodes) { tr.remove() }
        updateServerTable();
    });
})