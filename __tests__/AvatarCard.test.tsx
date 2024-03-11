import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import { describe, expect, test } from '@jest/globals';
import React from 'react';
import { render, screen } from '@testing-library/react';
import AvatarCard from '@/app/components/AvatarCard';

describe('AvatarCard component', () => {
    test('renders AvatarCard component with correct props', () => {
        const props = {
            imageUrl: `https://placehold.co/150x150`,
            name: `Hala Ahmed`,
            description: `I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Mackeup and Skin Care.`,
            followingCount: 5,
            followersCount: 20,
            rateCount: 4.2,
            ratePeopleCount: 15
        };

        render(<AvatarCard {...props} />);

        expect(screen.getByText(props.name)).toBeInTheDocument();
        expect(screen.getByText(props.description)).toBeInTheDocument();
        expect(screen.getByText(`${props.followingCount}`)).toBeInTheDocument();
        expect(screen.getByText(`${props.followersCount}`)).toBeInTheDocument();
        expect(screen.getByText(`${props.rateCount}`)).toBeInTheDocument();
        expect(screen.getByText(`(${props.ratePeopleCount})`)).toBeInTheDocument();
        expect(screen.getByText('Follow')).toBeInTheDocument();
    });
});
