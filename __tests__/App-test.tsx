import 'react-native';
import React from 'react';
import {render, RenderAPI} from '@testing-library/react-native';
import App from '../App';

describe('Renderização', () => {
  let component: RenderAPI;

  test('deve renderizar a App', () => {
    component = render(<App />);
    const app = component.getByTestId('test_app');
    expect(app).toBeDefined();
  });
});
