
import React, { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import ConfettiComponent from './../intro/confetti'; // Import your ConfettiComponent here

const DevelopmentNotice: React.FC = () => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [hasShownConfetti, setHasShownConfetti] = useState<boolean>(false);

    useEffect(() => {
        const hasSeenNotice = localStorage.getItem('developmentNotice');

        if (!hasSeenNotice) {
            setShowPopup(true);
        }
    }, []);

    const handleHidePopup = () => {
        localStorage.setItem('developmentNotice', 'true');
        setShowPopup(false);
        setHasShownConfetti(true);
    };

    const handleVerify = (token: string) => {
        // Verification logic here
        if (token) {
            setIsVerified(true);
        }
    };

    if (!showPopup) {
        return (
            <>
                {hasShownConfetti && isVerified && <ConfettiComponent />} {/* Display confetti if the notice is not shown */}
            </>
        );
    }

    return (
        <div>
           
        </div>
    );
};

export default DevelopmentNotice;
