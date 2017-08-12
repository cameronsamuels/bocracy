var vc = $('contentElement'), adc = new google.ima.AdDisplayContainer($('adContainer'), vc),
al = new google.ima.AdsLoader(adc), ar = new google.ima.AdsRequest(),
cel = function() {
    al.contentComplete();
    ls.coins = parseFloat(ls.coins) + 50;
    location.reload()
};
function ad() {
  $('mainContainer').style.display = 'block';
  adc.initialize();
  ra();
}
al.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, aml),
al.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, oe), vc.onended = cel;
function oe(e) {
  console.log(e.getError());
  am.destroy();
}
ar.adTagUrl = 'http://googleads.g.doubleclick.net/pagead/ads?ad_type=video&client=ca-games-pub-4968145218643279&videoad_start_delay=0&description_url=http%3A%2F%2Fwww.google.com&max_ad_duration=40000&adtest=on';
ar.linearAdSlotWidth = innerWidth, ar.linearAdSlotHeight = innerHeight, ar.nonLinearAdSlotWidth = innerWidth, ar.nonLinearAdSlotHeight = innerHeight;
$('playButton').addEventListener('click', ad);
function ra() {
  al.requestAds(ar);
  vc.load();
}
function aml(e) {
  am = e.getAdsManager(vc);
  am.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, oe),
    am.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, cp),
    am.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, cr);
  try {
    am.init(innerWidth, innerWidth * (360 / 640), google.ima.ViewMode.NORMAL);
    am.start();
  } catch (e) {}
}
function cp() {
  vc.removeEventListener('ended', cel);
  vc.pause();
}
function cr() {
  vc.addEventListener('ended', cel);
  vc.play();
}