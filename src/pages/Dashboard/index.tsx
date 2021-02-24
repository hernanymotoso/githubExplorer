import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/images/github-logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/28400751?s=400&u=2ecb3177dc614808114acb163ff8d79768332369&v=4"
            alt="Hernany Dias"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy scalable ReactJS & React Native forms! </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/28400751?s=400&u=2ecb3177dc614808114acb163ff8d79768332369&v=4"
            alt="Hernany Dias"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy scalable ReactJS & React Native forms! </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/28400751?s=400&u=2ecb3177dc614808114acb163ff8d79768332369&v=4"
            alt="Hernany Dias"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy scalable ReactJS & React Native forms! </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/28400751?s=400&u=2ecb3177dc614808114acb163ff8d79768332369&v=4"
            alt="Hernany Dias"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy scalable ReactJS & React Native forms! </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
