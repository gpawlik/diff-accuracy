const calculateResult = diff => {
  const report = {
    removedCount: 0,
    addedCount: 0,
    unchangedCount: 0
  }

  const reportResult = diff.reduce((memo, item) => {
    if(item.removed) {
      memo.removedCount += item.count;
    } else if(item.added) {
      memo.addedCount += item.count;
    } else {
      memo.unchangedCount += item.count;
    }

    return memo;
  }, report);

  return reportResult;
}

const calculateAccuracy = ({ removedCount, unchangedCount }) => {
  const oldLength = unchangedCount + removedCount;

  if(oldLength > 0) {
    return Math.round(unchangedCount/oldLength * 100)/100;
  } else if(oldLength === 0 && unchangedCount === 0) {
    return 1;
  } else {
    return 0;
  }
}

const getReport = diff => {
  const result = calculateResult(diff);
  const accuracy = calculateAccuracy(result);

  console.log('Accuracy:', accuracy);

  return {
    result,
    accuracy
  }
}

export default getReport;
