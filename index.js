import {io} from 'socket.io/socket.io.js';

export function hello(name) {
  return 'Hello ' + name;
}


export function connect() {
  var socket = io();
}