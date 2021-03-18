'use strict';

const Controller = require('egg').Controller;

class TimuController extends Controller {
  async findAll() {
    const result = await this.ctx.model.Timu.find();
    this.ctx.body = result;
  }
  async findByParams() {
    const params = this.ctx.request.body;
    const result = await this.ctx.model.Timu.find(params.filter,params.projection,params.options);
    this.ctx.body = result;
  }
  async count() {
    const result = await this.ctx.model.Timu.count();
    this.ctx.body = result;
  }
}

module.exports = TimuController;