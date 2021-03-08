'use strict';

const Controller = require('egg').Controller;

class TimuController extends Controller {
  async findAll() {
    const result = await this.ctx.model.Timu.find();
    this.ctx.body = result;
  }
}

module.exports = TimuController;