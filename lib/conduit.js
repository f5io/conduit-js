(function(w) {

	'use strict';

	var _ = {
		fps : 60,
		rafLast : 0,
		requestAnimFrame : (function(){
			return	w.requestAnimationFrame			||
					w.webkitRequestAnimationFrame	||
					w.mozRequestAnimationFrame		||
					function(callback, element) {
						var currTime = new Date().getTime();
						var timeToCall = Math.max(0, 16 - (currTime - _.rafLast));
						var id = w.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
						_.rafLast = currTime + timeToCall;
						return id;
					};
		})(),
		cancelAnimFrame : (function() {
			return	w.cancelAnimationFrame				||
					w.cancelRequestAnimationFrame		||
					w.webkitCancelAnimationFrame		||
					w.webkitCancelRequestAnimationFrame	||
					w.mozCancelAnimationFrame			||
					w.mozCancelRequestAnimationFrame	||
					function(id) {
						clearTimeout(id);
					};
		})()
	};

	function tick(val) {
		var _t = cD;
		_t.raf = _.requestAnimFrame.call(w, tick);
		_t.now = new Date().getTime();
		_t.delta = _t.now - _t.then;
		if (_t.delta > _t.interval) {
			for (var n in _t.pipeline) {
				if (_t.pipeline.hasOwnProperty(n)) _t.pipeline[n](_t.delta);
			}
			_t.then = _t.now - (_t.delta % _t.interval);
		}
	}

	var Conduit = function() {
		var _t = this;
		_t.pipeline = {};
		_t.then = new Date().getTime();
		_t.now = undefined;
		_t.raf = undefined;
		_t.delta = undefined;
		_t.interval = 1000 / _.fps;
		_t.running = false;
	};

	Conduit.prototype = {
		add : function(name, fn) {
			this.pipeline[name] = fn;
			return this;
		},
		remove : function(name) {
			delete this.pipeline[name];
			return this;
		},
		start : function(fps) {
			if (!this.running) {
				_.fps = fps || _.fps;
				this.interval = 1000 / _.fps;
				tick();
				this.running = true;
			}
			return this;
		},
		pause : function() {
			if (this.running) {
				_.cancelAnimFrame.call(w, this.raf);
				this.running = false;
			}
			return this;
		},
		setFPS : function(fps) {
			_.fps = fps;
			this.interval = 1000 / _.fps;
			return this;
		}
	};

	var cD = new Conduit();

	w.Conduit = w.cD = cD;

})(window);