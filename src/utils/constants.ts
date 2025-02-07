export const WHATSAPP_NUMBER = "+5541988999584";
export const WHATSAPP_MESSAGE = "Olá Thainara, Gostaria de Agendar uma Consulta!";

export const getWhatsAppUrl = () => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
};
