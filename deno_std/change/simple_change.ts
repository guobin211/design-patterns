interface DomTreeNode {
  tag: string
  children?: DomTreeNode[]
  value?: string
}

const tree1 = {
  tag: "div",
  children: [
    {
      tag: "ul", children: [
        {
          tag: "li", children: [{
            tag: "text", value: "1"
          }]
        },
        {
          tag: "li", children: [{
            tag: "text", value: "2"
          }]
        },
        {
          tag: "li", children: [{
            tag: "text", value: "3"
          }]
        }
      ]
    }
  ]
};

const tree2 = {
  tag: "div",
  children: [
    {
      tag: "ul", children: [
        {
          tag: "li", children: [{
            tag: "text", value: "4"
          }]
        },
        {
          tag: "li", children: [{
            tag: "text", value: "2"
          }]
        },
        {
          tag: "li", children: [{
            tag: "text", value: "3"
          }]
        }
      ]
    }
  ]
};


function compare(t1: DomTreeNode, t2: DomTreeNode) {
  if (t1.tag !== t2.tag || t1.value !== t2.value || t1.children?.length !== t2.children?.length) {
    console.log(`${t2.tag} changed`);
  } else {
    if (t1.children && t2.children) {
      for (let i = 0; i < t1.children.length; i++) {
        const el1 = t1.children[i];
        const el2 = t2.children[i];
        compare(el1, el2)
      }
    }
  }
}

compare(tree1, tree2)
