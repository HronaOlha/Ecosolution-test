import PropTypes from 'prop-types';

import sprite from '../../images/sprite.svg';
import { values } from '../../constants/constants';
import windFarmTab from '../../images/wind-farms-tab.png';
import windFarmDesk from '../../images/wind-farms-desk.png';
import workerTab from '../../images/worker-by-solar-panels-tab.png';
import workerDesk from '../../images/worker-by-solar-panels-desk.png';

import {
  ValuesTexts,
  ValuesGrid,
  WindFarmImg,
  WorkerTab,
} from './Values.styled';

const Values = ({ deviceType }) => {
  return (
    <section id="values" aria-label="values section">
      <ValuesTexts>
        <h2>Main values of our company</h2>
        <p>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world&#39;s energy needs.
        </p>
      </ValuesTexts>
      <ValuesGrid>
        {values.map(item => (
          <div key={item.id}>
            <h3>
              <svg>
                <use href={sprite + `${item.icon}`} />
              </svg>
              {item.title}
            </h3>
            <p>{item.text}</p>
          </div>
        ))}
        {deviceType === 'tablet' && (
          <>
            <WindFarmImg
              src={windFarmTab}
              alt="wind farms field"
              loading="lazy"
            />
            <WorkerTab
              src={workerTab}
              alt="worker by solar panels"
              loading="lazy"
            />
          </>
        )}
        {deviceType === 'desktop' && (
          <>
            <WindFarmImg
              src={windFarmDesk}
              alt="wind farms field"
              loading="lazy"
            />
            <WorkerTab
              src={workerDesk}
              alt="worker by solar panels"
              loading="lazy"
            />
          </>
        )}
      </ValuesGrid>
    </section>
  );
};

export default Values;

Values.propTypes = {
  deviceType: PropTypes.string,
};
