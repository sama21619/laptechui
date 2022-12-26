import { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
function Tooltip({ content, children }) {
    const Empty = () => {
        return <span></span>;
    };
    const Content = content || Empty;
    return (
        <Tippy duration={50} placement="bottom-start" content={<Content />} interactive={true}>
            {children}
        </Tippy>
    );
}
export default Tooltip;
