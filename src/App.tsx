import { menuItems } from "./data/db";
import MenuItem from "./component/MenuItem";
import useOrder from "./hooks/useOrder";
import OrderContents from "./component/OrderContents";
import OrderTotals from "./component/OrderTotals";
import TipPercentageForm from "./component/TipPercentageForm";

function App() {
   const { addItem, order, removeItem, tip, setTip, placeOrder } = useOrder()

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Tips and Consumption Calculator
        </h1>
      </header>
      a
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black ">Menu</h2>

          <div className="space-y-3 mt-10">
          {menuItems.map(item => (
            <MenuItem
              key={item.id}
              item={item}
              addItem={addItem}
              
            />
          ))}
          </div>
          </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length ? (
            <>
            
            <OrderContents
            order={order}
            removeItem={removeItem}
          />

          <TipPercentageForm
            setTip={setTip}
            tip={tip}
          />

          <OrderTotals
            order={order}
            tip={tip}
            placeOrder={placeOrder}
              />
              
              </>
          ) : (
            <p className="text-center">The order is empty</p> 
          )}

         

        </div>
      </main>
    </>
  );
}

export default App;
