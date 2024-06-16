"use client";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";

const useInserMessage = () => {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
    console.log(formData);
  }
  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<any> {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`/api/messages`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      if (!res.ok) {
        throw new Error("failed to insert");
      }
      if (res.ok) {
        setLoading(false);
        setSuccess(true);
        console.log("inserted succesfully");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function anotherMessage(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    setSuccess(false);
    setFormData((prevFormData) => {
        return {
          ...prevFormData,
          name: "",
          email: "",
          message: "",
        };
      });
  }

  return {
    handleChange,
    handleSubmit,
    formData,
    success,
    anotherMessage,
    loading,
  };
};

export default useInserMessage;
