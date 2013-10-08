#Conduit

##A lightweight wrapper for the HTML5 requestAnimationFrame API.

**Author:** *Joe Harlow* (<joe@f5.io>)

---

`Conduit` provides a simple wrapper for the HTML5 `requestAnimationFrame` API. It is library agnostic and has no dependencies.

`Conduit` allows you to define functions to be called within the browsers render pipeline, without making multiple calls to `requestAnimationFrame`. It also provides functionality which attempts to run the defined functions at a specified FPS.

###Browser Support
---

`Conduit` is built on the `requestAnimationFrame` API. When this is not available it will polyfill back to a simple `setTimeout` method.

`Conduit` will work in most browsers but will use native methods in the following browsers:

- Microsoft Internet Explorer 10+
- Mozilla Firefox 4.0+
- Google Chrome 10.0+
- Apple Safari 6.0+
- Opera 15.0+

###Installation
---

`Conduit` can be installed with `bower`, by running:

`bower install conduit`

###Usage
---

`Conduit` can be accessed using either `Conduit` or `cD`. From here on out, we will refer to it as `Conduit`.

`Conduit` defaults to an approximated `60` frames per second.

###Methods (chainable)
---

####`add`(`name /* String */`, `fn /* Function */`)

The `add` method is used to define a function (`fn`) which will be added to the `requestAnimationFrame` callback. The `name` is used to reference the function when it needs to be removed. The time since last tick (`delta`) will be passed into the function.

#####Example

    Conduit.add('test', function(delta){
		console.log('Browser Paint');
		console.log('Time since last tick: ' + delta);
	});

####`remove`(`name /* String */`)

The `remove` method is used to remove a defined function from the `requestAnimationFrame` callback.

#####Example

    Conduit.remove('test');

####`start`([`fps /* Number */`])

The `start` method begins the `requestAnimationFrame` callback. This method optionally takes a number to be used as the approximated FPS for the defined functions to run at.

#####Example

    Conduit.start(30);

####`pause`()

The `pause` method cancels the `requestAnimationFrame` callback.

#####Example

    Conduit.pause();

####`setFPS`(`fps /* Number */`)

The `setFPS` method takes a number to be used as an approximated FPS for the defined functions to run at.

#####Example

    Conduit.setFPS(25);

###License
---

Copyright (C) 2013 Joe Harlow (Fourth of 5 Limited)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

