"use server"

import {contactFormSchema} from "./schema"
import {z} from "zod"
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

export async function contactFormAction(_prevState: unknown, formData: FormData) {
	const defaultValues = z.record(z.string(), z.string()).parse(Object.fromEntries(formData.entries()))

	try {
		const data = contactFormSchema.parse(Object.fromEntries(formData))

		const transport = nodemailer.createTransport({
			service: 'gmail',
			/*
					setting service as 'gmail' is same as providing these setings:

					host: "smtp.gmail.com",
					port: 465,
					secure: true

					If you want to use a different email provider other than gmail, you need to provide these manually.
					Or you can go use these well known services and their settings at
					https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
			*/
			auth: {
				user: process.env.GOOGLE_APP_USER,
				pass: process.env.GOOGLE_APP_PASSWORD,
			},
		});

		const mailOptions: Mail.Options = {
			from: process.env.GOOGLE_APP_USER,
			to: process.env.GOOGLE_APP_USER,
			// cc: email, (uncomment this line if you want to send a copy to the sender)
			subject: `Message from ${data.name}: (${data.email})`,
			text: data.message,
		};

		const sendMailPromise = () =>
			new Promise<string>((resolve, reject) => {
				transport.sendMail(mailOptions, function (err) {
					if (!err) {
						resolve('Email sent');
					} else {
						reject(err.message);
					}
				});
			});

		await sendMailPromise();

		return {
			defaultValues: {
				name: "",
				email: "",
				message: "",
			},
			success: true,
			errors: null,
		}
	} catch (error) {
		if (error instanceof z.ZodError) {
			return {
				defaultValues,
				success: false,
				errors: Object.fromEntries(
					Object.entries(error.flatten().fieldErrors).map(([key, value]) => [key, value?.join(", ")]),
				),
			}
		}

		// Handle unexpected errors
		console.error("Unexpected error:", error);

		return {
			defaultValues,
			success: false,
			errors: null,
		}
	}
}
