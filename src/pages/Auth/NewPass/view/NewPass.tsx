import React from "react";
import NewPassSchema from "../schema/NewPassSchema";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { PasswordInput } from "@/components/app";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { z } from "zod";
export default function NewPassView(): React.JSX.Element {
    const form = useForm<z.infer<typeof NewPassSchema>>({
        defaultValues: {
            password: "",
            confirmPass: ""
        }
    })
    function onSubmit(values: z.infer<typeof NewPassSchema>) {
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3.5 w-4/5 md:w-2/3 lg:w-1/3 bg-[#FFFFFF]/5 px-10 py-14 rounded-2xl max-w-[400px]">
                <img src="/assets/logo.png" alt="logo" className="size-15 object-cover mx-auto mb-6" />
                <h1 className="text-[2rem] text-white font-semibold leading-10 -tracking-[0.64px] text-center mb-10">Bento Social</h1>
                <PasswordInput name="password" placeholder="Password" label="Password" form={form} />
                <PasswordInput name="confirmPass" placeholder="Confirm Password" label="Confirm Password" form={form} />
                <Button className="text-sm size-auto w-full py-4 flex hover:opacity-50 cursor-pointer rounded-4xl mt-6" type="submit">Create new password</Button>
                <p className="text-[0.75rem] text-white leading-4 opacity-80 text-center">
                    Got your password?  <Link className="font-semibold" to="/auth/login">Sign in</Link>
                </p>
            </form>
        </Form>
    )
}