'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.post('/answer/save', controller.answer.save);
  router.post('/answer', controller.answer.find);
  router.get('/answer', controller.answer.findAll);
  router.get('/timu', controller.timu.findAll);
};
