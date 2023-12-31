import React, { useState } from "react";
import { db } from "../utils/firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

const Transaction = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // onSubmit of form, checking input field validations before quering the database.
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!walletAddress.trim()) {
      setError("Wallet address field cannot be empty");
      return;
    }

    // Using regular expression to match the user input wallet address
    const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;
    if (!ethAddressRegex.test(walletAddress)) {
      setError("Invalid Ethereum address format");
      return;
    }

    // Checking if the amount entered is a valid number in the given range
    const amountNumber = Number(amount);
    if (isNaN(amountNumber) || amountNumber < 0 || amountNumber > 10000) {
      setError("Amount must be a number between 0 and 10,000");
      return;
    }

    try {
      // Quering the database to check if wallet addresss is already present.
      const dbDocs = await getDocs(
        query(
          collection(db, "transaction-details"),
          where("walletAddress", "==", walletAddress)
        )
      );

      // Only if the wallet address is unique then only add the transaction to the firestore database
      if (!dbDocs.empty) {
        setError("Wallet address already exists!");
      } else {
        const docRef = await addDoc(collection(db, "transaction-details"), {
          walletAddress: walletAddress,
          amount: amount,
        });
        // console.log("Document written with ID: ", docRef.id);
        // On successful submission, show success message and make the input fields empty.
        setSuccess("Transaction created successfully");
        setWalletAddress("");
        setAmount("");
        setError("");
      }
    } catch (err) {
      // Handle error if any
      setError(err.message, "Failed to submit data. Please try again.");
    }
  };

  return (
    <div className=" w-[100%] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold my-20 mx-10">Transaction</h1>
      <form
        onSubmit={handleSubmit}
        className="w-[40%] flex flex-col gap-4 mb-44"
      >
        <input
          placeholder="Wallet Address"
          type="text"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          className=" border-2 border-slate-400 rounded-sm p-2"
        />
        <input
          placeholder="Amount (0-10000)"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border-2 border-slate-400 rounded-sm p-2"
        />
        {/* Error or Success message */}
        {error && (
          <p className="mx-auto text-red-600 text-lg font-semibold">{error}</p>
        )}
        {success && (
          <p className="mx-auto text-green-600 text-lg font-semibold">
            {success}
          </p>
        )}
        <button
          type="submit"
          className="w-fit mx-auto px-4 py-2 text-white text-lg font-semibold bg-green-800 rounded-md hover:bg-green-700 hover:scale-110 duration-100"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Transaction;
