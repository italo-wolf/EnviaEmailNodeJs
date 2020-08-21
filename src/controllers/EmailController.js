import Email from '../schemas/mails';
import Mail from '../lib/mail';


class EmailController {
  async index(req, res) {
    const { email, Telefone, conteudo } = req.body;
    await Mail.sendMail({
      to: `${email}`,
      subject: 'Nova Interação pelo site',
      template: 'newcontato',
      context: {
        email: email,
        Telefone: Telefone,
        conteudo: conteudo,
      }
    });
    const sendEmail = await Email.create({
      email: `${email}`,
      Telefone: `${Telefone}`,
      conteudo: `${conteudo}`,
      read: false,
    });

    return res.json(sendEmail);
  }

}



export default new EmailController();