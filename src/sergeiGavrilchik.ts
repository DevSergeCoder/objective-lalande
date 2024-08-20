{
  type TreeNode = {
    v: number;
    c?: TreeNode[];
  };

  const tree: TreeNode[] = [
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

  function sumTree(tree: any) {}

  console.log(sumTree(tree)); //108
}
