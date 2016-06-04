export default function infiniteRotation(el) {
  // some kind of transform reset, or removing the previous completed transform maybe needed.
  el.transform('r0,100,100');
  el.animate({ transform: 'r360,100,100' }, 30000, mina.linear, infiniteRotation.bind(null, el));
}
