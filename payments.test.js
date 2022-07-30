describe('Payment test(with setup adn tear-down)', () => {
    beforeEach(() => {
        serverNameInput.value = 'Alice';
    })
    it('submitPaymentInfo(), Adds Payment info to allPayment Obj, then updates all tables', () => {
        billAmtInput.value = '100'
        tipAmtInput.value = '20';
        submitPaymentInfo();
        billAmtInput.value = '50'
        tipAmtInput.value = '10';
        submitPaymentInfo();

        submitServerInfo();
        serverNameInput.value = 'Bob';
        submitServerInfo();
        console.dir(allPayments)
        expect(tipAmt).toEqual(30.00);
    })
    it('should calculat tip amount calculateTipPercent()', () => {
        let billAmt = "100";
        let tipAmt = "20";
        let tipPercent = calculateTipPercent(billAmt, tipAmt);
        expect(tipPercent).toEqual(20)
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
    });
})
