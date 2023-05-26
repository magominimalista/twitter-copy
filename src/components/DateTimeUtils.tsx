export function formatDateTime(date: Date): string {
    const dateTimeFormatter = new Intl.DateTimeFormat("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
    });
  
    return dateTimeFormatter.format(date).replace(",", "");
}
  