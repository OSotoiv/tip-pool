describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });
  it('should not update serverID if input is empty', () => {
    serverNameInput.value = "";
    submitServerInfo();
    expect(serverId).toEqual(0);
  });
  //tip amount should only work with numbers
  it('should not allow Bill,Tip, to be blank', () => {
    billAmtInput.value = '100'
    tipAmtInput.value = '';
    submitPaymentInfo();
    expect(paymentId).toEqual(0);
    expect(Object.keys(allPayments).length).toEqual(0);
  });
  it('should not allow Bill/Tip to be words', () => {
    billAmtInput.value = 'words'
    tipAmtInput.value = '100';
    submitPaymentInfo();
    expect(paymentId).toEqual(0);
    expect(Object.keys(allPayments).length).toEqual(0);
  })
  //earning for server should be divided evenly with only 2decimal places
  it('should divide total tip evenly between servers', () => {
    billAmtInput.value = '100'
    tipAmtInput.value = '20';
    submitPaymentInfo();
    billAmtInput.value = '50'
    tipAmtInput.value = '10';
    submitPaymentInfo();

    submitServerInfo();
    serverNameInput.value = 'Bob';
    submitServerInfo();
    let tipAverage = sumPaymentTotal('tipAmt') / Object.keys(allServers).length;
    expect(tipAverage).toEqual(15.00);

  })
  //handles cents and dollars

  afterEach(function () {
    serverNameInput.value = "";
    allServers = {};
    updateServerTable();
    serverId = 0;
    billAmtInput.value = ''
    tipAmtInput.value = '';
    paymentId = 0;
  });
});
