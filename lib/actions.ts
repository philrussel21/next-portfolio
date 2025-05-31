/* eslint-disable unicorn/no-null */
'use server';

import {contactFormSchema} from './schema';
import {z} from 'zod';
import {createTransport} from 'nodemailer';
import type Mail from 'nodemailer/lib/mailer';

type Response = {
	defaultValues: Record<string, string>;
	success: boolean;
	errors: Record<string, string | null | undefined> | null;
};

const contactFormAction = async (_prevState: unknown, formData: FormData): Promise<Response> => {
	const defaultValues = z.record(z.string(), z.string()).parse(Object.fromEntries(formData.entries()));

	try {
		const data = contactFormSchema.parse(Object.fromEntries(formData));

		const transport = createTransport({
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
			subject: `Portfolio — Message from ${data.name}: (${data.email})`,
			text: data.message,
		};

		const sendMailPromise = async (): Promise<string> =>
			new Promise<string>((resolve, reject) => {
				transport.sendMail(mailOptions, function (err) {
					if (err) {
						reject(err.message);
					} else {
						resolve('Email sent');
					}
				});
			});

		await sendMailPromise();

		return {
			defaultValues: {
				name: '',
				email: '',
				message: '',
			},
			success: true,
			errors: null,
		};
	} catch (error) {
		if (error instanceof z.ZodError) {
			return {
				defaultValues,
				success: false,
				errors: Object.fromEntries(
					Object.entries(error.flatten().fieldErrors).map(([key, value]) => [key, value?.join(', ')]),
				),
			};
		}

		// Handle unexpected errors
		console.error('Unexpected error:', error);

		return {
			defaultValues,
			success: false,
			errors: null,
		};
	}
};

export {
	contactFormAction,
};