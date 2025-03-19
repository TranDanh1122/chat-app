import React from "react";
import {
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
    FormField
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import clsx from "clsx";
import { Eye, EyeClosed } from 'lucide-react'
import { Button } from "@/components/ui/button";
interface InputProps {
    form: UseFormReturn<any>,
    name: string,
    label: string,
    placeholder: string
}
const PasswordInput = ({ form, name, label, placeholder }: InputProps): React.JSX.Element => {
    const [isFocus, setForcus] = React.useState<boolean>(false)
    const [isView, setView] = React.useState<boolean>(false)
    return <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
            <FormItem className="relative w-full h-fit">
                <FormLabel style={{ transform: "translate" }} className={clsx("text-white absolute z-10 left-3 -translate-y-1/2 duration-200 ease-in leading-5 ", {
                    "top-0 text-sm bg-[linear-gradient(to_bottom,#525252_50%,#F8F8F8/5_50%)] text-white p-1 ": isFocus || field.value != "",
                    "top-1/2 text-md text-neutral-400 font-semibold": !isFocus && field.value == "",
                })}>{isFocus ? label : (field.value ? label : placeholder)}</FormLabel>
                <FormControl>
                    <Input autoComplete="off"
                        type={isView ? "text" : "password"}
                        placeholder={(field.value || isFocus) ? placeholder : ""}
                        className="peer focus-visible:ring-0 focus-visible:ring-offset-0 bg-[#F8F8F8]/5  py-5 px-4 leading-5 border-0 text-white focus:bg-neutral-800"
                        onFocus={() => setForcus(true)}
                        {...field}
                        onBlur={() => {
                            setForcus(false);
                            field.onBlur();
                        }}
                    />
                </FormControl>
                <Button className="bg-transparent absolute right-0 top-1/2 -translate-y-1/2 hover:bg-transparent" onMouseDown={() => setView((prev) => !prev)}>
                    {!isView && <EyeClosed />}
                    {isView && <Eye />}
                </Button>
                <FormMessage className="font-bold text-sm text-red-500" />
            </FormItem>
        )}
    />
}
export default PasswordInput
