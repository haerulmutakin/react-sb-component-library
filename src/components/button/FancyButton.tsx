import React from 'react';
import './FancyButton.css';

export interface FancyButtonProps {
    title: string,
    variant: string,
    /**
     * Seberapa besar ukuran tombol
     */
    size?: 'small' | 'medium' | 'large',
    rounded?: boolean,
    onClick?: () => void
}

export const FancyButton: React.FC<FancyButtonProps> = ({
    title = 'Button',
    variant = 'primary',
    size = 'medium',
    rounded = false,
    ...props
}) => {
    const mode = rounded ? 'fancy-button--rounded' : ''
    return (
        <button
            className={['fancy-button', `fancy-button--${size}`, mode].join(' ')}
            {...props}
        >
            {title}
        </button>);
}
