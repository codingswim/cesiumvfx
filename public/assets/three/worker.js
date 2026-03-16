importScripts('/assets/javascripts/three.min.js');
this.addEventListener('message', function (e) {
	// console.log(THREE)
	const {block, RISK_LEVEL, normalOpacity, listener, audioBuffer, labelMaterial} = e.data.payload;
	
  this.postMessage({type: e.data.type, payload: { model, _block }});
}, false);