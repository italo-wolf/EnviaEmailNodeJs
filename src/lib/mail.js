import nodemailer from 'nodemailer';
import {resolve} from 'path';
import exphbs from 'express-handlebars';
import nodemailerhbs from 'nodemailer-express-handlebars';
import MailConfig  from '../config/mail';

class Mail{

  constructor(){
    const {host, port, secure, auth} = MailConfig;
    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth,
      
    });
    this.configureTemplates();
  }
  configureTemplates(){
    const viewPath =  resolve(__dirname, '..','views', 'emails');

    this.transporter.use(
    'compile', 
    nodemailerhbs({
      viewEngine: exphbs.create({
        layoutsDir: resolve(viewPath, 'layouts'),
        partialsDir: resolve(viewPath, 'partials'),
        defaultLayout: 'default',
        extname: '.hbs',

      }),
      viewPath,
      extName: '.hbs',
    }));

  }
  sendMail(message){
    return this.transporter.sendMail({
      ...MailConfig.default,
      ...message
    });
  }
}

export default new Mail();