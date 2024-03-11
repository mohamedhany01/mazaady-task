import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '@/app/components/ProductList/ProductCard';
import { describe, expect, test } from '@jest/globals';

describe('ProductCard component', () => {
    test('renders ProductCard component with correct props', () => {
        const props = {
            imageUrl: 'https://placehold.co/150x150',
            imgLabel: 'Live Auction',
            labelColor: 'red',
            title: 'Six-piece clothing set (blouse - pants - hat and ...',
            price: 1000,
            timeDay: 10,
            timeHours: 12,
            timeMins: 50
        };

        render(<ProductCard {...props} />);

        const productTitle = screen.getByText(props.title);
        const lotStartsIn = screen.getByText('Lot starts in');


        expect(productTitle).toBeInTheDocument();
        expect(lotStartsIn).toBeInTheDocument();

    });
});
