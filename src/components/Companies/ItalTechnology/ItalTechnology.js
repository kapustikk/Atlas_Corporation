import OurServices from '../../AboutUs/OurServices';
import s from '../Companies.module.css';
import mail from '../../images/mail.svg';
import ItalTechSvg from '../../images/ital-technology.svg';
import italPhoto from '../../images/italPage1.jpg';
import italPhoto2 from '../../images/italPage2.jpg';

export default function ItalTechnology() {
  return (
    <div>
      <div className={s.companyDiv}>
        <div className={s.ItalTechnology}>
          <img
            src={italPhoto}
            alt="Ital technology Srl"
            className={s.companyPhoto}
          />
          <span className={s.textBlockOne}>
            <h1 className={s.companiesName}>Ital Technology Srl</h1>
            <h4 className={s.text}>
              Ital Technology SRL, a company based in Darfo Boario Terme in the
              province of Brescia - Italy, is part of a group of companies
              operating in the construction and engineering sector which aims to
              provide its customers with revamping and maintenance services.
              after-sales industrial and turnkey plant solutions for
              thermo-hydraulic industrial processes, for industrial automation
              and for air treatment plants.
            </h4>
            <h4 className={s.text}>
              For about 16 years, the company's experts have been managing sites
              for the construction of new buildings and coordinating the
              processes related to the realization of mechanical works,
              providing also repair and technical maintenance of the sites.
            </h4>
            <h4 className={s.text}>
              Our 3 companies are committed to meeting the growing demands of
              our customers and occupying a strategic position in different
              parts of the world:
              <ul>
                <li>ITAL TECHNOLOGY SRL (Italy)</li>
                <li>ATLAS CORPORATION LLC (Ukraine)</li>
                <li>ATLAS POLSKA SP. Z O.O. (Poland)</li>
              </ul>
            </h4>
          </span>
        </div>
        <div className={s.ItalTechnology}>
          <span className={s.textBlockTwo}>
            <h4 className={s.text}>
              Based on 16 years of global experience, we offer a comprehensive
              range of tailored services to match your individual specific
              needs: from construction to logistic support, installation of a
              wide range of industrial machinery and metal structures for
              various industrial applications, and to a supervision service
              covering all stages of the project. Our group operates in the
              steel and mechanical structure industry and boasts extensive
              experience in completing small and large-scale construction and
              maintenance projects.
            </h4>
            <h4 className={s.text}>
              Through the professionalism of our employees, the innovations in
              production processes and responsibility towards our customers we
              provide a first-rate service in strict compliance with European
              Quality Standards and the requirements of our clients.
            </h4>
          </span>
          <img
            src={italPhoto2}
            alt="Ital technology Srl"
            className={s.companyPhoto}
          />
        </div>
      </div>

      <div className={s.ourServices}>
        <OurServices />
      </div>

      <div className={s.addressBlock}>
        <span className={s.address}>
          <p>Office: Darfo Boario Terme (BS), Italy</p>
          <p className={s.telephone}>
            Italy :{' '}
            <a href="tel:393387685160" className={s.tel}>
              39 3387685160
            </a>
          </p>
          <p className={s.telephone}>
            International :{' '}
            <a href="tel:393315725689" className={s.tel}>
              39 3315725689
            </a>
          </p>
          <p>
            <a href="mailto:info@italtechnology-srl.it" className={s.mail}>
              <img src={mail} alt="" className={s.mailSvg} />
              info@italtechnology-srl.it
            </a>
          </p>
        </span>
        <img src={ItalTechSvg} alt="" className={s.svg} />
      </div>
    </div>
  );
}
