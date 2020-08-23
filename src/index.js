import './prototype.js';
import * as Dom from './dom';
import * as PixiComponents from './pixi';
import * as Managers from './managers';
import * as Games from './game';
import * as Sprites from './sprites';
import * as Windows from './windows';

function assignToGlobal(module) {
  for (let k of Object.keys(module)) {
    global[k] = module[k];
  }
}

[
  Dom,
  PixiComponents,
  Managers,
  Games,
  Sprites,
  Windows
].map(m => assignToGlobal(m));

console.log($gameParty);
