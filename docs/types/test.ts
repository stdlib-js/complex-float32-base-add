/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import Complex64 = require( '@stdlib/complex-float32-ctor' );
import add = require( './index' );


// TESTS //

// The function returns a complex number...
{
	const z = new Complex64( 1.0, 1.0 );

	add( z, z ); // $ExpectType Complex64
}

// The compiler throws an error if the function is provided a first argument which is not a complex number...
{
	const z = new Complex64( 1.0, 1.0 );

	add( true, z ); // $ExpectError
	add( false, z ); // $ExpectError
	add( null, z ); // $ExpectError
	add( undefined, z ); // $ExpectError
	add( '5', z ); // $ExpectError
	add( [], z ); // $ExpectError
	add( {}, z ); // $ExpectError
	add( ( x: number ): number => x, z ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a complex number...
{
	const z = new Complex64( 1.0, 1.0 );

	add( z, true ); // $ExpectError
	add( z, false ); // $ExpectError
	add( z, null ); // $ExpectError
	add( z, undefined ); // $ExpectError
	add( z, '5' ); // $ExpectError
	add( z, [] ); // $ExpectError
	add( z, {} ); // $ExpectError
	add( z, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const z = new Complex64( 1.0, 1.0 );

	add(); // $ExpectError
	add( z ); // $ExpectError
	add( z, z, z ); // $ExpectError
}
