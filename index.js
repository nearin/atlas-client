export function hello(name) {
  return 'Hello ' + name;
}

import {hello} from 'nearin/atlas-client';

import {io} from 'socket.io/socket.io.js'

export function connect() {
  var socket = io();
}