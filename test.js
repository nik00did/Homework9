describe('isEqualSymbolsAmount', () => {
    const testData = [
        {
            string: 'string',
            symbol1: 's',
            symbol2: 'i',
            expected: true
        },
        {
            string: 'text text texT texT',
            symbol1: 'e',
            symbol2: 't',
            expected: false
        },
        {
            string: 'ab ab ab AB ab Ab aB',
            symbol1: 'a',
            symbol2: 'b',
            expected: true
        },
        {
            string: 'string',
            symbol1: 's',
            symbol2: ' ',
            expected: false
        },
        {
            string: 'aaaaaaaaaaaa',
            symbol1: 'a',
            symbol2: ' ',
            expected: false
        },
        {
            string: 'Amy normally hated Monday mornings, but this year was different. Kamal was in her art class and/' +
                    ' she liked Kamal. She was waiting outside the classroom when her friend Tara arrived.',
            symbol1: 'a',
            symbol2: 'i',
            expected: false
        },
        {
            string: '“Hi Amy! Your mum sent me a text. You forgot your inhaler. Why don’t you turn your phone on?” Amy/' +
                    ' didn’t like technology. She never sent text messages and she hated Facebook too.',
            symbol1: '"',
            symbol2: ' ',
            expected: false
        },
        {
            string: '',
            symbol1: 'a',
            symbol2: ' ',
            expected: true
        }
    ];

    testData.forEach(data => {
        const { string, symbol1, symbol2, expected } = data;

        const actual = isEqualSymbolsAmount(string, symbol1, symbol2);

        it(`Should return ${expected} when string = '${string}', symbol1 = '${symbol1}' and symbol2 = '${symbol2}'`, () => {
            assert.strictEqual(actual, expected);
        });
    });

});

describe('truncate', () => {
    const testData = [
        {
            string: '',
            maxLength: 5,
            expected:''
        },
        {
            string: 'tree',
            maxLength: 5,
            expected:'tree'
        },
        {
            string: 'string',
            maxLength: 5,
            expected:'st...'
        },
        {
            string: 'There is a summer',
            maxLength: 10,
            expected:'There i...'
        },
        {
            string: 'Text text text text text',
            maxLength: 15,
            expected:'Text text te...'
        },
        {
            string: 'string',
            maxLength: 4,
            expected:'s...'
        },
        {
            string: 'string',
            maxLength: 0,
            expected:'...'
        }
    ];

    testData.forEach(data => {
        const { string, maxLength, expected } = data;

        const actual = truncate(string, maxLength);

        it(`Should return ${expected}, when string = '${string}' and max length = ${maxLength}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

describe(`findSubstring`, () => {
    const testData = [
        {
            text: 'text',
            string: 'text',
            expected: ''
        },
        {
            text: 'text string text',
            string: 'string',
            expected: 'text  text'
        },
        {
            text: '0 1 2 3 4 5 6 7 8 9',
            string: '4',
            expected: '0 1 2 3  5 6 7 8 9'
        },
        {
            text: 'text text text',
            string: 'apple',
            expected: 'text text text'
        },
        {
            text: '0 1 2 3 4 5 6 7 8 9',
            string: '44',
            expected: '0 1 2 3 4 5 6 7 8 9'
        }
    ];

    testData.forEach(data => {
        const { text, string, expected } = data;

        const actual = findSubstring(text, string);

        it(`Should return '${expected}', when text = '${text}' and string = '${string}'`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});