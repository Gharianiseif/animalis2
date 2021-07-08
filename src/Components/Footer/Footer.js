import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            
          
            <div className="footer1">
                <div className="elementFooter1 col-sm-3"></div>
                <div className=" col-sm-3">
                    <h4>Les avantages de votre animalerie en ligne </h4>
                    <p> Mais avez-vous toujours le temps d'arpenter les interminables couloirs à la recherche du produit recommandé par votre vétérinaire ou vos amis ?
Etes-vous certain(e) de trouver exactement "le" produit recherché ?</p>
                </div>
                <div className=" col-sm-3">
                <h4> Notre engagement</h4>
                    <p> Si nous affirmons être la marque d’affection, c’est parce que nous mettons tout notre cœur à vous proposer ce qu’il y a de meilleur pour le bien-être de vos animaux de compagnie.</p>
                </div>
            </div>
            <div className="footer2"> <i class="fa fa-copyright" aria-hidden="true"></i>
            &nbsp; GoMyCode 2021&nbsp;-&nbsp;All Rights Reserved
             </div>
        </div>
    );
}

export default Footer;
