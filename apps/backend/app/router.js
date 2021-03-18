'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.post('/answer/save', controller.answer.save);
  router.post('/answer/query', controller.answer.findByParams);
  router.post('/answer', controller.answer.find);
  router.get('/answer/count', controller.answer.count);
  router.get('/answer', controller.answer.findAll);
  router.get('/timu/count', controller.timu.count);
  router.get('/timu', controller.timu.findAll);
  router.post('/timu', controller.timu.findByParams);
};
