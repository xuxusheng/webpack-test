exports.add = function () {
    var sum = 0, i = 0, args = arguments, len = args.length
    while (i < len) {
        sum += args[i++];
    }
    return sum
}