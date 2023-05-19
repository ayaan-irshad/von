import sgMail from '@sendgrid/mail';

const sendHelloWorldEmail = async () => {
  sgMail.setApiKey(
    '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'
  );

  try {
    const msg = {
      to: 'hocmastre@aol.com', // Replace with the recipient's email address
      from: 'dolfinclass@gmail.com', // Replace with your own email address
      subject: 'Hello from SendGrid!',
      text: 'Hello, World!'
    };

    const info = await sgMail.send(msg);
    console.log('Email sent:', info);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default sendHelloWorldEmail;
