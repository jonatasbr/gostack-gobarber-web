import React from 'react';

import { Container } from './styles';

export default function AvatarInput() {
  function handleChange(e) {}

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src="https://api.adorable.io/avatars/50/abott@adorable.png"
          alt=""
        />

        <input
          type="file"
          id="avatar"
          accept="image/*"
          // data-file={file}
          onChange={handleChange}
          // ref={ref}
        />
      </label>
    </Container>
  );
}
