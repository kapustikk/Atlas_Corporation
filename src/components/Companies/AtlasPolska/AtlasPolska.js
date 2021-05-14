import OurServices from '../../AboutUs/OurServices';
import s from '../Companies.module.css';
import mail from '../../images/mail.svg';
import AtlasPolSvg from '../../images/atlas-pol.svg';
import atlasPolPhoto from '../../images/Atlas_polska.jpg';
import atlasPolPhoto2 from '../../images/atlasPolPhoto2.jpg';

export default function AtlasCorporation() {
  return (
    <div>
      <div className={s.companyDiv}>
        <div className={s.ItalTechnology}>
          <img
            src={atlasPolPhoto}
            alt="Atlas Corporation"
            className={s.companyPhoto}
          />
          <span className={s.textBlockOne}>
            <h1 className={s.companiesName}>Atlas Polska SP. Z O.O.</h1>
            <h4 className={s.text}>
              Atlas Polska Sp. z o.o., a company based in Warsaw - Poland, is
              part of a group of companies operating in the construction and
              engineering sector which aims to provide its customers with
              revamping services, after-sales industrial maintenance and key
              plant solutions. in hand for thermo-hydraulic industrial
              processes, for industrial automation and for air treatment plants.
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
        <div className={s.ItalTechnologyBlockTwo}>
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
            src={atlasPolPhoto2}
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
          <p>Office: Warsaw, Poland</p>
          <p className={s.telephone}>
            Warsaw :{' '}
            <a href="tel:48787862472" className={s.tel}>
              48 787862472
            </a>
          </p>
          <p className={s.telephone}>
            International :{' '}
            <a href="tel:393315725689" className={s.tel}>
              39 3315725689
            </a>
          </p>
          <p>
            <a
              href="mailto:office@info@atlaspolska-spzoo.pl"
              className={s.mail}
            >
              <img src={mail} alt="" className={s.mailSvg} />
              info@atlaspolska-spzoo.pl
            </a>
          </p>
        </span>
        <img src={AtlasPolSvg} alt="" className={s.svg} />
      </div>
    </div>
  );
}
