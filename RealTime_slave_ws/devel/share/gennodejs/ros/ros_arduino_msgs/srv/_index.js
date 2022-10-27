
"use strict";

let DigitalRead = require('./DigitalRead.js')
let ServoWrite = require('./ServoWrite.js')
let AnalogRead = require('./AnalogRead.js')
let ServoRead = require('./ServoRead.js')
let AnalogWrite = require('./AnalogWrite.js')
let DigitalWrite = require('./DigitalWrite.js')
let DigitalSetDirection = require('./DigitalSetDirection.js')

module.exports = {
  DigitalRead: DigitalRead,
  ServoWrite: ServoWrite,
  AnalogRead: AnalogRead,
  ServoRead: ServoRead,
  AnalogWrite: AnalogWrite,
  DigitalWrite: DigitalWrite,
  DigitalSetDirection: DigitalSetDirection,
};
