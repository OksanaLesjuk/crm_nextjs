'use client';

import React from 'react';

export interface ErrorComponentProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorComponentProps) {
  return (
    <div>
      <p>{`Unexpected error inside slot sales. ${error.message}`}</p>
    
    </div>
  );
}