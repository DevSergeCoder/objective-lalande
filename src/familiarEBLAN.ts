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

  function sumTree(tree: TreeNode[]): number {
    return tree.reduce((sum, node) => {
      const subTree = node.c ? sumTree(node.c) : 0;
      return sum + node.v + subTree;
    }, 0);
  }

  console.log("familiarEBLAN.ts");
  console.log(sumTree(tree)); //108
}
