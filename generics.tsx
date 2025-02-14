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

/*

  The <T,> in front of the function createLink is declaring a generic type parameter for the function. Let's break it down:

*/
