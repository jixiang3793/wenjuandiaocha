'use strict';

const Controller = require('egg').Controller;

class AnswerController extends Controller {
  async find() {
    const params = this.ctx.request.body;
    console.log("params ...",params);
    const isAnswer = await this.ctx.model.Answer.exists({ nickName : params.nickName });
    this.ctx.body = {isAnswer};
  }
  async findAll() {
    const result = await this.ctx.model.Answer.find();
    this.ctx.body = result;
  }

  async save() {
    const params = this.ctx.request.body;
    const answer = await this.ctx.model.Answer.insertMany([params]);
    this.ctx.body = answer;
  }

  async findByParams() {
    const params = this.ctx.request.body;
    const result = await this.ctx.model.Answer.find(params.filter,params.projection,params.options);
    this.ctx.body = result;
  }
  async count() {
    const result = await this.ctx.model.Answer.count();
    this.ctx.body = result;
  }

}

module.exports = AnswerController;