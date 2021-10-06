using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace mehringer_partner.Controllers
{
    [ApiController]
    [Route("api/mail")]
    public class MailController : ControllerBase
    {
      
        private readonly ILogger<MailController> _logger;

        public MailController(ILogger<MailController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            return Ok("Mail");
        }

        [HttpPost]
        public async Task<ActionResult> Post(Mail mail)
        {
            if (mail != null)
            {

                string mailBody = mail.Name + "<br>";
                mailBody += mail.EMail + "<br>";
                mailBody += mail.Body;

                _logger.LogInformation(mailBody);
                try
                {
                    MailMessage message = new MailMessage();
                    message.Subject = "Kundenanfrage";
                    message.IsBodyHtml = true; //to make message body as html  
                    message.Body = mailBody;

                    var client = new SmtpClient("smtp.gmail.com", 587)
                    {
                        EnableSsl = true
                    };
                    client.Send(message);
                }
                catch (Exception e)
                {
                    return BadRequest();
                }

                return Ok();
            } 
            else
            {
                return BadRequest();
            }
        }
    }

    public class Mail
    {
        public string Body { get; set; }
        public string Name { get; set; }
        public string EMail { get; set; }
    }
}
