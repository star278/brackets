module.exports = function check(str, bracketsConfig) {
    var bracketsSet = getBracketsSets(bracketsConfig);

    for (let i = 0; i < bracketsSet.length;) {
        if (str.indexOf(bracketsSet[i]) !== -1) {
            str = str.replace(bracketsSet[i], '');
            i = 0;
        } else i++;
    }
    return !str;
}

function getBracketsSets(config) {
    return config.map(function(item) {
        return item.join('');
    });
}