import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDate(arg: {
  date: string | Date;
  props: { format: string };
}): string {
  const parseDate: string = format(new Date(arg.date), arg.props.format, {
    locale: ptBR,
  });

  return parseDate;
}
