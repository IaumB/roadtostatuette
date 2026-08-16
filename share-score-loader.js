(() => {
  const doc = document;
  if (doc.getElementById('week-start-sunday')) return;

  const week = doc.createElement('script');
  week.id = 'week-start-sunday';
  week.src = '/week-start-sunday.js?v=1';
  week.onload = () => {
    if (doc.getElementById('share-score-inject')) return;
    const share = doc.createElement('script');
    share.id = 'share-score-inject';
    share.src = '/share-score-inject.js?v=1';
    doc.body.appendChild(share);
  };
  doc.body.appendChild(week);
})();
