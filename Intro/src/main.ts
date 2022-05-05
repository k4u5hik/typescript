// const getFullName = (name: string, surname: string): string => {
//   return `${name} ${surname}`;
// };
// console.log(getFullName("Yuki", "Bunny"));
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
