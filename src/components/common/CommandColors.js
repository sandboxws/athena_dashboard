export default function operationColor(operation) {
  const colors = {
    'find': 'orange',
    'insert': 'purple',
    'update': 'teal',
    'distinct': 'yellow',
    'delete': 'red',
    'aggregate': 'blue',
    'count': 'indigo',
    'getMore': 'pink',
  }
  return colors[operation];
}
