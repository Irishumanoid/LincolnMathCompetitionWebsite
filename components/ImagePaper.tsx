'use client';

import { styled, Paper } from '@mui/material';
import PropTypes from 'prop-types';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

interface ImagePaperProps {
  imageSrc: string;
  imageAlt: string;
}

const ImagePaper: React.FC<ImagePaperProps> = ({ imageSrc, imageAlt }) => {
  return (
    <Item>
      <Img src={imageSrc} alt={imageAlt} />
    </Item>
  );
}

ImagePaper.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default ImagePaper;
