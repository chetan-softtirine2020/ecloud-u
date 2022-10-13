import { useCallback } from "react";
import useRazorpay from "react-razorpay";

export default function MakePayment() {
  const Razorpay = useRazorpay();
  const  handlePayment =  useCallback(() => {
  const amount=1 * 100;
  const options = {
      key: "rzp_live_LBhcmmFsc8Hnor",
      amount: amount,
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
    
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  return (
    <div className="App">
      <button onClick={handlePayment}>Click</button>
    </div>
  );
}