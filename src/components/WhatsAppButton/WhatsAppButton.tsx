import { FaWhatsapp } from 'react-icons/fa'; 

const WhatsAppButton = () => {
  const phoneNumber = '5585982317976';
  const message = 'Olá! Vi seu portfólio e gostaria de conversar.';
  
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-3 bg-green-500 rounded-full text-white shadow-lg hover:bg-green-600"
      aria-label="Entrar em contato pelo WhatsApp"
    >
      <FaWhatsapp className="h-8 w-8" />
    </a>
  );
}

export default WhatsAppButton;