import React from 'react';
import { Dialog, Button } from 'rk-designsystem';

export const DialogExample = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} title="Dialog Title">
                <p>This is the content of the dialog.</p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
                    <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
                    <Button variant="primary" onClick={() => setIsOpen(false)}>Confirm</Button>
                </div>
            </Dialog>
        </>
    );
};