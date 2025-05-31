"use client"

import {useFormState, useFormStatus} from "react-dom"
import {Card, CardTitle, CardHeader, CardDescription, CardContent, CardFooter} from "../ui/card"
import {Input} from "../ui/input"
import {Label} from "../ui/label"
import {Button} from "../ui/button"
import {Textarea} from "../ui/textarea"

import {CheckCircleIcon} from "@phosphor-icons/react/dist/ssr"
import {contactFormAction} from "@app/lib/actions"
import {Fragment} from "react"

const ContactFormContent = () => {
	const [state, formAction] = useFormState(contactFormAction, {
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
		success: false,
		errors: null,
	})
	const {pending} = useFormStatus();

	return (
		<Fragment>
			<CardContent className="flex flex-col gap-6 mt-2">
				{state.success ? (
					<div className="flex flex-col items-center text-sm text-center">
						<CheckCircleIcon className="size-12 text-green-500" />
						<p className="mt-2">
							Got It! Thanks for Reaching Out.
						</p>
						<p>
							I'll get back to you as soon as possible.
						</p>
					</div>
				) : null}
				{!state.success && (
					<Fragment>
						<div className="group/field grid gap-2" data-invalid={!!state.errors?.name}>
							<Label htmlFor="name" className="group-data-[invalid=true]/field:text-red-500 font-medium">
								Name <span aria-hidden="true">*</span>
							</Label>
							<Input
								id="name"
								name="name"
								placeholder="You name here"
								className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
								disabled={pending}
								aria-invalid={!!state.errors?.name}
								aria-errormessage="error-name"
								defaultValue={state.defaultValues.name}
							/>
							{state.errors?.name && (
								<p id="error-name" className="text-red-500 text-sm">
									{state.errors.name}
								</p>
							)}
						</div>
						<div className="group/field grid gap-2" data-invalid={!!state.errors?.email}>
							<Label htmlFor="email" className="group-data-[invalid=true]/field:text-red-500 font-medium">
								Email <span aria-hidden="true">*</span>
							</Label>
							<Input
								id="email"
								name="email"
								placeholder="You email here"
								className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
								disabled={pending}
								aria-invalid={!!state.errors?.email}
								aria-errormessage="error-email"
								defaultValue={state.defaultValues.email}
							/>
							{state.errors?.email && (
								<p id="error-email" className="text-red-500 text-sm">
									{state.errors.email}
								</p>
							)}
						</div>
						<div className="group/field grid gap-2" data-invalid={!!state.errors?.message}>
							<Label htmlFor="message" className="group-data-[invalid=true]/field:text-red-500 font-medium">
								Message <span aria-hidden="true">*</span>
							</Label>
							<Textarea
								id="message"
								name="message"
								placeholder="Type your message here..."
								className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
								disabled={pending}
								aria-invalid={!!state.errors?.message}
								aria-errormessage="error-message"
								defaultValue={state.defaultValues.message}
							/>
							{state.errors?.message && (
								<p id="error-message" className="text-red-500 text-sm">
									{state.errors.message}
								</p>
							)}
						</div>
					</Fragment>
				)}
			</CardContent>
			{!state.success && (
				<CardFooter className="flex justify-center">
					<Button type="submit" disabled={pending} formAction={formAction}>
						{pending ? "Sending..." : "Send Message"}
					</Button>
				</CardFooter>
			)}
		</Fragment>
	)
}

const ContactForm = () => (
	<Card className="w-full max-w-lg mx-auto">
		<CardHeader className="text-center">
			<CardTitle>Let's build something great together.</CardTitle>
			<CardDescription>
				I'd love to hear about your project! Share your details, and we'll discuss how to achieve your online goals.
			</CardDescription>
		</CardHeader>
		<form>
			<ContactFormContent />
		</form>
	</Card >
)

export default ContactForm;