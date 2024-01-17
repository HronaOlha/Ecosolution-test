import PropTypes from 'prop-types';

import sprite from '../../images/sprite.svg';
import { values } from '../../constants/constants';

import windFarmTab1x from '../../images/wind-farms-tab-1x.jpg';
import windFarmTab2x from '../../images/wind-farms-tab-2x.jpg';
import windFarmDesk1x from '../../images/wind-farms-desk-1x.jpg';
import windFarmDesk2x from '../../images/wind-farms-desk-2x.jpg';
import workerTab1x from '../../images/worker-by-solar-panels-tab-1x.jpg';
import workerTab2x from '../../images/worker-by-solar-panels-tab-2x.jpg';
import workerDesk1x from '../../images/worker-by-solar-panels-desk-1x.jpg';
import workerDesk2x from '../../images/worker-by-solar-panels-desk-2x.jpg';

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

        {(deviceType === 'tablet' || deviceType === 'desktop') && (
          <>
            <WindFarmImg>
              <source
                media="(min-width: 1280px)"
                srcSet={`${windFarmDesk1x} 1x, ${windFarmDesk2x} 2x`}
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${windFarmTab1x} 1x, ${windFarmTab2x} 2x`}
              />
              <img src={windFarmDesk2x} alt="wind farms field" loading="lazy" />
            </WindFarmImg>

            <WorkerTab>
              <source
                media="(min-width: 1280px)"
                srcSet={`${workerDesk1x} 1x, ${workerDesk2x} 2x`}
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${workerTab1x} 1x, ${workerTab2x} 2x`}
              />
              <img src={workerDesk2x} alt="wind farms field" loading="lazy" />
            </WorkerTab>
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
