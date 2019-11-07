/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

import { testTokenization } from '../test/testRunner';

testTokenization('cypher', [
	// Comments
	[{
		line: '//',
		tokens: [
			{ startIndex: 0, type: 'comment.cypher' }
		]
	}],

	[{
		line: '// a comment',
		tokens: [
			{ startIndex: 0, type: 'comment.cypher' }
		]
	}],

	[{
		line: '/almost a comment',
		tokens: [
			{ startIndex: 0, type: 'operator.cypher' },
			{ startIndex: 1, type: 'identifier.cypher' },
			{ startIndex: 7, type: 'white.cypher' },
			{ startIndex: 8, type: 'identifier.cypher' },
			{ startIndex: 9, type: 'white.cypher' },
			{ startIndex: 10, type: 'identifier.cypher'}
		]
	}],

	[{
		line: '@x=//comment;',
		tokens: [
			{ startIndex: 0, type: 'identifier.cypher' },
			{ startIndex: 2, type: 'operator.cypher' },
			{ startIndex: 3, type: 'comment.cypher'}
		]
	}],

	// Numbers
	[{
		line: '123',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	[{
		line: '-123',
		tokens: [
			{ startIndex: 0, type: 'operator.cypher' },
			{ startIndex: 1, type: 'number.cypher' }
		]
	}],

	[{
		line: '0xaBc123',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	[{
		line: '0XaBc123',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	[{
		line: '0x',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	[{
		line: '0x0',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	[{
		line: '0xAB_CD',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' },
			{ startIndex: 4, type: 'identifier.cypher' }
		]
	}],

	[{
		line: '$',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	[{
		line: '$-123',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	[{
		line: '$-+-123',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	[{
		line: '$123.5678',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	[{
		line: '$0.99',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	[{
		line: '$.99',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	[{
		line: '$99.',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	[{
		line: '$0.',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	[{
		line: '$.0',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	[{
		line: '.',
		tokens: [
			{ startIndex: 0, type: 'delimiter.cypher' }
		]
	}],

	[{
		line: '123',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	[{
		line: '123.5678',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	[{
		line: '0.99',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	[{
		line: '.99',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	[{
		line: '99.',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	[{
		line: '0.',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	[{
		line: '.0',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	[{
		line: '1E-2',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	[{
		line: '1E+2',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	[{
		line: '1E2',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	[{
		line: '0.1E2',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	[{
		line: '1.E2',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	[{
		line: '.1E2',
		tokens: [
			{ startIndex: 0, type: 'number.cypher' }
		]
	}],

	// Identifiers

	[{
		line: 'MATCH (n)-->(b)',
		tokens: [
			{ startIndex: 0, type: 'keyword.cypher' },
			{ startIndex: 5, type: 'white.cypher' },
			{ startIndex: 6, type: 'delimiter.parenthesis.cypher' },
			{ startIndex: 7, type: 'identifier.cypher' },
			{ startIndex: 8, type: 'delimiter.parenthesis.cypher' },
			{ startIndex: 9, type: 'operator.cypher' },
			{ startIndex: 12, type: 'delimiter.parenthesis.cypher' },
			{ startIndex: 13, type: 'identifier.cypher' },
			{ startIndex: 14, type: 'delimiter.parenthesis.cypher' }
		]
	}],

	[{
		line: '`abc`` 321 `` xyz`',
		tokens: [
			{ startIndex: 0, type: 'identifier.quote.cypher' },
			{ startIndex: 1, type: 'identifier.cypher' },
			{ startIndex: 17, type: 'identifier.quote.cypher' }
		]
	}],

	[{
		line: '`abc',
		tokens: [
			{ startIndex: 0, type: 'identifier.quote.cypher' },
			{ startIndex: 1, type: 'identifier.cypher' }
		]
	}],

	[{
		line: '`abc 321`;',
		tokens: [
			{ startIndex: 0, type: 'identifier.quote.cypher' },
			{ startIndex: 1, type: 'identifier.cypher' },
			{ startIndex: 8, type: 'identifier.quote.cypher' },
			{ startIndex: 9, type: 'delimiter.cypher' }
		]
	}],

	[{
		line: '`abc`` 321 `` xyz`',
		tokens: [
			{ startIndex: 0, type: 'identifier.quote.cypher' },
			{ startIndex: 1, type: 'identifier.cypher' },
			{ startIndex: 17, type: 'identifier.quote.cypher' }
		]
	}],

	[{
		line: '`abc',
		tokens: [
			{ startIndex: 0, type: 'identifier.quote.cypher' },
			{ startIndex: 1, type: 'identifier.cypher' }
		]
	}],

	[{
		line: 'csv',
		tokens: [
			{ startIndex: 0, type: 'keyword.cypher' }
		]
	}],

	[{
		line: '`csv`',
		tokens: [
			{ startIndex: 0, type: 'identifier.quote.cypher' },
			{ startIndex: 1, type: 'identifier.cypher' },
			{ startIndex: 4, type: 'identifier.quote.cypher' }
		]
	}],

	// Strings
	[{
		line: 'require @x=\'a string\';',
		tokens: [
			{ startIndex: 0, type: 'keyword.cypher' },
			{ startIndex: 7, type: 'white.cypher' },
			{ startIndex: 8, type: 'identifier.cypher' },
			{ startIndex: 10, type: 'operator.cypher' },
			{ startIndex: 11, type: 'string.cypher' },
			{ startIndex: 21, type: 'delimiter.cypher' }
		]
	}],

	[{
		line: 'require @x="a string";',
		tokens: [
			{ startIndex: 0, type: 'keyword.cypher' },
			{ startIndex: 7, type: 'white.cypher' },
			{ startIndex: 8, type: 'identifier.cypher' },
			{ startIndex: 10, type: 'operator.cypher' },
			{ startIndex: 11, type: 'string.double.cypher' },
			{ startIndex: 21, type: 'delimiter.cypher' }
		]
	}],

	[{
		line: '\'a \'\' string with quotes\'',
		tokens: [
			{ startIndex: 0, type: 'string.cypher' },
		]
	}],

	[{
		line: '"a "" string with quotes"',
		tokens: [
			{ startIndex: 0, type: 'string.double.cypher' },
		]
	}],

	[{
		line: '\'a " string with quotes\'',
		tokens: [
			{ startIndex: 0, type: 'string.cypher' },
		]
	}],

	[{
		line: '"a ` string with quotes"',
		tokens: [
			{ startIndex: 0, type: 'string.double.cypher' },
		]
	}],

	[{
		line: '\'a // string with comment\'',
		tokens: [
			{ startIndex: 0, type: 'string.cypher' },
		]
	}],

	[{
		line: '"a // string with comment"',
		tokens: [
			{ startIndex: 0, type: 'string.double.cypher' },
		]
	}],

	[{
		line: '\'a endless string',
		tokens: [
			{ startIndex: 0, type: 'string.cypher' },
		]
	}],

	[{
		line: '"a endless string',
		tokens: [
			{ startIndex: 0, type: 'string.double.cypher' },
		]
	}],

	// Operators
	[{
		line: 'SET @x=@x+1',
		tokens: [
			{ startIndex: 0, type: 'keyword.cypher' },
			{ startIndex: 3, type: 'white.cypher' },
			{ startIndex: 4, type: 'identifier.cypher' },
			{ startIndex: 6, type: 'operator.cypher' },
			{ startIndex: 7, type: 'identifier.cypher' },
			{ startIndex: 9, type: 'operator.cypher' },
			{ startIndex: 10, type: 'number.cypher' }
		]
	}],

	[{
		line: '@x^=@x',
		tokens: [
			{ startIndex: 0, type: 'identifier.cypher' },
			{ startIndex: 2, type: 'operator.cypher' },
			{ startIndex: 4, type: 'identifier.cypher' }
		]
	}],

	[{
		line: 'WHERE myfield IS NOT NULL',
		tokens: [
			{ startIndex: 0, type: 'keyword.cypher' },
			{ startIndex: 5, type: 'white.cypher' },
			{ startIndex: 6, type: 'identifier.cypher' },
			{ startIndex: 13, type: 'white.cypher' },
			{ startIndex: 14, type: 'operator.cypher' },
			{ startIndex: 16, type: 'white.cypher' },
			{ startIndex: 17, type: 'operator.cypher' },
			{ startIndex: 20, type: 'white.cypher' },
			{ startIndex: 21, type: 'keyword.cypher' }
		]
	}]
]);
