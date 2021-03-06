'use strict';

const Controller = require('egg').Controller;

class AnswerController extends Controller {
  async find() {
    const params = this.ctx.request.body;
    console.log("params ...",params);
    const isAnswer = await this.ctx.model.Answer.exists({ nickName : params.nickName });
    this.ctx.body = {isAnswer};
  }

  async save() {
    const params = this.ctx.request.body;
    const answer = await this.ctx.model.Answer.insertMany([params]);
    this.ctx.body = answer;
  }

}

module.exports = AnswerController;