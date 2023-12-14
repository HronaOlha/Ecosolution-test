import {
  ContactSection,
  ContactTitle,
  ContactList,
  ContactItem,
  ContactIcon,
  Socials,
} from './Contact.styled';
import sprite from '../../images/sprite.svg';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
  return (
    <section id="contact" aria-label="contacts section">
      <ContactTitle>Contact us</ContactTitle>
      <ContactSection>
        <ContactList>
          <ContactItem>
            <h3>Phone:</h3>
            <a href="tel:+380981234567">
              <ContactIcon>
                <use href={sprite + '#call'} />
              </ContactIcon>
              38 (098) 12 34 567
            </a>
            <a href="tel:+380931234567">
              <ContactIcon>
                <use href={sprite + '#call'} />
              </ContactIcon>
              38 (093) 12 34 567
            </a>
          </ContactItem>
          <ContactItem>
            <h3>E-mail:</h3>
            <a href="mailto:office@ecosolution.com">
              <ContactIcon>
                <use href={sprite + '#sms'} />
              </ContactIcon>
              office@ecosolution.com
            </a>
          </ContactItem>
          <ContactItem>
            <h3>Address:</h3>
            <a
              href="https://www.google.com/maps/place/%D0%A8%D0%BE%D1%82%D0%B0+%D0%A0%D1%83%D1%81%D1%82%D0%B0%D0%B2%D0%B5%D0%BB%D1%96+7+%D0%AF/@49.8310939,24.0326283,17z/data=!3m1!4b1!4m6!3m5!1s0x473addf4d3884e33:0x85f58dee013939bd!8m2!3d49.8310905!4d24.0352032!16s%2Fg%2F11vf1gnnzq?authuser=0&entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ContactIcon>
                <use href={sprite + '#map'} />
              </ContactIcon>
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </a>
          </ContactItem>
          <ContactItem>
            <h3>Social Networks:</h3>
            <Socials>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <ContactIcon aria-label="facebook">
                  <use href={sprite + '#facebook'} />
                </ContactIcon>
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <ContactIcon aria-label="instagram">
                  <use href={sprite + '#instagram'} />
                </ContactIcon>
              </a>
            </Socials>
          </ContactItem>
        </ContactList>
        <ContactForm />
      </ContactSection>
    </section>
  );
};

export default Contact;
