import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Phone, Send } from 'lucide-react';
import { companyInfo } from '../data/ncr-dreamhomes-info';

export const WhatsAppFloatingButton = () => {
  const [open, setOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a teaser tooltip after 3 seconds, hide after 6 seconds
    const showT = setTimeout(() => setShowTooltip(true), 3000);
    const hideT = setTimeout(() => setShowTooltip(false), 9000);
    return () => {
      clearTimeout(showT);
      clearTimeout(hideT);
    };
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    const msg = e.target.elements.message.value ||
      `Hi NCR Dream Homes! I'm interested in your properties. Please share details.`;
    window.open(
      `https://wa.me/${companyInfo.contact.whatsapp}?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
    setOpen(false);
  };

  return (
    <>
      {/* Floating launcher */}
      <div className="fixed bottom-6 right-6 z-[60] flex items-end gap-3" data-testid="whatsapp-float">
        {/* Tooltip bubble */}
        {!open && showTooltip && (
          <div className="hidden sm:block bg-white shadow-2xl rounded-2xl rounded-br-none px-4 py-3 text-sm text-gray-800 max-w-[240px] animate-in fade-in slide-in-from-right-2 border border-gray-100">
            <div className="font-semibold text-emerald-700 mb-0.5">Hi there! 👋</div>
            <div className="text-xs text-gray-600">
              Chat with a property expert — reply in under 10 mins.
            </div>
            <div className="absolute -bottom-[7px] right-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white" />
          </div>
        )}

        <button
          onClick={() => {
            setOpen(!open);
            setShowTooltip(false);
          }}
          aria-label="Chat on WhatsApp"
          data-testid="whatsapp-float-btn"
          className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-full shadow-2xl flex items-center justify-center text-white transition-all hover:scale-110 group"
        >
          {/* Pulse rings */}
          {!open && (
            <>
              <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
              <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-40" />
            </>
          )}
          <div className="relative">
            {open ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7 fill-white" />}
          </div>
          {!open && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-white">
              1
            </span>
          )}
        </button>
      </div>

      {/* Chat popup */}
      {open && (
        <div
          className="fixed bottom-28 right-6 z-[60] w-[calc(100vw-3rem)] sm:w-[370px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-3"
          data-testid="whatsapp-float-popup"
        >
          {/* Header */}
          <div className="bg-gradient-to-br from-emerald-600 to-green-700 text-white px-5 py-4 flex items-center gap-3">
            <div className="w-11 h-11 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border border-white/30">
              <MessageCircle className="w-6 h-6 fill-white" />
            </div>
            <div className="flex-1">
              <div className="font-bold">NCR Dream Homes</div>
              <div className="text-xs text-green-100 flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" /> Online • Replies instantly
              </div>
            </div>
          </div>

          {/* Message area */}
          <div className="bg-[#E5DDD5] px-4 py-5 min-h-[140px] relative"
               style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill-opacity=\"0.05\"><circle cx=\"20\" cy=\"20\" r=\"1\" fill=\"black\"/></svg>')" }}>
            <div className="bg-white rounded-2xl rounded-tl-none shadow-sm p-3 max-w-[85%] text-sm text-gray-800 relative">
              <div className="font-semibold text-emerald-700 text-xs mb-1">NCR Dream Homes Expert</div>
              Hi there! 👋 How can I help you today?
              <div className="text-[10px] text-gray-400 mt-1.5 text-right">just now</div>
            </div>
          </div>

          {/* Input form */}
          <form onSubmit={handleSend} className="p-3 bg-gray-50 border-t border-gray-100" data-testid="whatsapp-float-form">
            <div className="flex items-center gap-2 bg-white rounded-full shadow-sm border border-gray-200 px-4 py-2.5 focus-within:ring-2 focus-within:ring-emerald-500">
              <input
                name="message"
                type="text"
                placeholder="Type your message..."
                data-testid="whatsapp-float-input"
                className="flex-1 text-sm outline-none bg-transparent"
              />
              <button
                type="submit"
                aria-label="Send"
                data-testid="whatsapp-float-send"
                className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center justify-between mt-3 text-xs">
              <a
                href={`tel:${companyInfo.contact.mobile}`}
                className="inline-flex items-center gap-1.5 text-gray-600 hover:text-emerald-700 font-semibold"
              >
                <Phone className="w-3.5 h-3.5" /> Call {companyInfo.contact.mobile}
              </a>
              <span className="text-gray-400">Powered by WhatsApp</span>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
