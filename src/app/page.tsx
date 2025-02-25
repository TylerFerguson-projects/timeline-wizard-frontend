'use client';
import React from 'react';
import MainContainer from './components/MainContainer';
import TimelineGeneratorPage from './timeline-generator/page';

const App = () => (
  <MainContainer title="Home">
    <TimelineGeneratorPage/>
  </MainContainer>
);

export default App;