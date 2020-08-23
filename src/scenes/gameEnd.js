import { Scene_MenuBase } from './menuBase';
// avoid circular: import { Scene_Title } from './title';

import { Window_GameEnd, Window_TitleCommand } from '../windows';
import { SceneManager } from '../managers';
import { Rectangle } from '../pixi';
import { Graphics } from '../dom';

//-----------------------------------------------------------------------------
// Scene_GameEnd
//
// The scene class of the game end screen.

export function Scene_GameEnd() {
  this.initialize(...arguments);
}

Scene_GameEnd.prototype = Object.create(Scene_MenuBase.prototype);
Scene_GameEnd.prototype.constructor = Scene_GameEnd;

Scene_GameEnd.prototype.initialize = function() {
  Scene_MenuBase.prototype.initialize.call(this);
};

Scene_GameEnd.prototype.create = function() {
  Scene_MenuBase.prototype.create.call(this);
  this.createCommandWindow();
};

Scene_GameEnd.prototype.stop = function() {
  Scene_MenuBase.prototype.stop.call(this);
  this._commandWindow.close();
};

Scene_GameEnd.prototype.createBackground = function() {
  Scene_MenuBase.prototype.createBackground.call(this);
  this.setBackgroundOpacity(128);
};

Scene_GameEnd.prototype.createCommandWindow = function() {
  const rect = this.commandWindowRect();
  this._commandWindow = new Window_GameEnd(rect);
  this._commandWindow.setHandler("toTitle", this.commandToTitle.bind(this));
  this._commandWindow.setHandler("cancel", this.popScene.bind(this));
  this.addWindow(this._commandWindow);
};

Scene_GameEnd.prototype.commandWindowRect = function() {
  const ww = this.mainCommandWidth();
  const wh = this.calcWindowHeight(2, true);
  const wx = (Graphics.boxWidth - ww) / 2;
  const wy = (Graphics.boxHeight - wh) / 2;
  return new Rectangle(wx, wy, ww, wh);
};

Scene_GameEnd.prototype.commandToTitle = function() {
  this.fadeOutAll();
  SceneManager.goto(window.Scene_Title);
  Window_TitleCommand.initCommandPosition();
};
