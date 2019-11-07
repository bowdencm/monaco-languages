/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

import IRichLanguageConfiguration = monaco.languages.LanguageConfiguration;
import ILanguage = monaco.languages.IMonarchLanguage;

export const conf: IRichLanguageConfiguration = {
	comments: {
		lineComment: '--',
		blockComment: ['/*', '*/'],
	},
	brackets: [
		['{', '}'],
		['[', ']'],
		['(', ')']
	],
	autoClosingPairs: [
		{ open: '{', close: '}' },
		{ open: '[', close: ']' },
		{ open: '(', close: ')' },
		{ open: '"', close: '"' },
		{ open: '\'', close: '\'' },
	],
	surroundingPairs: [
		{ open: '{', close: '}' },
		{ open: '[', close: ']' },
		{ open: '(', close: ')' },
		{ open: '"', close: '"' },
		{ open: '\'', close: '\'' },
	]
};

export const language = <ILanguage>{
	defaultToken: '',
	tokenPostfix: '.cypher',
	ignoreCase: true,

	brackets: [
		{ open: '[', close: ']', token: 'delimiter.square' },
		{ open: '(', close: ')', token: 'delimiter.parenthesis' }
	],

	keywords: [
		"CALL", "CREATE", "DELETE", "DETACH", "EXISTS", "FOREACH", "LOAD", "MATCH", "MERGE", "OPTIONAL", "REMOVE", "RETURN", "SET", "START",
		"UNION", "UNWIND", "WITH", "LIMIT", "ORDER", "SKIP", "WHERE", "YIELD", "ASC", "ASCENDING", "ASSERT", "BY", "CSV", "DESC", "DESCENDING",
		"ON", "ALL", "CASE", "ELSE", "END", "THEN", "WHEN", "CONSTRAINT", "DROP", "EXISTS", "INDEX", "NODE", "KEY", "UNIQUE", "JOIN", "PERIODIC",
		"COMMIT", "SCAN", "USING", "FALSE", "NULL", "TRUE", "ADD", "DO", "FOR", "MANDATORY", "OF", "REQUIRE", "SCALAR"
	],
	operators: [
		"AND", "AS", "CONTAINS", "DISTINCT", "ENDS", "IN", "IS", "NOT", "OR", "STARTS", "XOR", ".", "=", "+=", "+", "-", "*", "/", "%",
		"^", "<>", "<", ">", "<=", ">=", "=~"
	],
	builtInFunctions: [
		"all", "any", "exists", "none", "single", "coalesce", "endNode", "head", "id", "last", "length", "properties", "randomUUID", "size",
		"startNode", "timestamp", "toBoolean", "toFloat", "toInteger", "type", "avg", "collect", "count", "max", "min", "percentileCount", "percentileDisc",
		"stDev", "stDevP", "sum", "extract", "filter", "keys", "labels", "nodes", "range", "reduce", "relationships", "reverse", "tail", "e", "exp",
		"log", "log10", "sqrt", "acos", "asin", "atan", "atan2", "cos", "cot", "degrees", "haversin", "pi", "radians", "sin", "tan", "left", "lTrim",
		"replace", "reverse", "right", "rTrim", "split", "substring", "toLower", "toString", "toUpper", "trim", "date", "date.transaction", "date.statement",
		"date.realtime", "datetime", "datetime.transaction", "datetime.statement", "datetime.realtime", "localdatetime", "localdatetime.transaction",
		"localdatetime.statement", "localdatetime.realtime", "localdatetime.truncate", "localtime", "localtime.transaction", "localtime.statement",
		"localtime.realtime", "localtime.truncate", "time", "time.transaction", "time.statement", "time.realtime", "time.truncate", "duration",
		"duration.between", "duration.inMonths", "duration.inDays", "duration.inSeconds", "distance", "point"
	],
	tokenizer: {
		root: [
			{ include: '@comment' },
			{ include: '@whitespace' },
			{ include: '@numbers' },
			{ include: '@strings' },
			{ include: '@complexIdentifiers' },
			[/[;,.:]/, 'delimiter'],
			[/[()]/, '@brackets'],
			[/[\w@]+/, {
				cases: {
					'@keywords': 'keyword',
					'@operators': 'operator',
					'@builtInFunctions': 'predefined',
					'@default': 'identifier'
				}
			}],
			[/[<>=!%&+\-*/|~^]/, 'operator'],
		],
		whitespace: [
			[/\s+/, 'white']
		],
		comment: [
			[/\/\/+.*/, 'comment']
		],
		numbers: [
			[/0[xX][0-9a-fA-F]*/, 'number'],
			[/[$][+-]*\d*(\.\d*)?/, 'number'],
			[/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, 'number']
		],
		strings: [
			[/'/, { token: 'string', next: '@string' }],
			[/"/, { token: 'string.double', next: '@stringDouble' }]
		],
		string: [
			[/[^']+/, 'string'],
			[/''/, 'string'],
			[/'/, { token: 'string', next: '@pop' }],
		],
		stringDouble: [
			[/[^"]+/, 'string.double'],
			[/""/, 'string.double'],
			[/"/, { token: 'string.double', next: '@pop' }]
		],
		complexIdentifiers: [
			[/`/, { token: 'identifier.quote', next: '@quotedIdentifier' }]
		],
		quotedIdentifier: [
			[/[^`]+/, 'identifier'],
			[/``/, 'identifier'],
			[/`/, { token: 'identifier.quote', next: '@pop' }]
		],
	}
};
