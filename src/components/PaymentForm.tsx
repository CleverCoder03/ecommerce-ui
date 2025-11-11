import { PaymentFormInputs, PaymentFormSchema } from "@/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(PaymentFormSchema),
  });

  const router = useRouter()

  const handlePaymentForm:SubmitHandler<PaymentFormInputs> = (data) => {

  }
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(handlePaymentForm)}>
      <div className="flex flex-col gap-1">
        <label htmlFor="cardHolder" className="text-xs font-medium text-gray-500">
          Name on card
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="cardHolder"
          placeholder="John Doe"
          {...register("cardHolder")}
        />
        {errors.cardHolder && (
          <p className="text-xs text-red-500">{errors.cardHolder.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="cardNumber" className="text-xs font-medium text-gray-500">
          Card number
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="cardNumber"
          placeholder="123 456 789"
          {...register("cardNumber")}
        />
        {errors.cardNumber && (
          <p className="text-xs text-red-500">{errors.cardNumber.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="expirationDate" className="text-xs font-medium text-gray-500">
          Expiration Date
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="expirationDate"
          placeholder="01/28"
          {...register("expirationDate")}
        />
        {errors.expirationDate && (
          <p className="text-xs text-red-500">{errors.expirationDate.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="cvv" className="text-xs font-medium text-gray-500">
          CVV
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="number"
          id="cvv"
          placeholder="123"
          {...register("cvv")}
        />
        {errors.cvv && (
          <p className="text-xs text-red-500">{errors.cvv.message}</p>
        )}
      </div>
      <div className="flex items-center gap-2 mt-4">
          <Image src="/klarna.png" alt="Klarna" width={50} height={25} className="rounded-md" />
          <Image src="/cards.png" alt="Cards" width={50} height={25} className="rounded-md" />
          <Image src="/stripe.png" alt="Stripe" width={50} height={25} className="rounded-md" />
      </div>
      <button
      type="submit"
        className="bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white rounded-lg w-full p-2 cursor-pointer flex items-center justify-center gap-2"
      >
        Checkout <ShoppingCart className="size-3" />
      </button>
    </form>
  );
};

export default PaymentForm;
