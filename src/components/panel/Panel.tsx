import React from 'react';
import './Panel.css';

export interface PanelProps {
    title: string,
    content: string
};

export const Panel: React.FC<PanelProps> = ({title = 'Title', content = 'Content'}) => {
    return (
        <div className="panel-box">
            <div className="panel-header">
                <div className="panel-title">{title}</div>
                <div className="panel-close">Close</div>
            </div>
            <div className="panel-content">
                {content}
            </div>
        </div>
    )
} 