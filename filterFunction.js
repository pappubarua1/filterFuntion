var arr = [1, 2, 4, 5, 6, 7, 8]

var filteredArr = arr.filter(function (value) {
    return value % 2 == 0
})

console.log(filteredArr);