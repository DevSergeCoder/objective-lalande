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

  function sumTree(tree: any) {
    let result = 0;

    function getValue(item: any) {
      if (typeof item !== "object") {
        result += item;
      } else {
        Object.entries(item).forEach(([key, item]) => {
          getValue(item);
        });

        // for (let el of item) {
        //   getValue(el.c || 0);
        //   getValue(el.v);
        // }
      }
    }
    getValue(tree);

    return result;
  }

  console.log(sumTree(tree)); //108
}
