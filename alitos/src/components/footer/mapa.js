import React from 'react';

const Iframe = () => {


    return (
        // basic bootstrap classes. you can change with yours.
        <div className="row justify-content-center">
            <div className="col-1 ">
                <div className="emdeb-responsive ">
                    <iframe id="mapa" title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.4283101334263!2d-60.53870618498368!3d-31.731508118739594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b4528768ddbdc9%3A0xaee9fd58d692f854!2sCourreges%20142%2C%20Paran%C3%A1%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1632173433598!5m2!1ses-419!2sar"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Iframe;