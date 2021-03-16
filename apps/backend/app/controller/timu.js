'use strict';

const Controller = require('egg').Controller;

class TimuController extends Controller {
  async findAll() {
    let result = [];
    if (this.app.hzcache) {
      result = this.app.hzcache['timu'];
    } else {
      result = await this.ctx.model.Timu.find();
      this.app.hzcache = {
        'timu': result
      };
    }
    this.ctx.body = result;
  }
}

module.exports = TimuController;