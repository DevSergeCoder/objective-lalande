var tree = [
    {
        v: 5,
        c: [
            {
                v: 5,
            },
            {
                v: 10,
                c: [
                    {
                        v: 11,
                    },
                ],
            },
            {
                v: 11,
                c: [
                    {
                        v: 12,
                        c: [
                            {
                                v: 5,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        v: 5,
        c: [
            {
                v: 7,
            },
            {
                v: 12,
                c: [
                    {
                        v: 11,
                    },
                ],
            },
            {
                v: 14,
            },
        ],
    },
];
function sumTree(tree) {
    var sum = 0;
    for (var _i = 0, tree_1 = tree; _i < tree_1.length; _i++) {
        var el = tree_1[_i];
        sum = sum + el.v;
        if (el.c) {
            sum = sum + sumTree(el.c);
        }
        if (!el.c)
            return;
    }
    console.log('хуй');
    return sum;
}
console.log(sumTree(tree)); //108
