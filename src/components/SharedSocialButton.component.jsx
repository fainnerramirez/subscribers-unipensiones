import React from 'react'
import {
    TelegramIcon,
    TelegramShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from "react-share";
import "../styles/buttonSocial.css";

const SharedSocialButton = () => {
    const shareUrl = "https://unipensiones.app";
    const title = "Unipensiones";

    return (
        <div className="Demo__container">
            <div className="Demo__some-network">
                <TelegramShareButton
                    url={shareUrl}
                    title={title}
                    className="Demo__some-network__share-button"
                >
                    <TelegramIcon size={32} round />
                </TelegramShareButton>
            </div>

            <div className="Demo__some-network">
                <WhatsappShareButton
                    url={shareUrl}
                    title={title}
                    separator=":: "
                    className="Demo__some-network__share-button"
                >
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
            </div>
        </div>
    );
}

export default SharedSocialButton