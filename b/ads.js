var videoContent = id('contentElement');
var adDisplayContainer = new google.ima.AdDisplayContainer(id('adContainer'),videoContent);
function ad() {
	id('mainContainer').style.display = 'block';
	adDisplayContainer.initialize();
	requestAds();
}
var adsLoader = new google.ima.AdsLoader(adDisplayContainer);
adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,onAdsManagerLoaded,false);
adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,onAdError,false);
function onAdError(adErrorEvent) {
  console.log(adErrorEvent.getError());
  adsManager.destroy();
}
var contentEndedListener = function() {adsLoader.contentComplete();localStorage.coins = parseFloat(localStorage.coins) + 250;location.reload()};
videoContent.onended = contentEndedListener;
var adsRequest = new google.ima.AdsRequest();
adsRequest.adTagUrl = 'http://googleads.g.doubleclick.net/pagead/ads?ad_type=video&client=ca-games-pub-4968145218643279&videoad_start_delay=0&description_url=http%3A%2F%2Fwww.google.com&max_ad_duration=40000&adtest=on';
adsRequest.linearAdSlotWidth = window.innerWidth;
adsRequest.linearAdSlotHeight = window.innerHeight;
adsRequest.nonLinearAdSlotWidth = window.innerWidth;
adsRequest.nonLinearAdSlotHeight = window.innerHeight;
id('playButton').addEventListener('click', ad);
function requestAds() {
  adsLoader.requestAds(adsRequest);
  videoContent.load();
}
function onAdsManagerLoaded(adsManagerLoadedEvent) {
  adsManager = adsManagerLoadedEvent.getAdsManager(videoContent);
  adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,onAdError);
  adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,onContentPauseRequested);
  adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,onContentResumeRequested);
  try {
    adsManager.init(window.innerWidth, window.innerWidth*(360/640), google.ima.ViewMode.NORMAL);
    adsManager.start();
  } catch (adError) {
  }
}
function onContentPauseRequested() {
  videoContent.removeEventListener('ended', contentEndedListener);
  videoContent.pause();
}
function onContentResumeRequested() {
  videoContent.addEventListener('ended', contentEndedListener);
  videoContent.play();
}