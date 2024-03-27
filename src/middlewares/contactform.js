'use strict';

const emailjs = require('@emailjs/browser');

/**
 * `contactform` middleware
 */

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info('In contactform middleware.');

    if (ctx.request.method === 'POST' && ctx.request.body.form === 'contact') {   
      const contactFormData = ctx.request.body;

      try {
        const result = await emailjs.send('service_386m1rw', 'template_bwevda9', {
          name: contactFormData.user_name,
          email: contactFormData.user_email,
          message: contactFormData.message
        }, 'ZkuSTgsF1alxx2cn8');

        ctx.body = {
          success: true
        };
      } catch (error) {
        strapi.log.error('Error sending email:', error);
        ctx.body = {
          success: false,
          message: error.text
        };
      }
    }

    await next();
  };
};