import {React} from 'react';
import './Sharing.css';
import whatsappicon from '../assets/whatsappicon.png';
import copyicon from '../assets/copyicon.png';

const Sharing = ({location, temp, humidity, wind}) => {
    const text= `Average temperature in ${location} is ${temp}°c, humidity is ${humidity}% and wind speed is ${wind}km/h.`;

    const shareToWhatsApp = () => {
        const whatsappUrl = `https://wa.me/?text=${text}`;
        window.open(whatsappUrl, '_blank');
      };
      
      const copyToClipboard = () => {
        navigator.clipboard.writeText(text)
          .then(() => {
            alert('Text copied to clipboard');
          })
          .catch(() => {
            alert('Failed to copy text: ');
          });
      };
      
    return (
        <div className='Share'>
            <p className='title'>Share</p>
            <p className='textbox'>{text}</p>
            <div className='buttons'>
                <button className="sharebutton" onClick={() => shareToWhatsApp()}>
                    <img src={whatsappicon} alt="" />
                </button>
                <button className="sharebutton" onClick={() => copyToClipboard()}>
                    <img src={copyicon} alt="" />
                </button>
            </div>     
        </div>
    )   
}

export default Sharing;