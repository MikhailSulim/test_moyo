import React from 'react';

import './SocialAuthenticator.scss';

const SocialAuthenticator = () => {
  return (
    <div className="social-auth">
      <a href="http://vk.com">
        <svg>
          <use xlinkHref="sprite.svg#vk" />
        </svg>
      </a>
      <a href="http://google.com">
        <svg>
          <use xlinkHref="sprite.svg#google" />
        </svg>
      </a>
      <a href="http://ya.ru">
        <svg>
          <use xlinkHref="sprite.svg#yandex" />
        </svg>
      </a>
    </div>
  );
};

export default SocialAuthenticator;
