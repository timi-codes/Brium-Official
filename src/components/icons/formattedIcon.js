/* eslint-disable import/no-cycle */
import React from 'react';
import PropTypes from 'prop-types';
import {
  IconFacebook,
  IconLinkedin,
  IconYoutube,
  IconInstagram,
  IconTwitter
} from '@components/icons';

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'Facebook':
      return <IconFacebook />;
    case 'LinkedIn':
      return <IconLinkedin />;
    case 'Youtube':
      return <IconYoutube />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Twitter':
      return <IconTwitter />;
    default:
      return <IconFacebook />;
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired
};

export default FormattedIcon;
