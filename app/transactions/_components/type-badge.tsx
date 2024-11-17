import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  const typeConfig = {
    [TransactionType.DEPOSIT]: {
      color: "text-green-600",
      fill: "fill-green-600",
      label: "Depósito",
    },
    [TransactionType.EXPENSE]: {
      color: "text-red-600",
      fill: "fill-red-600",
      label: "Despesa",
    },
    [TransactionType.INVESTMENT]: {
      color: "text-gray-50",
      fill: "fill-gray-50",
      label: "Investimento",
    },
  };
  const config = typeConfig[transaction.type];
  if (!config) return null;
  return (
    <Badge className={`bg-muted font-bold ${config.color} hover:bg-muted`}>
      <CircleIcon className={`mr-1 ${config.fill}`} size={10} />
      {config.label}
    </Badge>
  );
};

export default TransactionTypeBadge;
