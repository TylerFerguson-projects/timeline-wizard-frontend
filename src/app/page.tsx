'use client';
import React from 'react';
import MainContainer from './layout/main-container/MainContainer';
import TimelineGeneratorPage from './timeline-generator/page';

const App = () => (
  <MainContainer title="Home">
    <TimelineGeneratorPage/>
  </MainContainer>
);

export default App;