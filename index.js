export function hello(name) {
  return 'Hello ' + name;
}


export function connect() {

  import io from 'npm/socket.io/socket.io-client'

  var socket = io();
}