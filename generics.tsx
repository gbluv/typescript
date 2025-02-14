type User = {
    firstName: string,
    lastName: string
}

type TActionTypes = `user-${keyof User}`;

type TGenericActionTypes<T, K extends keyof T & string> = {
    type: `user-${K}`,
    payload: T[K]
} 


/* Generic functions */

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
