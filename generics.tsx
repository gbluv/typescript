type LinkNode<T> = {
  value: T,
  next?:LinkNode<T>
}

const TextNode  = LinkNode<string> = {
  value: "thrity-three",
  next: {
    value: 'thirty-fore'
  }
}

const stringNode = createLink('some-string');
const numberNode = createLink(39)
/*

  The <T,> in front of the function createLink is declaring a generic type parameter for the function. Let's break it down:

*/
