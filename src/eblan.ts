{
  const tree = [
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

  type Tree = {
    v: number;
    c?: Tree[];
  };

  function sumTree(tree: Tree[]) {
    let sum = 0;
    for (let el of tree) {
      sum += el.v;
      if (el.c) {
        sum += sumTree(el.c);
      }
    }

    return sum;
  }

  console.log(sumTree(tree)); //108
}
