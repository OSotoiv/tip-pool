
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];
    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;
  tr.append(newTd);
}
//appends a remove button to the newTr for each server
function appendDeleteBtn(newTr) {
  let rmServer = document.createElement('button');
  rmServer.classList.add('rmServer');
  rmServer.dataset.id = newTr.id
  rmServer.addEventListener('click', removeServer)
  let newTd = document.createElement('td');
  rmServer.innerText = "remove";
  newTd.append(rmServer);
  newTr.append(newTd);
}

function removeServer(e) {
  if (e) e.preventDefault();
  const id = e.target.dataset.id;
  delete allServers[id];
  updateServerTable()
}
