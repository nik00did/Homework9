function WrongParamError() {
    this.name = "wrongParamError";
    this.message = 'Wrong input params!';
}

function NotSting() {
    this.name = 'NotString';
    this.message = 'Input param in not a string!';
}

function isEqualSymbolsAmount(string, symbol1, symbol2) {
    try {
        if (typeof string !== 'string') {
            throw new NotSting();
        }

        if (typeof symbol1 !== 'string' || typeof symbol2 !== 'string') {
            throw new WrongParamError();
        }
    } catch (e) {
        throw e.message;
    }

    let counter1 = string.split('').filter(a => a === symbol1.toLowerCase() || a === symbol1.toUpperCase()).length;
    let counter2 = string.split('').filter(a => a === symbol2.toLowerCase() || a === symbol2.toUpperCase()).length;

    return counter1 === counter2;
} 
//isEqualSymbolsAmount(12345,'e','t');

function truncate(string, maxLength) {
    try {
        if (typeof string !== 'string' || (!string && string !== '') || (maxLength === void 0 && !maxLength)) {
            throw new WrongParamError();
        }
    } catch (e) {
        throw e.message;
    }

    if (maxLength <= 3) {
        return '...';
    }

    if (string.length > maxLength) {
        return string.slice(0, maxLength - 3) + '...';
    }

    return string;
}
//console.log(truncate('string', 0));

function findSubstring(text, string) {
    try {
        if (typeof string !== 'string' || !string || !text || typeof text !== 'string') {
            throw new WrongParamError();
        }
    } catch (e) {
        throw e.message;
    }

    const index = text.search(new RegExp(string));

    if (index !== -1) {
        return text.slice(0, index) + text.slice(index + string.length);
    }

    return text;
}

//console.log(findSubstring('text, s text, tex, trext, string, text text tex tex tex text', 'string'));