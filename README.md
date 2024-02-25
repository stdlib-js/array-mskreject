<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# mskreject

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a mask to a provided input array.



<section class="usage">

## Usage

To use in Observable,

```javascript
mskreject = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/array-mskreject@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var mskreject = require( 'path/to/vendor/umd/array-mskreject/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-mskreject@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.mskreject;
})();
</script>
```

#### mskreject( x, mask )

Returns a new array by applying a mask to a provided input array.

```javascript
var x = [ 1, 2, 3, 4 ];

var y = mskreject( x, [ 0, 1, 0, 1 ] );
// returns [ 1, 3 ]
```

The function supports the following parameters:

-   **x**: input array.
-   **mask**: mask array.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If a `mask` array element is falsy, the corresponding element in `x` is **included** in the output array; otherwise, the corresponding element in `x` is "masked" and thus **excluded** from the output array.
-   If provided an input array having a recognized [data type][@stdlib/array/dtypes], the function returns an array having the same [data type][@stdlib/array/dtypes] as the input array. Otherwise, the function **always** returns a "generic" array.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-zero-to@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-bernoulli@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-mskreject@umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Generate a linearly spaced array:
var x = zeroTo( 20, 'generic' );
console.log( x );

// Generate a random mask:
var mask = bernoulli( x.length, 0.5, {
    'dtype': 'generic'
});
console.log( mask );

// Filter an array using the mask:
var y = mskreject( x, mask );
console.log( y );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-mskreject.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-mskreject

[test-image]: https://github.com/stdlib-js/array-mskreject/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/array-mskreject/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-mskreject/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-mskreject?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-mskreject.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-mskreject/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-mskreject/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-mskreject/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-mskreject/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-mskreject/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-mskreject/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-mskreject/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-mskreject/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-mskreject/main/LICENSE

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array-dtypes/tree/umd

</section>

<!-- /.links -->
