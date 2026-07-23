export function cn(...inputs: (string | false | null | undefined)[]) {
  return inputs.filter(Boolean).join(" ");
}

export function formatWhatsAppMessage(
  phone: string,
  message?: string
): string {
  const base = `https://wa.me/${phone.replace(/[^0-9]/g, "")}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
