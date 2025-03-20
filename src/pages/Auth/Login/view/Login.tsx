import React from "react";

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { PasswordInput, TextInput } from "@/components/app";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import LocalLoading from "@/components/app/Shared/LocalLoading";
export default function LoginView(): React.JSX.Element {
    const { form, handleSubmit, isPending } = useLogin()
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3.5 w-4/5 md:w-2/3 lg:w-1/3 bg-[#FFFFFF]/5 px-10 py-14 rounded-2xl max-w-[400px]">
                <img src="/assets/logo.png" alt="logo" className="size-15 object-cover mx-auto mb-6" />
                <h1 className="text-[2rem] text-white font-semibold leading-10 -tracking-[0.64px] text-center mb-10">Bento Social</h1>
                <TextInput name="email" placeholder="Email" label="Email" form={form} />
                <PasswordInput name="password" placeholder="Password" label="Password" form={form} />
                <Button disabled={isPending} className="text-sm size-auto w-full py-4 flex hover:opacity-50 cursor-pointer rounded-4xl mt-6" type="submit">
                    {isPending ? <LocalLoading /> : "Sign in"}
                </Button>
                <Button className="text-sm size-auto w-full py-4 flex hover:opacity-50 cursor-pointer rounded-4xl mt-3" type="button">
                    <img src="/assets/googleIcon.png" alt="Google Icon" className="size-5 object-cover" />
                    Sign in with Google
                </Button>
                <p className="text-[0.75rem] text-white leading-4 opacity-80 text-center">
                    Don’t have an account?  <Link className="font-semibold" to="/auth/register">Sign up, it’s free!</Link>
                </p>
            </form>
        </Form>
    )
}
