"use server";

interface FormState {
  isSuccess: boolean;
  message: string;
}

export async function handleForm(_: unknown, formData: FormData): Promise<FormState> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  if (password === null || email === null || username === null) {
    return { isSuccess: false, message: "Please fill out all fields." };
  }

  if (password === "12345") {
    return { isSuccess: true, message: "Welcome back!" };
  }

  return {
    isSuccess: false,
    message: "Wrong password.",
  };
}
