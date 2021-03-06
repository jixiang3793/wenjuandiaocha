'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.post('/answer/save', controller.answer.save);
  router.post('/answer', controller.answer.find);
};
