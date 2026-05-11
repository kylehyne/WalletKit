// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders WalletKit title', () => {
    render(<App />);
    const titleElement = screen.getByText(/WalletKit/i);
    expect(titleElement).toBeInTheDocument();
});
