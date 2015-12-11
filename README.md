angular-esc-key
=====

Add this attribute to your element to trigger angular actions when the escape key is pressed.

It's a simple angularjs directive that triggers the events in the value when the escape key is pressed.

Because it's such a small amount of code, it should be able to read and understand so you can even tweak it for your needs.  In fact, I encourage it!

Available on Bower
-----

`bower install angular-esc-key`

How To
-----
Simply include the esc-key module

```javascript
var app = angular.module('app', [ 'esc-key' ]);
```

Then use the esc-key attribute on element.

```html
<input type="text" esc-key="action()" />
```

Note that the value of the `esc-key` attribute is what is activated when the key is pressed.  In the example above the `$scope.action` function of the controller will be called

This is based on (and pretty much a tribute to) [this StackOverflow answer](http://stackoverflow.com/a/27044244/1178921).  I built this as a way that people could see it, change it over time, and pull it in as a dependency.

That's it!

Check out the github pages example here: http://deltreey.github.io/angular-esc-key/
