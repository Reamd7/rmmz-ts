import { Window_Command } from './';
import { TextManager } from '../managers';

//-----------------------------------------------------------------------------
// Window_GameEnd
//
// The window for selecting "Go to Title" on the game end screen.

export function Window_GameEnd() {
  this.initialize(...arguments);
}

Window_GameEnd.prototype = Object.create(Window_Command.prototype);
Window_GameEnd.prototype.constructor = Window_GameEnd;

Window_GameEnd.prototype.initialize = function(rect) {
  Window_Command.prototype.initialize.call(this, rect);
  this.openness = 0;
  this.open();
};

Window_GameEnd.prototype.makeCommandList = function() {
  this.addCommand(TextManager.toTitle, "toTitle");
  this.addCommand(TextManager.cancel, "cancel");
};