import { useCallback } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type orderTotalsProps = {
  order: OrderItem[],
  tip: number,
  placeOrder: () => void
};
export default function OrderTotals({ order, tip, placeOrder }: orderTotalsProps) {

  const subtotalAmount = useCallback(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
    );
    
  const tipAmount = useCallback(() => subtotalAmount() * tip, [tip, order])


  const totalAmount = useCallback(() => subtotalAmount() + tipAmount(), [tip, order])
  
  return (
    <>
      <div className="space-y-3 ">
        <h2 className="font-black text-2xl">Totals and Tips:</h2>
        <p>
          Subtotal to be paid: {""}
                  <span className="font-bold">{formatCurrency(subtotalAmount())}</span>
        </p>
      </div>

      <p>
        Tips: {""}
        <span className="font-bold">{formatCurrency(tipAmount())}</span>
      </p>
 
      <p>
        Total Payable: {""}
        <span className="font-bold">{formatCurrency(totalAmount())}</span>
      </p>

      <button className="w-full bg-black uppercase p-3 text-white font-bold mt-10 disabled:opacity-10"
        disabled={totalAmount() === 0}
        onClick={placeOrder}
      >
        Save Order
      </button>
    </>
  );
}
