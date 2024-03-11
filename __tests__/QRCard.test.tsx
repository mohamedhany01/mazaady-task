import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import QRCard from '@/app/components/QRCard';
import { describe, expect, test } from '@jest/globals';



describe('QRCard component', () => {
    test('renders QRCard component with correct props and toggle functionality', () => {
        const props = {
            title: 'QR Code',
            alertMessage: 'Foo',
            avatarName: 'John Doe',
        };


        const result = render(<QRCard {...props} />);

        const buttonQR = result.container.querySelector('#toggle-qr');

        expect(screen.getByText(props.title)).toBeInTheDocument();
        expect(screen.getByText(props.alertMessage)).toBeInTheDocument();
        expect(screen.getByText(props.avatarName)).toBeInTheDocument();

        fireEvent.click(buttonQR);
        expect(screen.queryByText(props.alertMessage)).not.toBeInTheDocument();
        expect(screen.queryByText(props.avatarName)).not.toBeInTheDocument();

        fireEvent.click(buttonQR);
        expect(screen.getByText(props.alertMessage)).toBeInTheDocument();
        expect(screen.getByText(props.avatarName)).toBeInTheDocument();
    });
});
